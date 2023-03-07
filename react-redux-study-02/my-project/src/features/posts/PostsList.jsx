import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id} className='border border-black rounded-2xl p-4 m-2'>
      <h3 className='font-bold'>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));
  return (
    <section>
      <h2 className='font-bold text-lg'>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
