import axiosInstance from "./axiosInstance";

export const getBlogs = async () => {
  try {
    const response = await axiosInstance.get("/blogs");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getBlog = async (id) => {
  try {
    const response = await axiosInstance.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};