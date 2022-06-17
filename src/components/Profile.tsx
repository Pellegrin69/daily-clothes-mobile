import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import {API_URL} from "../ApiUrl";


const getValueFor = async (key: string) => {
    await SecureStore.getItemAsync(key);
}
const USER_TOKEN = getValueFor("userToken")

export const deleteUser = async (navigation: NavigationProp<RootStackParamList>) => {
    await SecureStore.deleteItemAsync("userInfo")
    await SecureStore.deleteItemAsync("userToken")

    await axios
        .delete(API_URL + "/users/me", {
            headers: {
                Authorization: 'Bearer ' + USER_TOKEN
            }
        });

    navigation.navigate("Login")
}