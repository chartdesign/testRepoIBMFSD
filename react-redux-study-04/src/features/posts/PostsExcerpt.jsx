import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";

const PostsExcerpt = ({ post }) => {
  return (
    <article className='border border-black p-4 m-2 rounded-2xl'>
      <h3 className='font-semibold'>{post.title}</h3>
      <p className='font-light'>{post.body.substring(0, 50)}...</p>
      <p className='postCredit'>
        <span className='font-bold mr-2 underline'>
          <Link to={`post/${post.id}`}>View Post</Link>
        </span>

        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};
export default PostsExcerpt;
