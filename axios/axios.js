import axios from "axios";
const axiosInstance = axios.create({
    baseURL: "http://10.0.2.2:3001/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
    },
});

export default axiosInstance;
