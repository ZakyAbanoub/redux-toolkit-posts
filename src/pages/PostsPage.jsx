import { useSelector } from "react-redux";
import { selectAllPosts } from "../store/slices/postsSlice";
import PostsList from "../components/Posts/PostsList";
import AddPostForm from "../components/Posts/AddPostForm";

const Posts = () => {
  const posts = useSelector(selectAllPosts);
  return (
    <>
      <AddPostForm />
      <PostsList posts={posts} />
    </>
  );
};

export default Posts;
