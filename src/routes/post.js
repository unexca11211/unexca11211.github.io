import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { downloadMarkdownPost } from "../utils/utils_supabase";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./post.css";
import supabase from "../utils/supabase_init";

function loadImageMarkdown(src) {
  let { data: url } = supabase.storage
    .from("blog_storage")
    .getPublicUrl(`image/${src}`);
  console.log(url.publicUrl);
  return url.publicUrl;
}

export default function Post() {
  const { data: post } = useLoaderData();
  // console.log("post original", post);
  const [isLoading, setIsLoading] = useState(true);
  const [postContent, setPostContent] = useState(null);

  useEffect(() => {
    if (!post) {
      const obj = { title: "error", content: "error" };
      const blob = new Blob([JSON.stringify(obj, null, 2)], {
        type: "application/octet-stream",
      });
      setPostContent(blob);
    } else {
      downloadMarkdownPost(post.content)
        .then((data) => {
          data.text().then((text) => {
            setPostContent(text);
            setIsLoading(false);
          });
        })
        .catch((error) => console.error(error));
    }
  }, [post]);

  // console.log("post content", postContent);
  if (isLoading) return <p>Loading ...</p>;

  return (
    <>
      <article className="post">
        <header>
          <h1>{post.title}</h1>
          {post.description ? <h2>{post.description}</h2> : ""}
          <div>
            <time dateTime={post.created_at && ""}>
              {post.created_at && ""}
            </time>
            <h4>
              Author {post.users.first_name && ""} {post.users.last_name && ""}
            </h4>
          </div>
        </header>
        <div className="post-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, ...props }) => {
                console.log(src);
                return (
                  <img
                    src={loadImageMarkdown(src)}
                    alt="mucho texto"
                    {...props}
                  />
                );
              },
            }}
          >
            {postContent}
          </ReactMarkdown>
        </div>
      </article>
    </>
  );
}
