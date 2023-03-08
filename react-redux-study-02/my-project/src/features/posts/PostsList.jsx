import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id} className='border border-black rounded-2xl p-4 m-2'>
      <h3 className='font-bold'>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p>
        {" "}
        <PostAuthor userId={post.userId} /> <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
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
