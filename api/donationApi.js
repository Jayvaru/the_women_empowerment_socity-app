import axiosInstance from "./axiosInstance";

export const getDonations = async () => {
  try {
    const response = await axiosInstance.get("/donations");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDonation = async (id) => {
  try {
    const response = await axiosInstance.get(`/donations/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};