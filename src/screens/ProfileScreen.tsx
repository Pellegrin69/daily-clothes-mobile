import {NavigationProp, RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import React, {FunctionComponent} from "react";
import {SafeAreaView, ScrollView} from "react-native";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList>
}

export const ProfileScreen: FunctionComponent<Props> = ({navigation, route}) => {

    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={{height: '100%'}}>
            </ScrollView>
        </SafeAreaView>
    );
};
