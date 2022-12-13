import React from "react";
import { Link } from "react-router-dom";
import TableEmployees from "../components/TableEmployees";
import "../styles/EmployeesList.css"

export default function EmployeesList() {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>

            <div className="body">
                <div className="search">
                    <label>
                        Show <select>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select> entries
                    </label>

                    <div className="inputSearch">
                        <label>Search :</label>
                        <input type="search" />
                    </div>
                </div>

                <section id="employee-table" className="display">
                    <TableEmployees />
                </section>
            </div>

            <Link to={`/`}>Home</Link>
        </div>
    )
}