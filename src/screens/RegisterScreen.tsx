import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import React, {FunctionComponent, useState} from "react";
import {Button, SafeAreaView, ScrollView, TextInput} from "react-native";
import {register} from "../compononents/Register";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const RegisterScreen: FunctionComponent<Props> = ({navigation}) => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={{height: '100%'}}>
                <TextInput onChangeText={ text => setUsername(text) }
                           value={username}
                           placeholder="Xyz123"/>
                <TextInput onChangeText={ text => setEmail(text) }
                           value={email}
                           placeholder="example@gmail.com"/>
                <TextInput onChangeText={ text => setPassword(text) }
                           value={password}
                           placeholder="password"/>
                <Button title="Login" onPress={() => register(username, email, password, navigation)} />
            </ScrollView>
        </SafeAreaView>
    );
};
