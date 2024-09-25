import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/types/Index';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    patientName: string = 'John';
    appointments: Appointment[] = [];

    constructor(private appointmentService: AppointmentService) {
        this.getAppointments();
    }

    ngOnInit(): void {}

    getAppointments() {
        this.appointmentService
            .getAppointments()
            .pipe(
                map((responseData: any) => {
                    const appointment = [];

                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key)) {
                            appointment.push({
                                ...responseData[key],
                                id: key,
                            });
                        }
                    }
                    return appointment;
                })
            )
            .subscribe((appointments) => {
                this.appointments = appointments;
                console.log(appointments);
            });
    }
}
