import React from "react";
import { Link } from "react-router-dom";
import TableEmployees from "../components/TableEmployees";
import "../styles/EmployeesList.css";
import "../styles/App.css";

export default function EmployeesList() {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            <div className="body">
                <section id="employee-table" className="display">
                    <TableEmployees />
                </section>
            </div>

            <Link to={`/`} className="link" rel="preload">Home</Link>
        </div>
    )
}