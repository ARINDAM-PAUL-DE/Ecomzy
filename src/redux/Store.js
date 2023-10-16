
import {configureStore} from "@reduxjs/toolkit"
import { reducer as cartReducer } from "./Slices/CartSlice"; 


export const store = configureStore({
        reducer:{
            cart: cartReducer,
        }
});