import React, { useEffect, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { IPost } from "../../interfaces/Post";
import { deletePost, getPost } from "../../services/postRepo";
import CreatePost from "./CreatePost";
import DetailPost from "./DetailPost";
import ListPost from "./ListPost";

const PostPage: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<IPost[]>([]);

  const getAllPosts = async () => {
    const response = await getPost();
    setPosts(response.data);
  };

  const addPostHandler = (data: IPost) => {
    setPosts([data, ...posts]);
    navigate("/posts");
  };

  const deleteHandler = async (id: number) => {
    try {
      const response = await deletePost({ id });
      if (response.status === 200) {
        setPosts(posts.filter((post) => post.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div>
      <Link to={"/posts/create"}>Add Post</Link>
      <Routes>
        <Route
          path="/"
          element={<ListPost posts={posts} deleteHandler={deleteHandler} />}
        />
        <Route
          path="/create"
          element={<CreatePost addPostHandler={addPostHandler} />}
        />
        <Route path="/:id" element={<DetailPost />} />
      </Routes>
    </div>
  );
};

export default PostPage;
