import React from "react";
import { Link } from "react-router-dom";
import { IPost } from "../../interfaces/Post";

interface ListPostProps {
  posts: IPost[];
  deleteHandler: (id: number) => void;
}

const ListPost: React.FC<ListPostProps> = (props) => {
  const { posts, deleteHandler } = props;

  return (
    <div>
      <h1>List Posts</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h6>{post.title}</h6>
            <Link to={`/posts/${post.id}`}>Detail</Link>
            <button onClick={deleteHandler.bind(null, post.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPost;
