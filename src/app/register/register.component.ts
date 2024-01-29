import { Component,OnInit } from '@angular/core';
import { NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
	imports: [NgbDatepickerModule,FormsModule, JsonPipe],
})
export class RegisterComponent implements OnInit {

  model: NgbDateStruct | null = null;


  constructor(private navbarService: NavbarService,private toastr: ToastrService) {
    this.navbarService.hideNavbar();

  }

  ngOnInit() {}


  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
