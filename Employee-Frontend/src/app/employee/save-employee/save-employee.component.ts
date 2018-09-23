import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../EmployeeService/employee-service';
import { Employee } from '../employee-interface';
import {Router} from '@angular/router';

@Component({
    selector: 'app-save-employee',
    templateUrl: './save-employee.component.html',
    styleUrls: ['./save-employee.component.css']
})
export class SaveEmployeeComponent implements OnInit {
    registerForm: FormGroup;
    gender;
    submitted = false;
    dobErrMsg = false;
    emp: any;

    constructor(private formBuilder: FormBuilder, private employeeService: EmployeeService, private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.maxLength(25), Validators.minLength(1)]],
            gender: ['', Validators.required],
            dob: ['', Validators.required],
            department: ['', Validators.required]
        });
    }

    validateDOB(e) {
        const year = new Date(e).getFullYear();
        const today = new Date().getFullYear();
        if (today - year <= 100) {
          this.dobErrMsg = false;
        } else{
          this.dobErrMsg = true;
        }
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        } else {
            // server call POST to add details
          this.registerNewEmployee();

        }
    }

/*
    Method to register a new employee
*/
    registerNewEmployee() {
      /*getting values from the form */
          const newEmployee: Employee = {
            firstName : this.registerForm.controls.firstName.value,
            lastName : this.registerForm.controls.lastName.value,
            gender : this.registerForm.controls.gender.value,
            dob : this.registerForm.controls.dob.value,
            department: this.registerForm.controls.department.value
          };

      this.employeeService.registerEmployee(newEmployee).subscribe(
        (result) => {
          this.emp = result;
          setTimeout(() => {
            this.router.navigate(['/view']);
          }, 2000);
        }
      );
    }
}
