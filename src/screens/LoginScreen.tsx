import {NavigationProp, RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import React, {FunctionComponent, useState} from "react";

import {Button, SafeAreaView, ScrollView, Text, TextInput} from "react-native";
import {login} from "../compononents/Login";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList>
}
export const LoginScreen: FunctionComponent<Props> = ({navigation, route}) => {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={{height: '100%'}}>
                <TextInput onChangeText={ text => setIdentifier(text) }
                           value={identifier}
                           placeholder="example@gmail.com"/>
                <TextInput onChangeText={ text => setPassword(text) }
                           value={password}
                           placeholder="password"/>
                <Button title="Login" onPress={() => login(identifier, password, navigation)} />

            </ScrollView>
        </SafeAreaView>
    );
};
