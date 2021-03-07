import axios from "axios";
import qs from "qs";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

export const axiosInstance = axios.create({
  baseURL: "https://reactnd-books-api.udacity.com",
  headers: {
    "Content-Type": "application/json",
    "Set-Cookie": "HttpOnly;Secure;SameSite=Strict",
    Accept: "application/json",
    Authorization: token,
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: "comma" });
  },
});
