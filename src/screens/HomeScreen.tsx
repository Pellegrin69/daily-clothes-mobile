import {Text, SafeAreaView, ScrollView, Button} from "react-native";
import React, {FunctionComponent, useEffect} from "react";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import { Card, Title } from 'react-native-paper';
import { Card as CardUI } from "@rneui/themed"
import * as SecureStore from "expo-secure-store";


type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

const getValueFor = async (key: string, navigation: NavigationProp<RootStackParamList> ) => {
    let result = await SecureStore.getItemAsync(key);
    console.log("check useEffect")
    if (!result) {
        navigation.navigate("Login")
    }
}


export const HomeScreen: FunctionComponent<Props> = ({navigation}) => {

    useEffect(() => {
        getValueFor("userToken", navigation)
    }, [navigation]);

    return (
        <SafeAreaView style={{ height: "100%" }}>
            <ScrollView style={{ height: "100%" }}>
                <Card.Content>
                    <Title style={{ textAlign: "center", marginTop: 10 }}>🎉Your outfit of the day 🎉 </Title>
                </Card.Content>
                <Text style={{ marginTop: 10 }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu erat turpis. Nam semper auctor
                    imperdiet. Aliquam ornare hendrerit consectetur. Maecenas interdum felis magna, at blandit sapien
                    cursus ac. Suspendisse non quam ut diam accumsan commodo a et metus. Nunc mattis ligula sed nibh
                </Text>
                <Card style={{ padding: 20, width: "100%", marginTop: "5%", marginBottom: 20, }}>
                    <Card.Cover source={{ uri: "https://nitter.net/pic/media%2FFPwUi_EXIAkrpg2.jpg%3Fname%3Dsmall" }}/>
                </Card>
                <CardUI>
                    <Button title="Generate a new outfit" onPress={() => console.log("add cloth")}/>
                </CardUI>
            </ScrollView>
        </SafeAreaView>
    );
};