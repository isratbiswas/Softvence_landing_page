import axios from "axios";

export const api = axios.create({
  baseURL: "https://apitest.thewarriors.team/api",
  headers: {
    Accept: "application/json",
  },
});
