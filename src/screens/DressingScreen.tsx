import {View, Text, Button, FlatList, TouchableOpacity, TouchableHighlight} from "react-native";
import React, {FunctionComponent} from "react";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../RootStackParamList";
import { Button as ButtonPaper, Dialog, Portal, Provider, Paragraph } from 'react-native-paper';
import {AddClotheForm} from "../components/AddClotheForm";
import {createClothe} from "../components/CRUDClothe";
import {readClothe} from "../components/CRUDClothe";
import {updateClothe} from "../components/CRUDClothe";
import {deleteClothe} from "../components/CRUDClothe";
import {Clothe} from "../models/Clothe";

type Props = {
    navigation: NavigationProp<RootStackParamList>;
}

export const DressingScreen: FunctionComponent<Props> = ({navigation}) => {
    const [ open, setIsOpen ] = React.useState(false)
    const showDialog = () => setIsOpen(true)
    const hideDialog = () => setIsOpen(false)

    const [ clothes, setClothes ] = React.useState<Clothe[]>()

    React.useEffect(() => {
        readClothe()
            .then(resp => {
                setClothes(resp)
                console.log("resp.data :", resp)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <FlatList data={clothes} renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                        key={item.id}
                        onPress={() => console.log("click")}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}
                    >
                        <Text>{item.name}</Text>
                    </TouchableHighlight>
                )}
                />
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