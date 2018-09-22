import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { EMPLOYEEURL } from '../../shared/constants';


@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) { }

  /*service to get the all employees details*/
  getEmployeeDetails(): Observable<any> {
    // server call
    return this.http.get(EMPLOYEEURL);
  }
}

