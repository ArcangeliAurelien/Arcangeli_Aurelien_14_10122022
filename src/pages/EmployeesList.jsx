import React from "react";
import { Link } from "react-router-dom";

export default function EmployeesList() {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            <div>
                <label>
                    Show <select>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> entries
                </label>

                <label>Search :</label>
                <input type="search" />

                <section id="employee-table" className="display"></section>
            </div>

            <Link to={`/`}>Home</Link>
        </div>
    )
}