import axiosInstance from "./axiosInstance";

export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/users/login", {data});
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post("/users/register", {data});
    return response.data;
  } catch (error) {
    console.log(error);
  }
};