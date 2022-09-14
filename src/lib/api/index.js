import axios from "axios";

const solar = axios.create({
  // baseURL: "http://a0a2-211-36-142-251.ngrok.io",
});

export const Search = (params) => {
  return solar.get(params);
};
