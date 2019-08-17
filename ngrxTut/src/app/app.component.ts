import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxTut';

  constructor(private router: Router) {}
  Promises(){
    console.log("promise button click");
    this.router.navigate(['promise']);
  }
  ngrx(){
    console.log("ngrx button click");
    this.router.navigate(['ngrx']);    
  }
}
