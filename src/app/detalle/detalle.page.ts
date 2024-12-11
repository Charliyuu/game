import { Component, OnInit,Input,} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from '../services/personajes.service';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  //Generamos un input para cecibir el id
@Input() id!: string; // Recibe el id del personaje como entrada
personaje: any; // Detalle del personaje

  constructor( private modalController: ModalController, private personajesService: PersonajesService) {}

  ngOnInit() {
     // Llama al servicio para obtener los detalles del personaje
     this.personajesService.getdetalle(this.id).subscribe((data) => {
      this.personaje = data;
        } );
 
  
    }

  regresar() {
    this.modalController.dismiss();
  }
  
 }


