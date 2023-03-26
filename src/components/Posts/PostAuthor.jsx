import { useSelector } from "react-redux";
import { selectAllUsers } from "../../store/slices/usersSlice";

const PostAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return <span>By {author ? author.name : "Unkown author"}</span>;
};

export default PostAuthor;
