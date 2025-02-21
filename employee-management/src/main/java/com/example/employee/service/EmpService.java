package com.example.employee.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.employee.utility.Emp;

@Service
public interface EmpService {
   public Emp saveEmployee(Emp emp);
   
   public List<Emp> getAllEmployee();
   
   public Emp getEmployeeById(Integer id);
   
   public String deleteEmployee(Integer id);
   
   public Emp editEmployee(Emp emp,Integer id);
}


