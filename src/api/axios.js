// src/api/axios.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/api", // optional: include /api prefix if backend uses it
});

// ✅ Attach JWT token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Optional: handle unauthorized responses globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn("Unauthorized — logging out user...");
      localStorage.removeItem("token");
      window.location.href = "/login"; // redirect to login
    }
    return Promise.reject(error);
  }
);

export default api;
