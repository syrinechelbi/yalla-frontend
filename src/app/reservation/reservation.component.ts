import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit {
  reservation!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reservation = this.fb.group({
      name: ['', Validators.required],
      numberOfPeople: ['', [Validators.required, Validators.min(1)]],
      phoneNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]] 
    });
  }

  onSubmit() {
    if (this.reservation.valid) {
      // Envoyer les données au backend (NestJS) pour la réservation
      const reservationData = this.reservation.value;
      // Ajoutez ici la logique pour envoyer les données au backend via un service Angular
    }
  }
}

