import React from "react";
import {MainContainer} from "./src/navigation/MainContainer";
import {NavigationContainer} from "@react-navigation/native"

export default function App() {
    return (
        <NavigationContainer>
            <MainContainer/>
        </NavigationContainer>
    )
}
