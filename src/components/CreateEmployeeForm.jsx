import React, { useState } from 'react';
import { states } from "../datas/data";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';

const optionsDepartment = [
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'human-resources', label: 'Human Resources' },
    { value: 'legal', label: 'Legal' }
]

const optionsState = states.map((state, index) => (
    { key: index, value: state.name, label: state.name }
))

export default function CreateEmployeeForm(props) {
    const [FirstName, setFirstName] = useState('')
    const [LastName, setLastName] = useState('')
    const [Birthday, setBirthday] = useState('')
    const [StartDate, setStartDate] = useState(new Date())
    const [Street, setStreet] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState(optionsState[0])
    const [ZipCode, setZipCode] = useState('')
    const [Department, setDepartment] = useState(optionsDepartment[0])

    const [data, setData] = useState([])

    console.log(data);

    const onSubmit = (e) => {
        e.preventDefault()
        const val = {
            FirstName,
            LastName,
            Birthday,
            StartDate,
            Street,
            City,
            State,
            ZipCode,
            Department,
        }
        setData([...data, val])
        clearForm(val)
        console.log("val", val);
    }

    const clearForm = () => {
        setFirstName('')
        setLastName('')
        setBirthday('')
        setStartDate(new Date())
        setStreet('')
        setCity('')
        setState(optionsState[0])
        setZipCode('')
        setDepartment(optionsDepartment[0])
    }

  return (
      <div className="form">
        <form onSubmit={onSubmit}>
              <label htmlFor='FirstName'>First Name</label>
              <input
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
              />
              
              <label htmlFor='LastName'>LastName</label>
              <input
                  type="text"
                  name="LastName"
                  id="LastName"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
              />
              
              <label htmlFor='Birthday'>Date of Birth</label>
              <DatePicker
                  selected={Birthday}
                  name="Birthday"
                  id="Birthday"
                  value={Birthday}
                  dateFormat="dd/MM/yyyy"
                  onChange={(e) => setBirthday(e)}
              />

              <label htmlFor='StartDate'>Start Date</label>
              <DatePicker
                  selected={StartDate}
                  name="StartDate"
                  id="StartDate"
                  value={StartDate}
                  dateFormat="dd/MM/yyyy"
                  onChange={(e) => setStartDate(e)}
              />

              <fieldset className='address'>
                  <legend>Address</legend>

                  <label htmlFor='Street'>Street</label>
                  <input
                      type="text"
                      name="Street"
                      id="Street"
                      value={Street}
                      onChange={(e) => setStreet(e.target.value)}
                  />

                  <label htmlFor='City'>City</label>
                  <input
                      type="text"
                      name="City"
                      id="City"
                      value={City}
                      onChange={(e) => setCity(e.target.value)}
                  />

                  <label htmlFor='State'>State</label>
                  <Select
                      name="State"
                      id="State"
                      value={State}
                      options={optionsState}
                      onChange={(e) => setState(e)}
                  />

                  <label htmlFor='ZipCode'>Zip Code</label>
                  <input
                      type="number"
                      id="ZipCode"
                      name="ZipCode"
                      value={ZipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                  />
              </fieldset>

              <label htmlFor='Department'>Department</label>
              <Select
                  name="Department"
                  id="Department"
                  value={Department}
                  options={optionsDepartment}
                  onChange={(e) => setDepartment(e)}
              />

              <button type='submit' className="button">Save</button>
        </form>
    </div>
  )
}
