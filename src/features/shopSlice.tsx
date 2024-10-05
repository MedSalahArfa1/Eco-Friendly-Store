import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../interfaces/inititalState";
import { Product } from "../interfaces/Product";


const initialState: InitialState = {
    cartItems: [],
    quantity: 0,
    total: 0
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart: (state: InitialState, action: PayloadAction<Product>) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                const product = { ...action.payload, quantity: 1 };
                state.cartItems.push(product);
            }
        },
        cartTotal: (state: InitialState) => {
            let quantity = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                quantity += item.quantity;
                total += item.quantity * item.price;
            });
            state.quantity = quantity;
            state.total = total;
        },
        removeFromCart: (state: InitialState, action: PayloadAction<number>) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
        },
        increase: (state: InitialState, action: PayloadAction<{id: number}>) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (cartItem) {
                cartItem.quantity += 1;
            }
        },
        decrease: (state: InitialState, action: PayloadAction<{id: number}>) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (cartItem) {
                cartItem.quantity -= 1;
            }
        },
        clearCart: (state: InitialState) => {
            return {
                ...state,
                cartItems: []
            }
        }
    }
})

export const { addToCart, cartTotal, removeFromCart, increase, decrease, clearCart } = shopSlice.actions;
export default shopSlice.reducer;