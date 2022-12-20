import React, {useState} from "react";
import { states } from "../datas/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
//import { ModalAA } from 'modal-component-lib-aa';

const schema = yup.object({
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    Birthday: yup.date().required(),
    StartDate: yup.date().required(),
    Street: yup.string().required(),
    City: yup.string().required(),
    ZipCode: yup.number().min(5).required(),
})

export default function FormCreateEmployee() {
    // const [modal, setModal] = useState(false)

    // const toggleModal = () => {
    //     setModal(!modal)
    // }

    const optionsDepartment = [
        { value: 'sales', label: 'Sales' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'engineering', label: 'Engineering' },
        { value: 'human-resources', label: 'Human Resources' },
        { value: 'legal', label: 'Legal' }
    ]

    const optionsState = states.map((state, index) => (
        {key: index, value: state.name, label: state.name}
    ))

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const addEmployee = []
    
    const onSubmit = data => {
        console.log(data);
        console.log("validé!!!");
        addEmployee.push(data)
        console.log(addEmployee);
        //<ModalAA />
        reset()
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="FirstName">First Name</label>
                <input
                    type="text"
                    name="FirstName"
                    {...register("FirstName")}
                    id="FirstName"
                />
                {errors.FirstName && (<div className="error">Prénom requis</div>)}

                <label htmlFor="LastName">Last Name</label>
                <input
                    type="text"
                    name="LastName"
                    {...register("LastName")}
                    id="LastName"
                />
                {errors.LastName && (<div className="error">Nom requis</div>)}

                <label htmlFor="Birthday">Date of Birth</label>
                <Controller
                    control={control}
                    name="Birthday"
                    render={({
                        field: { onChange, value, ref },
                    }) => (
                        <DatePicker
                            onChange={onChange}
                            selected={value}
                            inputRef={ref}
                            dateFormat="dd/MM/yyyy"
                            id="Birthday"
                        />
                    )}
                />
                {errors.Birthday && (<div className="error">Date anniversaire requis</div>)}

                <label htmlFor="StartDate">Start Date</label>
                <Controller
                    control={control}
                    name="StartDate"
                    defaultValue={new Date()}
                    render={({
                        field: { onChange, value, ref },
                    }) => (
                        <DatePicker
                            selected={value}
                            dateFormat="dd/MM/yyyy"
                            onChange={onChange}
                            inputRef={ref}
                            id="StartDate"
                        />
                    )}
                />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="Street">Street</label>
                    <input
                        type="text"
                        name="Street"
                        {...register("Street")}
                        id="Street"
                    />
                    {errors.Street && (<div className="error">Adresse requis</div>)}

                    <label htmlFor="City">City</label>
                    <input
                        type="text"
                        name="City"
                        {...register("City")}
                        id="City"
                    />
                    {errors.City && (<div className="error">Ville requis</div>)}

                    <label htmlFor="State">State</label>
                    <Controller
                        control={control}
                        name="State"
                        render={({ field: { onChange, value } }) => (
                            <Select
                                id="State"
                                value={value}
                                options={optionsState}
                                defaultValue={optionsState[0]}
                                onChange={onChange}
                            />
                        )}
                    />

                    <label htmlFor="zipode">Zip Code</label>
                    <input
                        type="number"
                        name="ZipCode"
                        {...register("ZipCode")}
                        id="ZipCode"
                    />
                    {errors.ZipCode && (<div className="error">Code postal requis</div>)}
                </fieldset>

                <label htmlFor="Department">Department</label>
                <Controller
                    control={control}
                    name="Department"
                    render={({ field: { onChange, value } }) => (
                        <Select
                            id="Department"
                            value={value}
                            options={optionsDepartment}
                            defaultValue={optionsDepartment[0]}
                            onChange={onChange}
                        />
                    )}
                />
                    
                <button type="submit" className="button">Save</button>

            </form>
        </div>
    )
}