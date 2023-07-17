import React from "react";

const PostList = ({ posts }) => {
  return (
    <div>
      <h2>Lista de Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
