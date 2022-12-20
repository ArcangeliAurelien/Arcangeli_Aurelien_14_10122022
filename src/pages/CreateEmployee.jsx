import React from "react";
import { Link } from "react-router-dom";
import CreateEmployeeForm from "../components/CreateEmployeeForm";
//import FormCreateEmployee from "../components/FormCreateEmployee";

export default function CreateEmployee() {
    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to={'/employees-list'}>View Current Employees</Link>
                <h2>Create Employee</h2>
                <CreateEmployeeForm />
            </div>
        </div>
    )
}