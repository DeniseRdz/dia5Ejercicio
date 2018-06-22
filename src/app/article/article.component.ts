import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id: number;
  constructor(public activatedRoute : ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);

   
  }
     
  ngOnInit() {
  }

}
