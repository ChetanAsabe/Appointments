import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AppointmentService {
    private API_URL =
        'https://patient-appointments-84871-default-rtdb.firebaseio.com/';

    constructor(private client: HttpClient) {}

    bookNewAppointment(appoinmentsData: any) {
        return this.client.post(
            `${this.API_URL}appointments.json`,
            appoinmentsData
        );
    }

    getAppointments() {
        return this.client.get(`${this.API_URL}appointments.json`);
    }
}
