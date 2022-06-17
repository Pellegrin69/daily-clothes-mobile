import {User} from "../models/User";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";

type LoginResponse = {
    jwt: string
    user: User
}

const API_URL = "http://10.212.33.75:1337/api/auth/local";

export const login = (identifier: string, password: string, navigation: NavigationProp<RootStackParamList>) => {
    console.log("log")
    axios
        .post(API_URL, {
            identifier: identifier,
            password: password,
        })
        .then(response => {
            console.log("réussite")

            const loginRepsonse: LoginResponse = response.data
            saveKeyValuePair("userInfo", JSON.stringify((loginRepsonse.user)))
            saveKeyValuePair("userToken", loginRepsonse.jwt)
            navigation.navigate("Home")
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        });
}

const saveKeyValuePair = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
}