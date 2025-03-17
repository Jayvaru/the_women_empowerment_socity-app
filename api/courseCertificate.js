import axiosInstance from "./axiosInstance";

export const getCourseCertificates = async () => {
  try {
    const response = await axiosInstance.get("/courseCertificates");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getCourseCertificate = async (id) => {
  try {
    const response = await axiosInstance.get(`/courseCertificates/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};