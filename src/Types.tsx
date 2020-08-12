import {Moment} from "moment";
import {AuthenticatedUserState} from "./redux/authUser/reducers";

export interface Post {
    title: string,
    slug: string,
    body: string,
    createdAt: Moment,
    updatedAt: Moment,
    tagList: Array<string>,
    description: string,
    author: Author,
    favorited: boolean,
    favoritesCount: number,
}

export interface Author {
    username: string,
    bio?: string,
    image: string,
    following: boolean,
}

export interface Profile {
    bio: string,
    following: boolean,
    image: string,
    username: string,
}

export interface LoginCredentials {
    email: string,
    password: string,
}

export interface AuthenticatedUser {
    "email": string,
    "token": string,
    "username": string,
    "bio": string,
    "image": string
}

export interface IStore {
    authUser: AuthenticatedUserState,
    isLoading: boolean,
}

export interface PostState {
    title: string,
    body: string,
    description: string,
    tagList: Array<string>,

}