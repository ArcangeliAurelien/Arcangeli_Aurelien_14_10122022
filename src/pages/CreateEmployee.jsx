import React from "react";
import { Link } from "react-router-dom";
import FormCreateEmployee from "../components/FormCreateEmployee";
import logo from "../assets/logo.png";

export default function CreateEmployee() {
    return (
        <div>
            <div className="title">
                <img src={logo} alt="logo" />
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to={'/employees-list'} className="link">View Current Employees</Link>
                <h2>Create Employee</h2>
                <FormCreateEmployee />
            </div>
        </div>
    )
}