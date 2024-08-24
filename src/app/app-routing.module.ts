import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './patient/dashboard/dashboard.component';
import { NewAppointmentComponent } from './patient/new-appointment/new-appointment.component';
import { AllAppointmentsComponent } from './patient/all-appointments/all-appointments.component';
import { DoctorsComponent } from './patient/doctors/doctors.component';
import { ReportsComponent } from './patient/reports/reports.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'new-appointment', component: NewAppointmentComponent },
    { path: 'all-appointments', component: AllAppointmentsComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'reports', component: ReportsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
