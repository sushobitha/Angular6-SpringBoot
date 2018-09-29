package com.employee.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.employee.dto.EmployeeDTO;
import com.employee.model.Employee;

@Service
public interface EmployeeService {
	List<Employee> getAllEmployees()
			throws Exception;
	

	Employee saveEmployee(Employee employee)
			throws Exception;


	 void deleteEmployee(Long employeeId) 
			throws Exception;


	Optional<Employee> findById(long employeeId) 
			throws Exception;

	
}
