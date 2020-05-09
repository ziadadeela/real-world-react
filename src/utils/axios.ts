import axios from "axios"
import {getAuthenticatedUser} from "../helpers/authHelper";

//TODO: I DONT LIKE THIS WAY
const token = getAuthenticatedUser()?.token;
let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};
if (token) {
    Object.assign(headers, {Authorization: `Token ${token}`});
}
export const axiosBase = axios.create(
    {
        baseURL: `${process.env.REACT_APP_BASE_URL}`,
        headers: headers,
    }
);