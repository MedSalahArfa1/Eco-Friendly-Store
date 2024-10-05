import { Product } from "./Product";

export interface InitialState {
    cartItems: Product[],
    quantity: number,
    total: number
}