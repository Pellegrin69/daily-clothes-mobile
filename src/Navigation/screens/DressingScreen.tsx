import {View, Text, Button} from "react-native";
import React, {FunctionComponent} from "react";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../RootStackParamList";
import { Button as ButtonPaper, Dialog, Portal, Provider, Paragraph } from 'react-native-paper';
import {AddClotheForm} from "../../Component/AddClotheForm";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const DressingScreen: FunctionComponent<Props> = ({navigation}) => {
    const [ open, setIsOpen ] = React.useState(false)
    const showDialog = () => setIsOpen(true)
    const hideDialog = () => setIsOpen(false)

    return (
        <>
            <View style={{ flex: 10, alignItems: "center", justifyContent: "center" }}>
                <Text
                    onPress={() => navigation.navigate("Home")}
                    style={{ fontSize: 15, marginBottom: 50 }}
                >
                    Your dressing room is empty, add some to generate outfits
                </Text>
                <Button title={"Add a cloth"} onPress={showDialog}/>
            </View>
            <Provider>
                <View>
                    <Portal>
                        <Dialog visible={open} onDismiss={hideDialog}>
                            <Dialog.Title>Add your cloth</Dialog.Title>
                            <Dialog.Content>
                                <Paragraph>Add form here !</Paragraph>
                                <AddClotheForm/>
                            </Dialog.Content>
                            <Dialog.Actions>
                                <ButtonPaper onPress={hideDialog}>Cancel</ButtonPaper>
                                <ButtonPaper onPress={hideDialog}>Add</ButtonPaper>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </View>
            </Provider>
        </>
    );
};