import * as React from 'react';
import { TextInput, Switch, Paragraph } from "react-native-paper";
import {View} from "react-native";

export const AddClotheForm = () => {
    const [ name, setName ] = React.useState("")
    const [ color, setColor ] = React.useState("")
    const [ category, setCategory ] = React.useState("")

    const [isWaterproof, setIsWaterproof] = React.useState(false)

    const onToggleSwitch = () => setIsWaterproof(!isWaterproof)

    console.log(name, color, category, isWaterproof)

    return (
        <View>
            <TextInput
                label="name"
                value={name}
                onChangeText={setName}
                mode={"outlined"}
            />

            <TextInput
                label="color"
                value={color}
                onChangeText={setColor}
                mode={"outlined"}
            />

            <TextInput
                label="category"
                value={category}
                onChangeText={setCategory}
                mode={"outlined"}
            />

            <View>
                <Paragraph>Waterproof</Paragraph>
                <Switch
                    value={isWaterproof}
                    onValueChange={onToggleSwitch}
                />
            </View>
        </View>
    )
}
