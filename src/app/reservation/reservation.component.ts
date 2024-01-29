import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})

export class ReservationComponent implements OnInit {
 
  reservation!: FormGroup;
  showPaymentForm: boolean = false;

   

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reservation = this.fb.group({
      name: ['', Validators.required],
      paymentMethod: ['', Validators.required]
      
    });
  }

  onSubmit() {
    if (this.reservation.valid) {
      if (this.reservation.value.paymentMethod === 'online') {
        this.showPaymentForm = true; // hedhi pour afficher le formulaire de paiement en ligne
      }
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
