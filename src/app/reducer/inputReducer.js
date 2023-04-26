import { createSlice } from "@reduxjs/toolkit";


const inputReducer = createSlice({
    name: 'inputReducer',
    initialState: {
        arrEq: []
    },
    reducers: {
        addNum: (state, action) => {state.arrEq.push(action.payload)},
        ac: (state) => {state.arrEq = []}
    }
})
export const {addNum, ac} = inputReducer.actions
export default inputReducer.reducer