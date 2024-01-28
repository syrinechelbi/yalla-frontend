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
      paymentMethod: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reservation.valid) {
      // Envoyer les données au backend (NestJS) pour la réservation
      const reservationData = this.reservation.value;
      // Ajoutez ici la logique pour envoyer les données au backend via un service Angular
      console.log(reservationData);
    }
  }
  imprimerFacture() {
    // Ajoutez ici la logique pour imprimer la facture
    console.log('Facture imprimée');
  }
}

