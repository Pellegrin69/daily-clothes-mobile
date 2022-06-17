import {NavigationProp, RouteProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import React, {FunctionComponent} from "react";
import {Button, SafeAreaView, ScrollView, Text} from "react-native";
import {logout} from "../components/Logout";
import {deleteUser} from "../components/Profile";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList>
}

export const ProfileScreen: FunctionComponent<Props> = ({navigation, route}) => {

    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={{height: '100%'}}>
                <Text>{route.params?.description}</Text>
                <Button title="Logout" onPress={() => logout(navigation)} />
            </ScrollView>
        </SafeAreaView>
    );
};
