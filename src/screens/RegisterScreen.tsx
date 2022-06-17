import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import React, {FunctionComponent, useState} from "react";
import {SafeAreaView} from "react-native";
import {register} from "../compononents/Register";
import {TextInput, Button} from "react-native-paper";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const RegisterScreen: FunctionComponent<Props> = ({navigation}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={{flex: 1, justifyContent: "center", height: "100%"}}>
            <TextInput
                label="Username"
                value={username}
                onChangeText={text => setUsername(text)}
                mode={"outlined"}
            />
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                mode={"outlined"}
            />
            <TextInput
                label="password"
                value={password}
                onChangeText={text => setPassword(text)}
                mode={"outlined"}
                secureTextEntry
            />
            <Button style={{marginTop: 30}}
                    onPress={() => register(username, email, password, navigation)}>
                Register
            </Button>
            <Button style={{marginTop: 30}}
                    onPress={() => navigation.navigate("Login")}>
                Already registered ? Login
            </Button>
        </SafeAreaView>
    );
};
