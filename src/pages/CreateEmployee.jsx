import React from "react";
import { Link } from "react-router-dom";
import FormCreateEmployee from "../components/FormCreateEmployee";

export default function CreateEmployee() {
    return (
        <div>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to={'/employees-list'} className="link" rel="preload">View Current Employees</Link>
                <h2>Create Employee</h2>
                <FormCreateEmployee />
            </div>
        </div>
    )
}