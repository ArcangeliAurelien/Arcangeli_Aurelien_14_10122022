import React, { useState } from "react";
import { states } from "../datas/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FormCreateEmployee() {
    const [birthDate, setBirthDate] = useState()
    const [startDate, setStartDate] = useState(new Date())

    return (
        <div>
            <form>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" required />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" required />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker
                    selected={birthDate}
                    dateFormat="dd/MM/yyyy"
                    onChange={(e) => setBirthDate(e)}
                    required
                />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker
                    selected={startDate}
                    dateFormat="dd/MM/yyyy"
                    onChange={(e) => setStartDate(e)}
                    required
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" required />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" required />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state">
                        {states.map((state, index) => (
                            <option key={index} value={state.name}>{state.name}</option>
                        ))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="number" id="zip-code" required />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department">
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </form>

            <button >Save</button>
        </div>
    )
}