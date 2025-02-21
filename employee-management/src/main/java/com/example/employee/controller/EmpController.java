package com.example.employee.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.employee.service.EmpService;
import com.example.employee.utility.Emp;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/employees")
public class EmpController {

    @Autowired
    private EmpService empService;

    @PostMapping("/save")
    public ResponseEntity<?> saveEmployee(@RequestBody Emp emp) {
        return new ResponseEntity<>(empService.saveEmployee(emp), HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllEmployee() {
        return new ResponseEntity<>(empService.getAllEmployee(), HttpStatus.OK);
    }

    
    @GetMapping("/{id}")
    public ResponseEntity<?> getEmployeeById(@PathVariable("id") Integer id) {
        return new ResponseEntity<>(empService.getEmployeeById(id), HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Integer id) {
        try {
            String response = empService.deleteEmployee(id);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error deleting employee: " + e.getMessage());
        }
    }
    
    @PostMapping("/edit/{id}")
    public ResponseEntity<?> editEmployee(@RequestBody Emp emp, @PathVariable("id") Integer id) {
        try {
            return new ResponseEntity<>(empService.editEmployee(emp, id), HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error updating employee: " + e.getMessage());
        }
    }

}
