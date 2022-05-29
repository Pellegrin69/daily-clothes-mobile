import {Customer} from "./Customer";

export type User = {
    id: number
    username: string
    email: string
    provider: string
    password: string
    resetPasswordToken: string
    confirmationToken: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
    customer: Customer
}