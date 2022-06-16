import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icon } from "@rneui/themed";

import {DressingScreen} from "./screens/DressingScreen"
import {SettingsScreen} from "./screens/SettingsScreen"
import {HomeScreen} from "./screens/HomeScreens"

const Tab = createBottomTabNavigator()

export const MainContainer = () => {
    const homeName = "Home"
    const dressingName = "Dressing"
    const settingsName = "Settings"

    let iconName: string

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        const rn = route.name

                        if (rn === homeName) {
                            iconName = "home"
                        }
                        else if (rn === dressingName) {
                            iconName = "list"
                        }
                        else if (rn === settingsName) {
                            iconName = "settings"
                        }

                        return <Icon name={iconName} size={size} color={color}/>
                    }
                })}
            >

                <Tab.Screen name={homeName} component={HomeScreen}/>
                <Tab.Screen name={dressingName} component={DressingScreen}/>
                <Tab.Screen name={settingsName} component={SettingsScreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}