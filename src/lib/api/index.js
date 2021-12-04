import axios from "axios";

const solar = axios.create({
  baseURL: "http://9416-2001-2d8-910-b8e6-f8e8-b3af-214-9c0b.ngrok.io",
});

export const Search = (params) => {
  return solar.get(params);
};
