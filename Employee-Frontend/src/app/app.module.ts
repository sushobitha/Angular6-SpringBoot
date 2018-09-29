import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule, MatPaginatorModule, MatSelectModule, MatSortModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeeComponent } from './employee/employee-component';
import { EmployeeService } from './employee/EmployeeService/employee-service';
import { SaveEmployeeComponent } from './employee/save-employee/save-employee.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {appRoutes} from './router';
import { DialogComponent } from './shared/dialog/dialog.component';
import { MessagesService } from './shared/messages-service/messages.service';
import { MessagesComponent } from './shared/messages-service/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    SaveEmployeeComponent,
    WelcomeComponent,
    DialogComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [EmployeeService, MessagesService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent,MessagesComponent]
})
export class AppModule { }
 