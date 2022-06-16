import {Button, SafeAreaView, ScrollView} from "react-native";
import React, {FunctionComponent, useEffect} from "react";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import * as SecureStore from "expo-secure-store";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

const getValueFor = async (key: string, navigation: NavigationProp<RootStackParamList> ) => {
    let result = await SecureStore.getItemAsync(key);
    console.log("check useEffect")
    if (!result) {
        navigation.navigate("Login")
    }
}

export const HomeScreen: FunctionComponent<Props> = ({navigation}) => {

    useEffect(() => {
        getValueFor("userToken", navigation)
    }, [navigation]);

    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={{height: '100%'}}>
                <Button title='Profile' onPress={() => {
                    navigation.navigate("Profile", {
                        id: "",
                        title: "",
                        description: "test",
                    })
                }}/>
                <Button title='Login' onPress={() => {
                    navigation.navigate("Login")
                }}/>
                <Button title='Register' onPress={() => {
                    navigation.navigate("Register")
                }}/>
            </ScrollView>
        </SafeAreaView>
    );
};
