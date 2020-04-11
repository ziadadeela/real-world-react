import axios from "axios"

export const axiosBase = axios.create(
    {
        baseURL: `${process.env.BASE_URL}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }
);