import { IUser } from "../interfaces/User";
import { apiService, methodServices } from "./api-services";

const URL = {
  BASE_USER: "/users",
};

type dataId = { id: number | string };

export const getUsers = () => {
  return apiService<IUser[]>(URL.BASE_USER, methodServices.GET);
};

export const getDetailUser = (data: dataId) => {
  return apiService<IUser>(URL.BASE_USER + `/${data.id}`, methodServices.GET);
};

export const createUser = (data: IUser) => {
  return apiService<IUser>(URL.BASE_USER, methodServices.POST, data);
};

export const deleteUser = (data: dataId) => {
  return apiService(URL.BASE_USER + `/${data.id}`, methodServices.DELETE);
};
