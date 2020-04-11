import {axiosBase} from "../utils/axios";


export const retrievePosts = () => {
    return axiosBase.get('articles');
};