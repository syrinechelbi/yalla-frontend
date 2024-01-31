import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

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
  showSuccessMessage= false;
  

  constructor(private http: HttpClient) {
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
      
      const eventData = {
        titre: this.titre,
        description: this.description,
        date: this.date,
        capacite: this.capacite,
        heureDebut: this.heureDebut,
        heureFin: this.heureFin,
        categorie: this.categorie,
        location: this.location
      };

      this.http.post('http://localhost:3000/event', eventData)
      .subscribe(
        (response) => {
          console.log('Form submitted successfully!', response);
          this.showSuccessMessage = true;
          console.log(eventData);        },
        (error) => {
          console.error('Error submitting form:', error);
          // Handle error scenarios if needed.
        }
      );
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
