import { Link } from "react-router-dom"
import Table from "../components/Table"

function EmployeeList() {

    return (
        <div id="employee-div">
            <h1>Current Employees</h1>
            <Table />
            <Link to="/">Home</Link>
        </div>
    )
}

export default EmployeeList