package com.example.employee.utility;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Emp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")  
    private Integer id;

    private String name;
    private Long age;
    private String department;
    private String position;

    public Emp() {}

    public Emp(Integer id, String name, Long age, String department, String position) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.department = department;
        this.position = position;
    }

    public Integer getId() { 
        return id;
    }

    public void setId(Integer id) { 
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }
}
