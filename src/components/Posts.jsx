import React, { useContext } from "react";
import Post from "./Post";
import AddPost from "./AddPost";
import { PostsContext } from "../providers/PostsProvider";

/* eslint-disable */
const Posts = ({ onCreate }) => {
  const posts = useContext(PostsContext);

  return (
    <section className="Posts">
      <AddPost onCreate={onCreate} />
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </section>
  );
};
/* eslint-enable */
export default Posts;
