import {User} from "../models/User";
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";

type LoginResponse = {
    jwt: string
    user: User
}

const API_URL = "http://192.168.1.34:1337/api/auth/local";

export const login = (identifier: string, password: string, navigation: NavigationProp<RootStackParamList>) => {
    axios
        .post(API_URL, {
            identifier: identifier,
            password: password,
        })
        .then(response => {
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