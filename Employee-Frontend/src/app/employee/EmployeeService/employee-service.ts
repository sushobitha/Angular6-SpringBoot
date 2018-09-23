import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { EMPLOYEEURL } from '../../shared/constants';
import { Employee } from '../employee-interface';


@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  /*service to get the all employees details*/
  getEmployeeDetails(): Observable<any> {
    // call to server
    return this.http.get(EMPLOYEEURL + '/getAllEmployees');
  }
  registerEmployee(newEmployee: Employee) {
    // call to server
    return this.http.post(EMPLOYEEURL + '/saveEmployee', newEmployee);
  }
}

