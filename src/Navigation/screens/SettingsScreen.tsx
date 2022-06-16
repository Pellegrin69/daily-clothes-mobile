import {View, Text} from "react-native";
import React, {FunctionComponent} from "react";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const SettingsScreen: FunctionComponent<Props> = ({navigation}) => {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text
                onPress={() => navigation.navigate("Home")}
                style={{ fontSize: 26, fontWeight: "bold" }}
            >
                Settings Screen
            </Text>
        </View>
    );
};