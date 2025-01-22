import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:8080/";
const timeout = 5000;
const token = Cookies.get("token");
const headers = {
  Authorization: `Bearer ${token ? token : ""}`,
};

export const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers,
  withCredentials: true,
});
