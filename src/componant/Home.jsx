import React, { useEffect, useState } from "react";
import EmployeeService from "../service/EmployeeService";
import { Link } from 'react-router-dom';

const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        EmployeeService.getEmployees()
            .then(response => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.error("Error fetching employees:", error);
            });
    };

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id)
            .then(() => {
                setMsg("Employee deleted successfully!");
                fetchEmployees();  
            })
            .catch((error) => {
                setMsg(error.message);
            });
    };

    return (
        <div className="container mt-4">
            {msg && <div className="alert alert-info">{msg}</div>}

            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Department</th>
                                        <th>Position</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee) => (
                                        <tr key={employee.id}>
                                            <td>{employee.name}</td>
                                            <td>{employee.age}</td>
                                            <td>{employee.department}</td>
                                            <td>{employee.position}</td>
                                            <td>
                                            <Link to={'/edit/' + employee.id} className='btn btn-sm btn-primary'>Edit</Link>
                                                <button 
                                                    className="btn btn-danger"
                                                    onClick={() => deleteEmployee(employee.id)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;







