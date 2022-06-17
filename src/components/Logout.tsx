import * as SecureStore from "expo-secure-store";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import axios from "axios";
import {API_URL} from "../ApiUrl";


export const logout = async (navigation: NavigationProp<RootStackParamList>) => {
    await SecureStore.deleteItemAsync("userInfo")
    await SecureStore.deleteItemAsync("userToken")
    navigation.navigate("Login")
}

