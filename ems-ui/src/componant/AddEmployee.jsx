import React, { useState } from 'react'
import EmployeeService from '../service/EmployeeService';

const AddEmployee = () => {
  const [employee,setEmployee]=useState({
    name:"",
    age:"",
    department:"",
    position:"",
  });

  const [msg,setMsg]=useState("");


  const handleChange=(e)=>{
    const value=e.target.value;
    setEmployee({...employee,[e.target.name]: value});
  };

  const EmployeeRegister = (e) => {
    e.preventDefault();
    EmployeeService.saveEmployee(employee).then((res)=>{
       console.log("Employee Added Sucessfully");
       setMsg("Employee Added Sucessfully");
       setEmployee({
        name:"",
        age:"",
        department:"",
        position:"",
       });
    }).catch((error)=>{
      console.log(error);
    });
   };
  return (
    <>
       <div className='container mt-3'>
        <div className='row'>
          <div className='col-md-6 offset-md-3'>
            <div className='card'>
              <div className='card-header fs-3 text-center'>Add Employee</div>

                {msg &&<p className='fs-4 text-center text-success'>{msg}</p>}

              <div className='card-body'>
                <form onSubmit={(e) => EmployeeRegister(e)}>

                  <div className='mb-3'>
                    <label>Enter Employee Name</label>
                    <input type='text' name='name' className='form-control' onChange={(e)=>handleChange(e)} value={employee.name}></input>
                  </div>

                  <div className='mb-3'>
                    <label>Enter age</label>
                    <input type='number' name='age' className='form-control' onChange={(e)=>handleChange(e)} value={employee.age}></input>
                  </div>

                  <div className='mb-3'>
                    <label>Enter Description</label>
                    <input type='text' name='department' className='form-control' onChange={handleChange} value={employee.department}></input>

                  </div>

                  <div className='mb-3'>
                    <label>Enter Position</label>
                    <input type='text' name='position' className='form-control' onChange={(e)=>handleChange(e)} value={employee.position}></input>
                  </div>

                  <button className='btn btn-primary col-md-12'>Save</button>
                </form>
              </div>
            </div>

          </div>

        </div>
       </div>
   </>
  )
}

export default AddEmployee





