import axios from "axios";

const baseURL = "http://localhost:8080/";
const timeout = 5000;
const token = "";
const headers = {
  // "application/type": "application/json",
  Authorization: `Bearer ${token}`,
};

export const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers,
  withCredentials: true,
});
