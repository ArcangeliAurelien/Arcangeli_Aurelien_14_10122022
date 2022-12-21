import { createSlice } from "@reduxjs/toolkit";

const CreateEmployeeSlice = createSlice({
    name: "employees",
    initialState: [],
    reducers: {
        addEmployee(state, action) {
            state.push.action.payload
        }
    }
})

const { actions, reducer } = CreateEmployeeSlice
export default reducer