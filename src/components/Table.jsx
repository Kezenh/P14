import { useSelector } from "react-redux"
import React from 'react'

function Table() {

    const employees = useSelector(state => state.employees)

    return (
        <table className="table">
            <thead>
                <tr className="trHeader">
                    <th className="thHeader">First Name</th>
                    <th className="thHeader">Last Name</th>
                    <th className="thHeader">Start Date</th>
                    <th className="thHeader">Department</th>
                    <th className="thHeader">Date of Birth</th>
                    <th className="thHeader">Street</th>
                    <th className="thHeader">City</th>
                    <th className="thHeader">State</th>
                    <th className="thHeader">Zip Code</th>
                </tr>
            </thead>
            <tbody>
                {employees.length === 0 ?
                    <tr className="tr">
                        <th className="th" colSpan={9}>No data available in table</th>
                    </tr> :
                    employees.map((employee, index) => {
                        return (
                            <tr key={index} className="tr">
                                <th className="th">{employee.firstName}</th>
                                <th className="th">{employee.lastName}</th>
                                <th className="th">{employee.startDate}</th>
                                <th className="th">{employee.department}</th>
                                <th className="th">{employee.dateOfBirth}</th>
                                <th className="th">{employee.street}</th>
                                <th className="th">{employee.city}</th>
                                <th className="th">{employee.state}</th>
                                <th className="th">{employee.zipCode}</th>
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default Table