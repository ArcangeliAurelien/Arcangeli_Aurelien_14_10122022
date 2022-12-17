import React from "react";
import { states } from "../datas/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "./Modal";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
    FirstName: yup.string().required(),
    LastName: yup.string().required(),
    Birthday: yup.date().required(),
    StartDate: yup.date().required(),
    Street: yup.string().required(),
    City: yup.string().required(),
    ZipCode: yup.number().required(),
}).required()

export default function FormCreateEmployee() {
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
    
    const onSubmit = data => {
        console.log(data);
        console.log("validé!!!");
        <Modal />  
        reset()
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="FirstName">First Name</label>
                <Controller
                    control={control}
                    name="FirstName"
                    render={({ field: { onChange, value } }) => (
                        <input
                            type="text"
                            {...register("First-Name")}
                            id="FirstName"
                            value={value}
                            onChange={onChange}         
                        />
                    )}
                />
                <div className="error">{errors.FirstName?.message}</div>

                <label htmlFor="LastName">Last Name</label>
                <Controller
                    control={control}
                    name="LastName"
                    render={({ field: { onChange, value } }) => (
                        <input
                            type="text"
                            {...register("Last-Name")}
                            id="LastName"
                            value={value}
                            onChange={onChange}
                        />
                    )}
                />
                <div className="error">{errors.LastName?.message}</div>

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
                <div className="error">{errors.Birthday?.message}</div>

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
                <div className="error">{errors.StartDate?.message}</div>

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="Street">Street</label>
                    <Controller
                        control={control}
                        name="Street"
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="text"
                                {...register("Street")}
                                id="Street"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <div className="error">{errors.Street?.message}</div>

                    <label htmlFor="City">City</label>
                    <Controller
                        control={control}
                        name="City"
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="text"
                                {...register("City")}
                                id="City"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <div className="error">{errors.City?.message}</div>

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
                    <Controller
                        control={control}
                        name="ZipCode"
                        render={({ field: { onChange, value } }) => (
                            <input
                                type="number"
                                {...register("ZipCode")}
                                id="ZipCode"
                                value={value}
                                onChange={onChange}
                            />
                        )}
                    />
                    <div className="error">{errors.ZipCode?.message}</div>
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