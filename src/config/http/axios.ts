import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL

const requester = axios.create({
  baseURL: `${BASE_URL}/api`,
  headers: {
    "Content-type": "application/json"
  }
});

requester.interceptors.response.use((response) => response.data);

export default requester