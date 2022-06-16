import axios, { AxiosInstance, AxiosResponse } from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

export const methodServices = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

const config = {
  baseURL: API_URL,
  timeout: 1000,
};

/* const getHeaders = async (isMultipart: boolean) => {
  return {
    Accept: "application/json",
    "Content-Type": isMultipart ? "multipart/form-data" : "application/json",
  };
}; */

const instance: AxiosInstance = axios.create(config);

/* instance.interceptors.request.use(async (request) => {
  request.headers = getHeaders(request.multipart);
  return request;
}); */

export const apiService = async <T>(
  url: string,
  method: string,
  data?: object,
  params?: object
  // multipart = false
): Promise<AxiosResponse<T>> => {
  const service = await instance({
    url: url,
    method: method,
    data: data,
    params: params,
    timeout: 6000,
    // multipart: multipart
  });
  return service;
};
