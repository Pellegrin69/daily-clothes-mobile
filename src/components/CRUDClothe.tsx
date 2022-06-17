import axios from "axios";
import React from "react";
import * as SecureStore from "expo-secure-store";
import {Clothe} from "../models/Clothe";
import {API_URL} from "../ApiUrl";

const getValueFor = async (key: string ) => {
    await SecureStore.getItemAsync(key);
}

const USER_TOKEN = getValueFor("userToken")

export const readClothe = (): Promise<Clothe[]> => axios.get(API_URL + "/clothes", {
    headers: {
        Authorization:'Bearer ' + USER_TOKEN
    },
})

// @ts-ignore
export const createClothe = (clotheName: string, waterproof: boolean, color: string, category: string, size: string) => axios.post(API_URL + "/clothes", clotheName, waterproof, color, category, size, {
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
export const updateClothe = (id: number, clotheName: string, waterproof: boolean, color: string, category: string, size: string) => axios.put(`${API_URL + "/clothes"}//${id}`, clotheName, waterproof, color, category, size, {
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

export const deleteClothe = (id: number) => axios.delete(`${API_URL + "/clothes"}//${id}`, {
    headers: {
        Authorization:'bearer ' + USER_TOKEN
    },
});
