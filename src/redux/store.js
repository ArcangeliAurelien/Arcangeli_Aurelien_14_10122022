import { configureStore } from "@reduxjs/toolkit";
import { employeeStateReducer } from "./reducers/CreateEmployeeSlice";

export const store = configureStore({
    reducer: {
        employees: employeeStateReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})