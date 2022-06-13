import {Button, SafeAreaView, ScrollView} from "react-native";
import React, {FunctionComponent} from "react";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const HomeScreen: FunctionComponent<Props> = ({navigation}) => {
    const text = "yeeee"
    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={{height: '100%'}}>
                <Button title='Profile' onPress={() => {
                    navigation.navigate("Profile")
                }}/>
                <Button title='Login' onPress={() => {
                    navigation.navigate("Login", {
                        id: "",
                        title: "",
                        description: text,
                    })
                }}/>
                <Button title='Register' onPress={() => {
                    navigation.navigate("Register")
                }}/>
            </ScrollView>
        </SafeAreaView>
    );
};
