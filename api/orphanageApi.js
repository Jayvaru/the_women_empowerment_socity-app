import axiosInstance from "./axiosInstance";

export const getOrphanages = async () => {
  try {
    const response = await axiosInstance.get("/orphanages");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrphanage = async (id) => {
  try {
    const response = await axiosInstance.get(`/orphanages/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};