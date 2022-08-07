import Form from "../components/Form"
import { Link } from "react-router-dom"
import Modal from "../components/Modal"

function Home() {

    function openModal() {
        document.getElementById("modalMask").style.display = "flex"
    }

    function saveEmployee() {
        openModal()
    }

    return (
        <div className="home">
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/employee-list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <Form />
                <button className="button" onClick={saveEmployee}>Save</button>
            </div>
            <Modal text="Employee Created!" />
        </div>
    )
}

export default Home