import axios from "axios";

const solar = axios.create({
  baseURL: "http://670d-2001-2d8-ee35-ea4f-a0ef-4096-b91b-eeae.ngrok.io/",
});

export const search = (params) => {
  return solar.get(params);
};
