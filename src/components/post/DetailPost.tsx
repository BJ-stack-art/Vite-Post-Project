import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { IComment, IPost } from "../../interfaces/Post";
import {
  createPostComent,
  getDetailPost,
  getPostComments,
} from "../../services/postRepo";

const DetailPost: React.FC = () => {
  const { id } = useParams();
  const [post, setPost] = useState<IPost | null>(null);
  const [comments, setComments] = useState<IComment[] | null>([]);

  const getPostData = async () => {
    try {
      const response = await getDetailPost({ id: id! });
      setPost(response.data);
      const comments = await getPostComments({ id: id! });
      setComments(comments.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  const { register, handleSubmit, reset } = useForm<IComment>({
    defaultValues: {
      postId: parseInt(id!),
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await createPostComent(data);
      setComments([response.data, ...comments!]);
      reset();
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <h1>Detail Post</h1>
      <div>
        <h3>{post?.title}</h3>
        <p>{post?.body}</p>
      </div>

      <div>
        <div>
          <h3>Add Comment</h3>
          <form
            onSubmit={onSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              margin: "20px auto",
            }}
          >
            <input type={"text"} placeholder="Name" {...register("name")} />
            <input type={"email"} placeholder="Email" {...register("email")} />
            <textarea placeholder="Comment" {...register("body")}></textarea>
            <button>Submit</button>
          </form>
        </div>

        <h3>Comments</h3>
        <div>
          {comments?.map((comment) => (
            <div key={comment.id}>
              <h5>{comment.name}</h5>
              <h6>{comment.email}</h6>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
