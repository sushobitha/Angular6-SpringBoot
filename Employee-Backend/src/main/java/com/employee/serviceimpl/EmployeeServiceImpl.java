package com.employee.serviceimpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employee.model.Employee;
import com.employee.repository.EmployeeRepository;
import com.employee.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
    EmployeeRepository employeeRepository;
	
	@Override
	public List<Employee> getAllEmployees() throws Exception {
		List<Employee> list = new ArrayList<Employee>();
		try{
		list = employeeRepository.findAll();
		return list; 
		}
		catch (Exception e) {
			throw(e);
		}
	}

	@Override
	public Employee saveEmployee(Employee employee) throws Exception {
		Employee savedEmployee = employeeRepository.saveAndFlush(employee);
		return savedEmployee;
	}
	
	
}