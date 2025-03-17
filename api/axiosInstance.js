import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://women-empowering-b45b5-default-rtdb.firebaseio.com/",
});

export default axiosInstance;