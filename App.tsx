import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootNavigator} from "./src/RootStackParamList";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
}
