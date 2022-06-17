import axios from "axios";
import React from "react";
import * as SecureStore from "expo-secure-store";
import {Clothe} from "../models/Clothe";

const getValueFor = async (key: string ) => {
    await SecureStore.getItemAsync(key);
}

const USER_TOKEN = getValueFor("userToken")
const URL_CLOTHES = "http://192.168.1.14:1337/api/clothes";

export const readClothe = (): Promise<Clothe[]> => axios.get(URL_CLOTHES, {
    headers: {
        Authorization:'Bearer ' + USER_TOKEN
    },
})

// @ts-ignore
export const createClothe = (clotheName: string, waterproof: boolean, color: string, category: string, size: string) => axios.post(URL_CLOTHES, clotheName, waterproof, color, category, size, {
    name:  clotheName,
    waterproof: waterproof,
    color: color,
    customer: "A DEFINIR",
    category: category,
    size: size,

    headers: {
        Authorization:'bearer ' + USER_TOKEN
    },
})

// @ts-ignore
export const updateClothe = (id: number, clotheName: string, waterproof: boolean, color: string, category: string, size: string) => axios.put(`${URL_CLOTHES}//${id}`, clotheName, waterproof, color, category, size, {
    name:  clotheName,
    waterproof: waterproof,
    color: color,
    customer: "A DEFINIR",
    category: category,
    size: size,

    headers: {
        Authorization:'bearer ' + USER_TOKEN
    },
})

export const deleteClothe = (id: number) => axios.delete(`${URL_CLOTHES}//${id}`, {
    headers: {
        Authorization:'bearer ' + USER_TOKEN
    },
});
