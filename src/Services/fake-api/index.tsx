import axios from "axios";

export const fakeApi = axios.create({
  baseURL: "https://cointracker-fake-api.onrender.com",
  timeout: 10000,
});
