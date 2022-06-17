import * as SecureStore from "expo-secure-store";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";


export const logout = async (navigation: NavigationProp<RootStackParamList>) => {
    await SecureStore.deleteItemAsync("userInfo")
    await SecureStore.deleteItemAsync("userToken")
    navigation.navigate("Login")
}