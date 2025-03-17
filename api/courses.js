import axiosInstance from "./axiosInstance";

export const getCourses = async () => {
  try {
    const response = await axiosInstance.get("/courses");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};  

export const getCourse = async (id) => {
  try {
    const response = await axiosInstance.get(`/courses/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};