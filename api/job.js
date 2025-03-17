import axiosInstance from "./axiosInstance";

export const getJobs = async () => {
  try {
    const response = await axiosInstance.get("/jobs");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getJob = async (id) => {
  try {
    const response = await axiosInstance.get(`/jobs/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};