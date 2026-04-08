import axios from "axios";

export const api = axios.create({
  baseURL: "https://apitest.thewarriors.team/api",
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use((config) => {
  if (typeof document !== "undefined") {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});
