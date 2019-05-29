import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(
              public deseosService: DeseosService,
              private router: Router,
              private alertCtrl: AlertController) {

  }

  async agregarLista() {

    const alert = await this.alertCtrl.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', // Es lo que hace cuando se presione, en este caso es lo mismo que hace click fuera del botón
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear', // no tiene role porque usa el por defecto que es sel "ok" (aceptar). Más info en documentación de ionic
          handler: (data) =>  {

            console.log(data);

            // Salir si no hay nada escrito
            if ( data.titulo.length === 0 ) {
              return;
            }

            // Añadir elemento
            const listaId = this.deseosService.crearLista( data.titulo );

            this.router.navigateByUrl( `/tabs/tab1/agregar/${ listaId }` );

          }
        }
      ]
    });

    alert.present();

  }

}
