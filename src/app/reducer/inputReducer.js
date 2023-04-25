import { createSlice } from "@reduxjs/toolkit";


const inputReducer = createSlice({
    name: 'inputReducer',
    initialState: {
        arrEq: []
    },
    reducers: {
        addNum: (state, action) => {state.arrEq.push(action.payload)},
    }
})
export const {addNum} = inputReducer.actions
export default inputReducer.reducer