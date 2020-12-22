import axios from "axios";

const api = axios.create({
  baseURL: "https://theuerl.com",
});

export default api;
