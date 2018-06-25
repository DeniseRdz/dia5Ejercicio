import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Router} from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id: number;
  articleComponent = [];
  
  /*articles= [
    { nombre: 'Pergola cero',desc: 'Descripcion', image: 'http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', bandera: 0 },
    { nombre: 'Pergola uno', desc: 'Descripcion', image: 'http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', bandera: 0 },
    { nombre: 'Pergola dos', desc: 'Descripcion', image: 'http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', bandera: 0 }
  ];*/

  navegar(i2: string){
    this.router.navigate(['auxiliar', i2]);
  }

  constructor(public router : Router, public articleSevice: ArticleService) { 
    this.articleComponent = articleSevice.getArticles();
    console.log(this.articleComponent);
    //this.id = this.activatedRoute.snapshot.params['id'];
    //console.log(this.id);
  }
     
  ngOnInit() {
  }

}
