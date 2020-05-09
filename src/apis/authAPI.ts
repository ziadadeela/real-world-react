import {axiosBase} from "../utils/axios";
import {AuthenticatedUser, LoginCredentials} from "../Types";


interface AuthUserResponse {
    user: AuthenticatedUser,
}

export function login(email: string, password: string): Promise<AuthUserResponse> {
    //TODO: catch here?
    //TODO: use LoginCredentials?
    return axiosBase.post(`users/login`, {user: {email, password}}).then(result => (
        {
            user: result.data.user,
        }
    ));
}