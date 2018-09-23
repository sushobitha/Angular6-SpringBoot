import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from './EmployeeService/employee-service';
import {Employee} from './employee-interface';
import {MatPaginator, MatTableDataSource} from '@angular/material';

// RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-employee',
  templateUrl: './employee-component.html',
  styleUrls: ['./employee-component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ['First Name', 'Last Name', 'Gender', 'Dob', 'Department'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource: MatTableDataSource<Employee>;
  employees: any;
  tableData: any;
  tableColNameGenerated: Array<String> = new Array<String>();
  constructor(private employeeService: EmployeeService) {} // Dependency injection of service module

  ngOnInit() {
    this.tableData = [];
    this.fetchEmployeeDetails();
  }

 /* Function to retrieve employee details */
  fetchEmployeeDetails() {
    /*subscribing to the observable response from service method*/
    this.employeeService.getEmployeeDetails()
      .subscribe(
      (result) => {
        this.employees = result; // Table data binding the bootstrap table
        this.dataSource = new MatTableDataSource(this.employees); // Table data binding the angular material
        this.dataSource.paginator = this.paginator;
      }
    );

  }

}



