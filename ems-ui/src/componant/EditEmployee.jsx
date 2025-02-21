import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

const EditEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        department: "",
        position: ""
    });

    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then((response) => {
                setEmployee(response.data);
            })
            .catch((error) => {
                console.error("Error fetching employee data:", error);
            });
    }, [id]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      EmployeeService.editEmployee(id, employee)  
          .then(() => {
              navigate("/"); 
          })
          .catch((error) => {
              console.error("Error updating employee:", error);
          });
  };
  

    return (
        <div className="container mt-5">
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Age</label>
                    <input
                        type="number"
                        name="age"
                        value={employee.age}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Department</label>
                    <input
                        type="text"
                        name="department"
                        value={employee.department}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Position</label>
                    <input
                        type="text"
                        name="position"
                        value={employee.position}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
                <button onClick={() => navigate("/")} className="btn btn-secondary ms-2">Cancel</button>
            </form>
        </div>
    );
};

export default EditEmployee;
