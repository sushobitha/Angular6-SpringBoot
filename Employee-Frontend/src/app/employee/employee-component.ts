import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from './EmployeeService/employee-service';
import { Employee } from './employee-interface';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MatDialogRef } from '@angular/material';

// RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Router } from '@angular/router';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { MessagesService } from '../shared/messages-service/messages.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee-component.html',
  styleUrls: ['./employee-component.css']
})
export class EmployeeComponent implements OnInit {

  displayedColumns: string[] = ['firstName', 'lastName', 'gender', 'dob', 'department', 'actions'];
  tableColumns: string[] = ['First Name', 'Last Name', 'Gender', 'Dob', 'Department', 'Actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Employee>;
  employees: any;
  tableData: any;
  dialogRef: MatDialogRef<DialogComponent>;

  private idColumn = 'empId';
  private dsData: any;
  constructor(private employeeService: EmployeeService, private router: Router,
    private dialog: MatDialog, private messagesService: MessagesService) { } // Dependency injection of service module

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

  // function to delete employee
  deleteEmployee(empId: number) {

    this.dialogRef = this.dialog.open(DialogComponent, {
      height: '200px',
      width: '500px',
    });
    this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"

    this.dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.employeeService.deleteEmployee(empId).subscribe(() => {
        this.success();
        // Refresh DataTable to remove row.
        this.deleteRowDataTable(empId, this.idColumn, this.paginator, this.dataSource);
      },
      );
    });

  }

  // Remove the deleted row from the data table. Need to remove from the downloaded data first.
  private deleteRowDataTable(recordId, idColumn, paginator, dataSource) {
    this.dsData = dataSource.data;
    const itemIndex = this.dsData.findIndex(obj => obj[idColumn] === recordId);
    dataSource.data.splice(itemIndex, 1);
    dataSource.paginator = paginator;
  }

  private success() {
    this.messagesService.openDialog('Success', 'Employee has been deleted');
  }

}



