import axios from "axios";

export const port = import.meta.env.VITE_PORT;

const apiCVFacil = axios.create({
  baseURL: port,
});

export default apiCVFacil;
