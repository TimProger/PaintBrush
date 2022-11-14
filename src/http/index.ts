import axios from "axios";

const PORT: number = 8080;

export const API_BASE_URL = "https://dream-design-server.herokuapp.com/api/";
export const APP_BASE_URL = `http://localhost:${PORT}`;

export const $api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    common: {
      accept: "application/json",
    },
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
