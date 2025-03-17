import axiosInstance from "./axiosInstance";

export const getOrganizationDetails = async () => {
  try {
    const response = await axiosInstance.get("/organizationDetails");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getOrganizationDetail = async (id) => {
  try {
    const response = await axiosInstance.get(`/organizationDetails/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};