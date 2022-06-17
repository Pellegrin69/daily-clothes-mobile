import axios from 'axios';
import {User} from "../models/User";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import * as SecureStore from "expo-secure-store";
import {API_URL} from "../ApiUrl";

type RegisterResponse = {
    jwt: string
    user: User
}


export const register = (username: string, email: string, password: string, navigation: NavigationProp<RootStackParamList>) => {
    axios
        .post(API_URL + "/auth/local/register", {
            username: username,
            email: email,
            password: password,
        })
        .then(response => {
            const registerResponse: RegisterResponse = response.data
            saveKeyValuePair("userInfo", JSON.stringify((registerResponse.user)))
            saveKeyValuePair("userToken", registerResponse.jwt)
            navigation.navigate("Home")
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        });
}

const saveKeyValuePair = async (key: string, value: string) => {
    await SecureStore.setItemAsync(key, value);
}
