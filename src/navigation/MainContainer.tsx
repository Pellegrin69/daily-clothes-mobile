import * as React from "react"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {Icon} from "@rneui/themed";

import {DressingScreen} from "../screens/DressingScreen"
import {HomeScreen} from "../screens/HomeScreen"
import {LoginScreen} from "../screens/LoginScreen";
import {ProfileScreen} from "../screens/ProfileScreen";
import {RegisterScreen} from "../screens/RegisterScreen";

const Tab = createBottomTabNavigator()

export const MainContainer = () => {
    const homeName = "Home"
    const dressingName = "Dressing"
    const loginName = "Login"
    const profileName = "Profile"
    const registerName = "Register"

    let iconName: string

    return (
        <>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        const rn = route.name

                        if (rn === homeName) {
                            iconName = "home"
                        } else if (rn === dressingName) {
                            iconName = "checkroom"
                        } else if (rn === loginName) {
                            iconName = "login"
                        } else if (rn === profileName) {
                            iconName = "supervised-user-circle"
                        }

                        return <Icon name={iconName} size={size} color={color}/>
                    }
                })}
            >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={dressingName} component={DressingScreen}/>
                <Tab.Screen name={loginName} component={LoginScreen}/>
                <Tab.Screen name={profileName} component={ProfileScreen}/>
                <Tab.Screen name={registerName} component={RegisterScreen}/>

            </Tab.Navigator>

        </>
    )
}