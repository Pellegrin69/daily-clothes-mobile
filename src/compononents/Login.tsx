import {User} from "../models/User";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

type LoginResponse = {
    jwt: string
    user: User
}

async function save(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
}

const API_URL = "http://192.168.1.34:1337/api/auth/local";

export const login = (identifier: string, password: string) => {
    axios
        .post(API_URL, {
            identifier: identifier,
            password: password,
        })
        .then(response => {
            const loginRepsonse: LoginResponse = response.data
            save("userInfo", JSON.stringify((loginRepsonse.user)))
            save("userToken", loginRepsonse.jwt)
            console.log('User profile', loginRepsonse.user);
            console.log('User token', loginRepsonse.jwt);
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
