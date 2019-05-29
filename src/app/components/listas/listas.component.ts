import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DeseosService } from 'src/app/services/deseos.service';
import { Lista } from 'src/app/models/lista-model';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @ViewChild( IonList ) lista: IonList; // Si es uno, solo busca ese. Sino es un arreglo de IonList (sino se usa el id con #nombreId )
  @Input() terminada = true; // Se envia desde los componentes tab1 (false) y tab2 (true) al usar su etiqueta de selector

  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {}

  listaSeleccionada( lista: Lista ) {

    if ( this.terminada ) {

      this.router.navigateByUrl( `/tabs/tab2/agregar/${ lista.id }` );

    } else {

      this.router.navigateByUrl( `/tabs/tab1/agregar/${ lista.id }` );

    }

  }

  borrarLista( lista: Lista ) {

    this.deseosService.borrarLista( lista );

  }


  async editarLista( lista: Lista) {
    const alert = await this.alertCtrl.create({
      header: 'Editar Lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value:  lista.titulo,
          placeholder:  'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel', // Es lo que hace cuando se presione, en este caso es lo mismo que hace click fuera del botón
          handler: () => {
            console.log('Cancelar');
            this.lista.closeSlidingItems(); // Cierra el slide
          }
        },
        {
          text: 'Actualizar', // no tiene role porque usa el por defecto que es sel "ok" (aceptar). Más info en documentación de ionic
          handler: (data) =>  {

            console.log(data);

            // Salir si no hay nada escrito
            if ( data.titulo.length === 0 ) {
              return;
            }

            // Editar elemento
            lista.titulo = data.titulo;
            this.deseosService.guardarStorage();

            this.lista.closeSlidingItems(); // Cierra el slide

          }
        }
      ]
    });

    alert.present();

  }

}
