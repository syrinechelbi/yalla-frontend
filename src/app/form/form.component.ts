import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  titre: string;
  description: string | undefined;
  date: Date | undefined;
  capacite: number;
  heureDebut: string;
  heureFin: string;
  categorie: string;
  location: string;
  

  constructor() {
    // You can also initialize properties in the constructor if needed
     this.titre = ''; 
     this.capacite = 0;
     this.heureDebut = '';
     this.heureFin = '';
     this.categorie = '';
     this.location = '';
  }

  onSubmit(form: any): void {
    // Check if the form is valid
    if (form.valid) {
      // Handle the form submission
      console.log('Form submitted!', {
        titre: this.titre,
        description: this.description,
        date: this.date,
        capacite: this.capacite,
        heureDebut: this.heureDebut,
        heureFin: this.heureFin,
        categorie: this.categorie,
        location: this.location
      });
      // Add your logic to send the form data to the server or perform other actions.
    } else {
      // Handle invalid form
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }


  validateCapacite(ngModel: NgModel): void {
    const capacite = ngModel.value;
  
    if (capacite === 0) {
      ngModel.control.setErrors({ 'capaciteInvalid': true });
    } else {
      ngModel.control.setErrors(null);
  
      if (!capacite) {
        ngModel.control.setErrors({ 'required': true });
      }
 
   }

}
}
