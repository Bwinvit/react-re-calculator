import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "../reducer/inputReducer";

export default configureStore({
    reducer: {
        inputReducer: inputReducer
    }
})