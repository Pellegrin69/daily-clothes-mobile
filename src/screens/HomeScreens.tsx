import {Button, SafeAreaView, ScrollView} from "react-native";
import React, {FunctionComponent} from "react";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const HomeScreen: FunctionComponent<Props> = ({navigation}) => {

    return (
        <SafeAreaView style={{height: '100%'}}>
            <ScrollView style={{height: '100%'}}>
                <Button title='Donne moi la tenue.' onPress={() => {}}/>
            </ScrollView>
        </SafeAreaView>
    );
};
