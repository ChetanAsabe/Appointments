import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
    selector: 'app-new-appointment',
    templateUrl: './new-appointment.component.html',
    styleUrls: ['./new-appointment.component.css'],
})
export class NewAppointmentComponent implements OnInit {
    form!: FormGroup;
    doctors: String[] = ['Dr. Suresh', 'Dr. Rahul', 'Dr. Atul'];
    treatments: String[] = ['Cancer', 'Fever', 'Cholera', 'Malaria'];
    places: String[] = ['Pune', 'Mumbai', 'Delhi', 'Bengalore', 'Nagpur'];

    alert = false;

    appointments!: [];

    constructor(
        private fb: FormBuilder,
        private appoinmentService: AppointmentService
    ) {
        this.createForm();
    }

    ngOnInit(): void {}

    createForm() {
        this.form = this.fb.group({
            name: new FormControl(''),
            doctor: new FormControl(''),
            date: new FormControl(''),
            treatment: new FormControl(''),
            place: new FormControl(''),
            phone: new FormControl(''),
        });
    }

    onSubmit() {
        this.alert = true;
        setTimeout(() => {
            this.alert = false;
        }, 2500);

        // Post data to database
        this.appoinmentService
            .bookNewAppointment(this.form.value)
            .subscribe((resData) => {
                console.log(resData);
            });
    }
}
