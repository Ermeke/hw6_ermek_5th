import {configureStore} from "@reduxjs/toolkit";
import calcReducer from "./Slice";


export const store = configureStore({
    reducer: {
        calcReducer
    }
})
