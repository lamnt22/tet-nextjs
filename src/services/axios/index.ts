import { AxiosRequestConfig } from "axios";
import axios from "./axiosClient";

export const get = async (
  url: string,
  config: AxiosRequestConfig<any> = {}
) => {
  return await axios
    .get(url, {
      ...config,
    });
};

export const post = async (
  url: string,
  data: any,
  config: AxiosRequestConfig<any> = {}
) => {
  return await axios
    .post(url, data, {
      ...config,
    });
};

export const put = async (
  url: string,
  data: any,
  config: AxiosRequestConfig<any> = {}
) => {
  return await axios
    .put(url, data, {
      ...config,
    });
};

export const _delete = async (
  url: string,
  config: AxiosRequestConfig<any> = {}
) => {
  return await axios.delete(url, { ...config });
};
