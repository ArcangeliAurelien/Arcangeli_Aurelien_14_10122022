import React, { useState } from "react";
import { schema, optionsState, optionsDepartment } from "../datas/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/reducers/CreateEmployeeSlice";
import { ModalLibAA } from "modal-lib-aa";
import "../styles/FormCreateEmployee.css";

export default function FormCreateEmployee() {
    const dispatch = useDispatch()

    const { register, handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })

    const [openModal, setOpenModal] = useState(false)
    
    const onSubmit = (data) => {
        const employees = { ...data }
        dispatch(addEmployee(employees))
        setOpenModal(!openModal)
        reset()
    }

    const messageStyle = {
        "color" : "red"
    }

    const InputSelectCustom = {
        control: (styles, state) => ({
            ...styles,
            border: '2px solid lightgray',
            borderRadius: '5px',
            fontSize: '15px',
            boxShadow: state.isFocused ? '0 0 0 2px rgb(80, 137, 80)' : 'lightgray',
            '&:hover': {
                border: '2px solid rgb(80, 137, 80)'
            }
        })
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)} id="create-employee">
                <div className="formInput">
                    <div>
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

                        <label htmlFor="DateOfBirth">Date of Birth</label>
                        <Controller
                            control={control}
                            name="DateOfBirth"
                            render={({
                                field: { onChange, value, ref },
                            }) => (
                                <DatePicker
                                    onChange={onChange}
                                    selected={value}
                                    inputRef={ref}
                                    dateFormat="dd/MM/yyyy"
                                    id="DateOfBirth"
                                />
                            )}
                        />
                        {errors.DateOfBirth && (<div className="error">Date anniversaire requis</div>)}

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
                        {errors.StartDate && (<div className="error">Date de début de contrat requis</div>)}
                    </div>

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
                                    styles={InputSelectCustom}
                                    theme={(theme) => ({
                                        ...theme,
                                        colors: {
                                            ...theme.colors,
                                            primary: 'rgb(80, 137, 80)',
                                            primary25: 'rgb(186, 222, 186)'
                                        }
                                    })}
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
                </div>

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
                            styles={InputSelectCustom}
                            theme={(theme) => ({
                                ...theme,
                                colors: {
                                    ...theme.colors,
                                    primary: 'rgb(80, 137, 80)',
                                    primary25: 'rgb(186, 222, 186)'
                                }
                            })}
                        />
                    )}
                />
                    
                <div className="button">
                    <button type="submit">Save</button>
                </div>
            </form>

            {openModal && <ModalLibAA
                openModal={openModal}
                setOpenModal={setOpenModal}
                message="Employee created !"
                messageStyle={messageStyle}
            />}

        </div>
    )
}