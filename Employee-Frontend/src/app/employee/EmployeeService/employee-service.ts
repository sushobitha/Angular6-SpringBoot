import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { EMPLOYEEURL } from '../../shared/constants';
import { Employee } from '../employee-interface';


@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  /*GET: service to get the all employees details*/
  getEmployeeDetails(): Observable<any> {
    // call to server
    return this.http.get(EMPLOYEEURL + '/getAllEmployees');
  }
  /*ADD: service to register an employee */
  registerEmployee(newEmployee: Employee) {
    // call to server
    return this.http.post(EMPLOYEEURL + '/saveEmployee', newEmployee);
  }

  /* DELETE: service to delete an employee */
  deleteEmployee(id: number): Observable<{}>{
    //call to server
    const url = `${EMPLOYEEURL}/deleteEmployee/${id}`; 
    const options = {responseType: 'text' as 'text'};
    return this.http.delete(url, options );
  }

}

