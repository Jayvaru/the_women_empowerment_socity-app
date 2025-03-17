import axiosInstance from "./axiosInstance";

export const getProblemForums = async () => {
  try {
    const response = await axiosInstance.get("/problemForums");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProblemForum = async (id) => {
  try {
    const response = await axiosInstance.get(`/problemForums/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};