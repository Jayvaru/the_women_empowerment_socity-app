import axiosInstance from "./axiosInstance";

export const getWorkspaces = async () => {
  try {
    const response = await axiosInstance.get("/workspaces");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWorkspace = async (id) => {
  try {
    const response = await axiosInstance.get(`/workspaces/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};