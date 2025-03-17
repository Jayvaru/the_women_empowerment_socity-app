import axiosInstance from "./axiosInstance";

export const getProjects = async () => {
  try {
    const response = await axiosInstance.get("/projects");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProject = async (id) => {
  try {
    const response = await axiosInstance.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};