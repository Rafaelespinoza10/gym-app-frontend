import type { RegisterUser, ResponseLogin, UserLogin } from "../models";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const register = async(userData: RegisterUser) => {
    const response = await fetch(`${BASE_URL}/user/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(userData),
    });
    if(!response.ok){
        const error = await response.json();
        throw new Error(error.message || 'Registation failed');
    }

    return response.json();
}

export const loginService = async(loginData: UserLogin): Promise<ResponseLogin> => {
    const response  = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData),
    });
    if(!response.ok){
        const error = await response.json();
        throw new Error(error.message || 'Credential Invalids');
    }

    return response.json();
}