import * as React from 'react';
import { TextInput, Switch, Paragraph } from 'react-native-paper';
import {View} from "react-native";

export const AddClotheForm = () => {
    const [ name, setName ] = React.useState("")
    const [isWaterproof, setIsWaterproof] = React.useState(false)

    const onToggleSwitch = () => setIsWaterproof(!isWaterproof)

    const countries = ["Red", "Green", "Brown", "Orange"]

    console.log(name, isWaterproof)

    return (
        <View>
            <TextInput
                label="name"
                value={name}
                onChangeText={setName}
                mode={"outlined"}
            />
            <View>
                <Paragraph>Waterproof</Paragraph>
                <Switch
                    value={isWaterproof}
                    onValueChange={onToggleSwitch}
                />
            </View>

            <View>
                <Paragraph>Choose your color</Paragraph>
                <SelectDropdown
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    dropdownIconPosition={"left"}
                />
            </View>

            <View>
                <Paragraph>Choose the category of your clothe</Paragraph>
                <SelectDropdown
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    dropdownIconPosition={"left"}
                />
            </View>

            <View>
                <Paragraph>Choose the size of your clothe</Paragraph>
                <SelectDropdown
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        return item
                    }}
                    dropdownIconPosition={"left"}
                />
            </View>
        </View>
    )
}
