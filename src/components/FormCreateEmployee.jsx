import React, { useState } from "react";
import { schema, optionsState, optionsDepartment } from "../datas/data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/reducers/CreateEmployeeSlice";
//import ModalAA from "modal-component-lib-aa";
import Modal from "./Modal";

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

    return (
        <div className="form">
            <form onSubmit={handleSubmit(onSubmit)} id="create-employee">
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

            {openModal && <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                message="Employee created !"
            />}

        </div>
    )
}