import { Link } from "react-router-dom";
const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Lista de Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link to={`/posts/${post.id}`}>Go to the post</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
