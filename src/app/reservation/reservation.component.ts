import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InjectionToken } from '@angular/core';
import { StorageService } from 'angular-webstorage-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})



export class ReservationComponent implements OnInit {
 
  
nom: string;
nombre_place: number | undefined;
date: Date | undefined;
type_paiment: string;



constructor(private router: Router) {
   this.nom = ''; 
   this.nombre_place = 0;
   this.type_paiment = '';

}



ngOnInit() {
}

submit(form: any): void {

  if (this.type_paiment == 'en_ligne') {
    sessionStorage.setItem('nombre_place', String(this.nombre_place));
    this.router.navigate(['/payer']);

  } 
}



}

