import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ReportsComponent } from './reports/reports.component';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ToastModule} from 'primeng/toast';

@NgModule({
    declarations: [
        DashboardComponent,
        NewAppointmentComponent,
        AllAppointmentsComponent,
        DoctorsComponent,
        ReportsComponent,
    ],
    exports: [DashboardComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CardModule,
        TableModule,
        ProgressSpinnerModule,
        ButtonModule,
        InputTextModule,
        InputNumberModule,
        DropdownModule,
        CascadeSelectModule,
        ToastModule
    ],
})
export class PatientModule {}
