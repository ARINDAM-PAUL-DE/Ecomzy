import { CartSlice } from "./Slices/cartSlice";
import {configureStore} from "@reduxjs/toolkit"


export const store = configureStore({
        reducer:{
            cart: CartSlice
        }
});