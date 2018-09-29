package com.employee.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.employee.dto.EmployeeDTO;
import com.employee.model.Employee;
import com.employee.service.EmployeeService;
 
@RestController
@RequestMapping(value = "/employee")
public class EmployeeController {
 
    @Autowired
    private EmployeeService employeeService;
 
    @RequestMapping(value = "/getAllEmployees", //
            method = RequestMethod.GET, //	
            produces = { MediaType.APPLICATION_JSON_VALUE})
    @ResponseBody
    public List<EmployeeDTO> getEmployees() throws Exception {
        List<EmployeeDTO> list = new ArrayList<>();
        List<Employee> dbEmployees = employeeService.getAllEmployees();
        //System.out.println(String.valueOf(dbEmployees.size()));
        for(Employee emp : dbEmployees) {
        	EmployeeDTO employeeDTO = new EmployeeDTO();
        	employeeDTO.setEmpId(emp.getEmployeeId());
        	employeeDTO.setFirstName(emp.getFirstName());
        	employeeDTO.setLastName(emp.getLastName());
        	employeeDTO.setDob(emp.getDob());
        	employeeDTO.setGender(emp.getGender());
        	employeeDTO.setDepartment(emp.getDepartment());
        	list.add(employeeDTO);
        }
        return list;
    }
    
    @RequestMapping(value = "/saveEmployee", method = RequestMethod.POST)
	public ResponseEntity<EmployeeDTO> createBin(@RequestBody EmployeeDTO employeeDTO) throws Exception {
		Employee employee = new Employee();
		employee.setFirstName(employeeDTO.getFirstName());
		employee.setLastName(employeeDTO.getLastName());
		employee.setDepartment(employeeDTO.getDepartment());
		employee.setDob(employeeDTO.getDob());
		employee.setGender(employeeDTO.getGender());
    	Employee emp = employeeService.saveEmployee(employee);
    	
    	//For response
    	EmployeeDTO empDTO = new EmployeeDTO();
    	
    	empDTO.setEmpId(emp.getEmployeeId());
    	empDTO.setFirstName(emp.getFirstName());
    	empDTO.setLastName(emp.getLastName());
    	empDTO.setGender(emp.getGender());
    	empDTO.setDob(emp.getDob());
    	empDTO.setDepartment(emp.getDepartment());
    	
		return new ResponseEntity<>(empDTO, HttpStatus.OK);
	}
    
    @RequestMapping(value = "/deleteEmployee/{id}", method = RequestMethod.DELETE)
    public String deleteEmployee(@PathVariable("id") Long employeeId) throws Exception {
    	Optional<Employee> emp = employeeService.findById(employeeId);
        if (emp == null) {
            return "Sorry, Employee not found!";
        }
        else{ 
    	employeeService.deleteEmployee(employeeId); 
    	return "Employee deleted!";
        }
    }
}
 
