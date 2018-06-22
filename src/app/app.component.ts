import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  images=[
    'http://via.placeholder.com/900x600',
    'http://via.placeholder.com/900x600',
    'http://via.placeholder.com/900x600'
  ];
  articles= [
    { nombre: 'Parabola1', desc: 'Descripcion', image: 'https://drive.google.com/file/d/1U_vRytbEhcyzCaiUzLG7b70r7qAobA1y/view' }
  ];
  
  
}
