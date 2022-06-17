import {MainContainer} from "./src/navigation/MainContainer";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootNavigator} from "./src/RootStackParamList";
import {NavigationContainer} from "@react-navigation/native"
import React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            {/*<RootNavigator/>*/}
            <MainContainer/>
        </NavigationContainer>
    )
}
