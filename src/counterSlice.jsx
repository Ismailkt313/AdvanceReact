import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: 'count',
    initialState: {value:0},
    reducers: {
        inc: (a) => { a.value += 1 },
        dec: (a) => { a.value -= 1 }
    }
})

export const { inc, dec } = counter.actions
export default counter.reducer