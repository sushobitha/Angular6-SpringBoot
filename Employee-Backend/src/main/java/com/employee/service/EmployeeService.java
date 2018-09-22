package com.employee.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employee.model.Employee;

@Service
public interface EmployeeService {
	List<Employee> getAllEmployees()
			throws Exception;
	

	Employee saveEmployee(Employee employee)
			throws Exception;

}
