package com.employee.test.controller;
import static org.junit.Assert.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.skyscreamer.jsonassert.JSONAssert;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.employee.controller.EmployeeController;
import com.employee.model.Employee;
import com.employee.service.EmployeeService;

@RunWith(SpringRunner.class)
@WebMvcTest(value = EmployeeController.class, secure = false)
public class EmployeeControllerTest {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private EmployeeService employeeService;

	List<Employee> mockEmployee;
	Employee employee = new Employee(1L, "John", "Doe", "M", "10-10-1993", "HR");

	String exampleEmployeeJson = "[{\"empId\":1,\"firstName\":\"John\",\"lastName\":\"Doe\",\"gender\":\"M\",\"dob\":\"10-10-1993\",\"department\":\"HR\"}]";

	@Test
	public void retrieveDetailsForCourse() throws Exception {
		mockEmployee = new ArrayList<>();
		mockEmployee.add(employee);
		Mockito.when(employeeService.getAllEmployees()).thenReturn(mockEmployee);

		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
				"/employee/getAllEmployees").accept(
				MediaType.APPLICATION_JSON);

		MvcResult result = mockMvc.perform(requestBuilder).andReturn();

		System.out.println(result.getResponse());
		JSONAssert.assertEquals(exampleEmployeeJson, result.getResponse()
				.getContentAsString(), false);
	}

}