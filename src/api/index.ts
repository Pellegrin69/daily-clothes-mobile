import axios, {AxiosResponse} from "axios";

const API_token = "89811e9ea0332788cd754ee4b932000b0306130c45f6e2291b7949df7631ecd06960ff8f9741cb29b7006cea1990467bddb4682d6f15adf4a9912002a6a824ff165af0190c1e739d492feeb10dd12a12212e70f31c5f9486c52578c779b8bfc9a05059daf8241f1c7b1460be318c30341a232b85c09f593ee25b2a3f4ccc586e"
const url_clothe = "http://localhost:1337/clothe";

export const read_clothe = () => axios.get(url_clothe, {
    headers: {
        Authorization:'bearer' + API_token
    },
})

// @ts-ignore
export const create_clothe = (clothe_name: string, waterproof: boolean, color: string, category: string, size: string): Promise<AxiosResponse<any>> => axios.post(url_clothe, clothe_name, waterproof, color, category, size, {
    name:  clothe_name,
    waterproof: waterproof,
    color: color,
    customer: "A DEFINIR",
    category: category,
    size: size,

    headers: {
        Authorization:'bearer' + API_token
    },
})

// @ts-ignore
export const update_clothe = (id: number, clothe_name: string, waterproof: boolean, color: string, category: string, size: string): Promise<AxiosResponse<any>> => axios.put(`${url_clothe}//${id}`, clothe_name, waterproof, color, category, size, {
    name:  clothe_name,
    waterproof: waterproof,
    color: color,
    customer: "A DEFINIR",
    category: category,
    size: size,

    headers: {
        Authorization:'bearer' + API_token
    },
})

export const deleteclothe = (id: number) => axios.delete(`${url_clothe}//${id}`, {
    headers: {
        Authorization:'bearer' + API_token
    },
});