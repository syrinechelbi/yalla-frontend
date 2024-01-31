
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.css']
})
export class PaiementComponent {
   stroredValue = sessionStorage.getItem('nombre_place');

  constructor() { }
  handler:any = null;
  ngOnInit() {
    this.loadStripe();
  }

  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        console.log(token)
       // alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Effectuer votre paiement',
      description: 'Fournir vos informations',
      amount: amount * 100
     
    });

}
 

  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function (token: any) {
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}

