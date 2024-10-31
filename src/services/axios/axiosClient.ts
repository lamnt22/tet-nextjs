import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import {API_STATUS, JWT_EXCEPTION_STATUS} from '@/constants';
import { useAuthStore } from "@/stores";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const instance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const onRequest: any = (config: AxiosRequestConfig): AxiosRequestConfig => {
  let state: any = useAuthStore?.getState();
  config.headers!.Authorization = `Bearer ${state.getCookie()}`;
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response;
};

const handleResponseErrorAuth = () => {
  let state: any = useAuthStore?.getState();
  state.removeCookie();
  window.location.href = '/login'
}

const onResponseError = async (error: any): Promise<any> => {
  let errorResponse = error?.response;
  console.log(errorResponse);
  

  if(errorResponse && errorResponse.status === API_STATUS.UNAUTHORIZED){
    let message = errorResponse?.data?.message;

    // PENDING CONFIG
    if(message && message === JWT_EXCEPTION_STATUS.TokenInvalid){
      handleResponseErrorAuth();
    }else if(message && message === JWT_EXCEPTION_STATUS.TokenExpired){
      handleResponseErrorAuth();
    }else{
      handleResponseErrorAuth();
    }
  }

  return Promise.reject(error);
}

instance.interceptors.request.use(onRequest, onRequestError);
instance.interceptors.response.use(onResponse, onResponseError);

export default instance