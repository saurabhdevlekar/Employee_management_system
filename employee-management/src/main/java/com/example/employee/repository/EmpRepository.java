package com.example.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.employee.utility.Emp;

public interface EmpRepository extends JpaRepository<Emp, Integer>{

}
