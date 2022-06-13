import {NavigationProp, RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import React, {FunctionComponent} from "react";
import {Button, SafeAreaView, ScrollView, Text} from "react-native";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList>
}

export const LoginScreen: FunctionComponent<Props> = ({navigation,route}) => {
    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={{height: '100%'}}>
                <Text>{route.params?.description}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
