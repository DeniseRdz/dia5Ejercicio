import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-auxiliar',
  templateUrl: './auxiliar.component.html',
  styleUrls: ['./auxiliar.component.css']
})
export class AuxiliarComponent implements OnInit {
  
  id: number;
  articleComponent = [];
  comprar(){
    alert("Articulo comprado");
  }

  constructor(public activatedRoute : ActivatedRoute, public articleSevice: ArticleService) { 
    this.articleComponent = articleSevice.getArticles();
    console.log(this.articleComponent);
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);

  }

  ngOnInit() {
  }

}
