import axiosBase from "../utils/axios";
import {AuthenticatedUser, Profile} from "../Types"

interface RetrieveUserResponse {
    profile: Profile
}

export function retrieveUserProfile(username: string): Promise<RetrieveUserResponse> {
    return axiosBase.get(`profiles/${username}`).then(result => (
        {
            profile: result.data.profile,
        }
    ));
}

export function updateUser(image: string, username: string, bio: string, email: string, password: string): Promise<AuthenticatedUser> {
    return axiosBase.put(`users`, {
        image,
        username,
        bio,
        email,
        password,
    })
        .then(result => (result.data.user));
}

export function createUser(username: string, email: string, password: string): Promise<AuthenticatedUser> {
    return axiosBase.post(`users`, {
        user: {
            username,
            email,
            password,
        }
    })
        .then(result => (result.data.user));
}