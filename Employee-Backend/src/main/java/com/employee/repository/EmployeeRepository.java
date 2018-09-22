package com.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.model.Employee;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}