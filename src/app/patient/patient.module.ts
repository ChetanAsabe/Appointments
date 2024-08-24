import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ReportsComponent } from './reports/reports.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NewAppointmentComponent,
    AllAppointmentsComponent,
    DoctorsComponent,
    ReportsComponent
  ],
  exports: [
    DashboardComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class PatientModule { }
