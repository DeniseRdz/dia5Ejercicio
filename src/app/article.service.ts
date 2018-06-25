import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  articles= [
    { nombre: 'Parabola cero', desc: 'Descripcion', image: 'http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', bandera: 0 },
    { nombre: 'Parabola uno', desc: 'Descripcion', image: 'http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', bandera: 0 },
    { nombre: 'Parabola dos', desc: 'Descripcion', image: 'http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', bandera: 0 }
  ];

  constructor() { }
  getArticles(){
    return this.articles;
  }

  createArticle(article){
    this.articles.push(article);
  }
}

