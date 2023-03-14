import {createSlice} from "@reduxjs/toolkit";

const Slice = createSlice({
    name: 'Slice',
    initialState: {
        result: null
    },
    reducers: {
        calculate: (state, action) => {
            state.result = action.payload
        }
    }
})

export const {calculate} = Slice.actions
export default Slice.reducer