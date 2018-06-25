import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {

  }
navegarArticulo(){
    this.router.navigate(['article',3]);
  }
  
  images=[
    'http://via.placeholder.com/1600x600',
    'http://via.placeholder.com/1600x600',
    'http://via.placeholder.com/1600x600'
  ];


}
