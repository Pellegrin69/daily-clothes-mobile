import {NavigationProp, RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import React, {FunctionComponent, useState} from "react";
import {SafeAreaView, View} from "react-native";
import {login} from "../compononents/Login";
import {TextInput, Button, Button as ButtonPaper} from "react-native-paper";

export type Props = {
    navigation: NavigationProp<RootStackParamList>,
    route: RouteProp<RootStackParamList>,
}
export const LoginScreen: FunctionComponent<Props> = ({navigation, route}) => {

    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={{ flex: 1, justifyContent: "center", height: "100%" }}>
            <TextInput
                label="identifier"
                value={identifier}
                onChangeText={text => setIdentifier(text)}
                mode={"outlined"}
            />
            <TextInput
                label="password"
                value={password}
                onChangeText={text => setPassword(text)}
                mode={"outlined"}
            />
            <Button style={{ marginTop: 30 }} onPress={() => login(identifier, password, navigation)}>Login</Button>
            <Button style={{ marginTop: 30 }} onPress={() => navigation.navigate("Register")}>Create an account</Button>

        </View>
    );
};
