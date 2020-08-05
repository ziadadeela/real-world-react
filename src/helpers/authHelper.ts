import {AuthenticatedUser} from "../Types";

export const TOKEN_KEY = "token";
export const USER_KEY = "user";

export function setAuthenticatedUser(user: AuthenticatedUser) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
}

export function getToken(): string | null {
    let token = localStorage.getItem(TOKEN_KEY);
    if (token) {
        return token;
    }
    return null;
}

export function getAuthenticatedUser(): AuthenticatedUser | null {
    let user = localStorage.getItem(USER_KEY);
    if (user) {
        return JSON.parse(user);
    }
    return null;
}

export function isAuthenticatedUser(): boolean {
    return localStorage.getItem(USER_KEY) !== null;
}

export function logOut() {
    localStorage.removeItem(USER_KEY);
}