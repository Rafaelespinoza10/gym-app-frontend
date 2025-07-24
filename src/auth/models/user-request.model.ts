export interface RegisterUser {
    email: string;
    name: string;
    confirmPassword: string;
    password: string;
}

export interface UserLogin{
    username: string;
    password: string;
}