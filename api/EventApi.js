import axiosInstance from "./axiosInstance";

export const getEvents = async () => {
  try {
    const response = await axiosInstance.get("/events");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getEvent = async (id) => {
  try {
    const response = await axiosInstance.get(`/events/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};