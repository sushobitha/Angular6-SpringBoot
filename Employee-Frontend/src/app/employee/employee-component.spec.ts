//
// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
//
// import { EmployeeComponent } from './employee-component';
//
// describe('EmployeeComponent', () => {
//   let component: EmployeeComponent;
//   let fixture: ComponentFixture<EmployeeComponent>;
//
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EmployeeComponent ]
//     })
//     .compileComponents();
//   }));
//
//   beforeEach(() => {
//     fixture = TestBed.createComponent(EmployeeComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   })

import {TestBed, async, fakeAsync, inject} from '@angular/core/testing';
import {EmployeeComponent} from './employee-component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {DataTableModule} from 'angular-6-datatable';
import {EmployeeService} from './EmployeeService/employee-service';
import {TestData} from './test-data';
import {Observable} from 'rxjs';

describe('Component : Employee',() => {

  let comp: EmployeeComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations : [EmployeeComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        DataTableModule
      ],
      providers: [EmployeeService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    let fixture = TestBed.createComponent(EmployeeComponent);
    comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });

  it('retrieves all the cars', async(inject( [EmployeeService], ( empService ) => {
    empService.getEmployeeDetails().subscribe(result => expect(result.length).toBeGreaterThan(0));
  })));
});
