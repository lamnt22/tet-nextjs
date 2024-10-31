import { get, post } from '../axios';

export const login = async (data: any) => {
  return await post(`/login`, data);
}

export const register = async (url: string, data: any) => {
  return await post(url, data);
}

export const validateInfo = async (url: string, data: any) => {
  return post(url, data);
}

export const getUrlPayment = async (url: string) => {
  return await get(url);
}