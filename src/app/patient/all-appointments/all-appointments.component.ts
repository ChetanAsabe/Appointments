import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
    selector: 'app-all-appointments',
    templateUrl: './all-appointments.component.html',
    styleUrls: ['./all-appointments.component.css'],
})
export class AllAppointmentsComponent implements OnInit {
    appointments!: any[];

    constructor(private appointmentService: AppointmentService) {}

    ngOnInit(): void {
        this.appointmentService
            .getAppointments()
            .pipe(
                map((resData: any) => {
                    const arr = [];

                    for (const key in resData) {
                        if (resData.hasOwnProperty(key)) {
                            arr.push({ ...resData[key], id: key });
                        }
                    }
                    return arr;
                })
            )
            .subscribe((appointments) => {
                this.appointments = appointments;
                console.log(this.appointments);
            });
    }
}
