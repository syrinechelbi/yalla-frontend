import { Component,OnInit } from '@angular/core';
import { NavbarService } from './navbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public navbarService: NavbarService,private router: Router) {
  }
  
  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {}

  
}
