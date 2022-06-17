import * as React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./screens/HomeScreen";
import {ProfileScreen} from "./screens/ProfileScreen";
import {LoginScreen} from "./screens/LoginScreen";
import {RegisterScreen} from "./screens/RegisterScreen";

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Profile: {
        id: string;
        title: string;
        description: string;
    };
    Register: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{headerStyle: {backgroundColor: 'purple'}}}>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}/>
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{animation: "fade_from_bottom"}}/>
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}/>
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}/>
            </Stack.Group>
        </Stack.Navigator>
    )
}