import { configureStore } from "@reduxjs/toolkit";
import CreateEmployeeSlice from "../redux/reducers/CreateEmployeeSlice"

export const store = configureStore({
    reducer: {
        employees: CreateEmployeeSlice
    }
})