import React from "react";
import { useForm } from "react-hook-form";
import { IPost } from "../../interfaces/Post";
import { createPost } from "../../services/postRepo";

interface CreatePostProps {
  addPostHandler: (data: IPost) => void;
}

const CreatePost: React.FC<CreatePostProps> = (props) => {
  const { addPostHandler } = props;
  const { register, handleSubmit } = useForm<IPost>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await createPost(data);
      addPostHandler(response.data);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title</label>
          <input type="text" {...register("title")} />
        </div>
        <div>
          <label>Body</label>
          <textarea {...register("body")}></textarea>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
