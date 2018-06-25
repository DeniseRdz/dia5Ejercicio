import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  id: number;
  
  articles= [
    { nombre: 'Parabola cero', desc: 'Descripcion', image: 'http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', bandera: 0 },
    { nombre: 'Parabola uno', desc: 'Descripcion', image: 'http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', bandera: 0 },
    { nombre: 'Parabola dos', desc: 'Descripcion', image: 'http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg', bandera: 0 }
  ];

  navegar(i2: string){
    this.router.navigate(['auxiliar', i2]);
  }

  constructor(public router : Router) { 
    
  }
     
  ngOnInit() {
  }

}
