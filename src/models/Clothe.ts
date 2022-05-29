import {Customer} from "./Customer";
import {Color} from "./Color";
import {Category} from "./Category";

export type Clothe = {
    id: number
    name: string
    waterproof: boolean
    size: string
    customer: Customer
    color: Color
    category: Category
}