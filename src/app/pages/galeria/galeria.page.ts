import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {
  imagenes: string[] = [
  
    'assets/img/img1.png',
    'assets/img/img2.png',
    'assets/img/img3.png',
    'assets/img/mano.png',
    
    
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
