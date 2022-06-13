import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import React, {FunctionComponent} from "react";
import {Button, SafeAreaView, ScrollView} from "react-native";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const RegisterScreen: FunctionComponent<Props> = ({navigation}) => {
    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={{height: '100%'}}>
            </ScrollView>
        </SafeAreaView>
    );
};
