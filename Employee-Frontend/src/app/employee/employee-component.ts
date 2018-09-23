import {Component, OnInit, ViewChild} from '@angular/core';
import {EmployeeService} from './EmployeeService/employee-service';
import {Employee} from './employee-interface';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

// RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee-component.html',
  styleUrls: ['./employee-component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'dob', 'department'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Employee>;
  employees: any;
  tableData: any;
  constructor(private employeeService: EmployeeService, private router: Router) {} // Dependency injection of service module

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
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }, 10);
      }
    );

  }

  route() {
    this.router.navigate(['/register']);
  }

}



