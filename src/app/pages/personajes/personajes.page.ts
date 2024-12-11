import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/services/personajes.service';
import { ModalController } from '@ionic/angular';

import { DetallePage } from 'src/app/detalle/detalle.page';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage implements OnInit {
  


  personajes: any[] = []; //listado de personajes

  constructor(private personajesService: PersonajesService, private modalController: ModalController) { }

  ngOnInit() {
    this.personajesService.getgame().subscribe(data => {
      this.personajes = data;//llamada al metodo 
    });
  }

  async verDetalle(id: string){// abre el metodo modal para mostrar los personajes 
    
    const modal= await this.modalController.create({
    component:DetallePage,
    componentProps:{id}
    });
    //Se visualisa el componente de detalle
    modal.present();
    }
}
 
