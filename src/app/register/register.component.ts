import { Component } from '@angular/core';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
	imports: [NgbDatepickerModule,FormsModule, JsonPipe],
})
export class RegisterComponent {
  model: NgbDateStruct | null = null;

}
