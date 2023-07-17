import React, { useState, useEffect } from "react";
import PostList from "../components/PostList";

export default function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => setPosts(data));
    }, []);
  
    return (
      <div>
        <PostList posts={posts} />
      </div>
    );
}
