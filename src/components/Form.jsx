import states from "../constants/states"
import LabelInput from "./LabelInput"
import React from 'react'

function Form() {

    return (
        <form action="#" id="create-employee">
            <LabelInput htmlFor="first-name" text="First Name" type="text" id="first-name" />
            <LabelInput htmlFor="last-name" text="Last Name" type="text" id="last-name" />
            <LabelInput htmlFor="date-of-birth" text="Date of Birth" type="date" id="date-of-birth" />
            <LabelInput htmlFor="start-date" text="Start Date" type="date" id="start-date" />
            <fieldset className="address">
                <legend>Address</legend>
                <LabelInput htmlFor="street" text="Street" type="text" id="street" />
                <LabelInput htmlFor="city" text="City" type="text" id="city" />
                <label htmlFor="state">State</label>
                <select name="state" id="state">
                    {states.map((state, index) => {
                        return (
                            <option key={index}>{state.name}</option>
                        )
                    })}
                </select>
                <LabelInput htmlFor="zip-code" text="Zip Code" type="number" id="zip-code" />
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
    )
}

export default Form