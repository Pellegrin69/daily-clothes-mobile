import {User} from "../models/User";
import axios from 'axios';

type LoginResponse = {
    jwt: string
    user: User
}

const API_URL = "http://192.168.1.13:1337/api/auth/local";

export const login = (identifier: string, password: string) => {
    axios
        .post(API_URL, {
            identifier: identifier,
            password: password,
        })
        .then(response => {
            const loginRepsonse: LoginResponse = response.data
            console.log('User profile', loginRepsonse.user);
            console.log('User token', loginRepsonse.jwt);
            // if (response.data.accessToken) {
            //     localStorage.setItem("user", JSON.stringify(response.data));
            // }
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        });
}

export const logout = () => {
    localStorage.removeItem("user");
}

// export const login = (login: string, password: string): Promise<User> => {
//         .then(response => response.json())
//         .then((data: LoginResponse) => data.user);
