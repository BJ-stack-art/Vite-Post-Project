import { IComment, IPost } from "../interfaces/Post";
import { apiService, methodServices } from "./api-services";

const URL = {
  BASE_POST: "/posts",
  BASE_COMMENT: "/commments",
};

type dataId = { id: number | string };

export const getPost = () => {
  return apiService<IPost[]>(URL.BASE_POST, methodServices.GET);
};

export const getDetailPost = (data: dataId) => {
  return apiService<IPost>(URL.BASE_POST + `/${data.id}`, methodServices.GET);
};

export const getPostComments = (data: dataId) => {
  return apiService<IComment[]>(
    URL.BASE_POST + `/${data.id}/comments`,
    methodServices.GET
  );
};

export const createPost = (data: IPost) => {
  return apiService<IPost>(URL.BASE_POST, methodServices.POST, data);
};

export const createPostComent = (data: IComment) => {
  return apiService<IComment>(
    URL.BASE_POST + `/${data.postId}/comments?postId=${data.postId}`,
    methodServices.POST,
    data
  );
};

export const deletePost = (data: dataId) => {
  return apiService(URL.BASE_POST + `/${data.id}`, methodServices.DELETE);
};
