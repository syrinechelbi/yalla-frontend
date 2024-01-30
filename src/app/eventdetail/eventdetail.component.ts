import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventdetail',
  templateUrl: './eventdetail.component.html',
  styleUrls: ['./eventdetail.component.css']
})
export class EventdetailComponent {

  constructor(private router: Router) {
  }
  
  reserver() {
    this.router.navigate(['/reserver']);
  }

}
