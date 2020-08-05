import axios from "axios"
import {getToken} from "../helpers/authHelper";

//TODO: I DONT LIKE THIS WAY
let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
const axiosBase = axios.create(
    {
        baseURL: `${process.env.REACT_APP_BASE_URL}`,
        headers: headers,
    }
);

axiosBase.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default axiosBase