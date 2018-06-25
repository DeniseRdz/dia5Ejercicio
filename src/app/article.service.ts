import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  articles= [
    { nombre: 'Pergola cero',desc: 'Descripcion', image: 'assets/img/pergola03.jpg', bandera: 0 },
    { nombre: 'Pergola uno', desc: 'Descripcion', image: 'assets/img/pergola022.jpg', bandera: 0 },
    { nombre: 'Pergola dos', desc: 'Descripcion', image: 'assets/img/pergola05.jpg', bandera: 0 }
  ];

  constructor() { }
  getArticles(){
    return this.articles;
  }

  createArticle(article){
    this.articles.push(article);
  }
}

