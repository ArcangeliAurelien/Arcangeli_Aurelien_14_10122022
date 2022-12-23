import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: []
}

const CreateEmployeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers: {
        addEmployee: (state, action) => {
            console.log(action.payload);
            state.employees = [
                ...state.employees,
                {...action.payload}
            ]
        }
    }
})

export const { addEmployee } = CreateEmployeeSlice.actions
export const employeeStateReducer = CreateEmployeeSlice.reducer