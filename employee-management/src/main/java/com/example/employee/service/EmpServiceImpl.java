package com.example.employee.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employee.repository.EmpRepository;
import com.example.employee.utility.Emp;

@Service
public class EmpServiceImpl implements EmpService {

    @Autowired
    private EmpRepository empRepository;

    @Override
    public Emp saveEmployee(Emp emp) {
        return empRepository.save(emp);
    }

    @Override
    public List<Emp> getAllEmployee() {
        return empRepository.findAll();
    }

    @Override
    public Emp getEmployeeById(Integer id) {
        return empRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));
    }
    
    

    @Override
    public String deleteEmployee(Integer id) {
        Optional<Emp> emp = empRepository.findById(id);
        if (emp.isPresent()) {
            empRepository.delete(emp.get());
            return "Employee Deleted Successfully";
        } else {
            throw new RuntimeException("Employee with ID " + id + " not found.");
        }
    }

    @Override
    public Emp editEmployee(Emp e, Integer id) {
        Emp oldemp = empRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found"));
        oldemp.setName(e.getName());
        oldemp.setAge(e.getAge());
        oldemp.setDepartment(e.getDepartment());
        oldemp.setPosition(e.getPosition());
        return empRepository.save(oldemp);
    }
}
