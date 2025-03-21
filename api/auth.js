import { AxiosInstance } from './axiosInstance'

export const login = async (formData) => {
  const response = await AxiosInstance(`/login`, {
    method: "POST",
    data: formData,
  });
  return response;
};

export const registration = async (formData) => {
  const response = await AxiosInstance(`/signup`, {
      method: "POST",
      data: formData,
  });
  return response;
};