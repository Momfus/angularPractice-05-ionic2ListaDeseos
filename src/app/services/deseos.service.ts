import { Injectable } from '@angular/core';
import { Lista } from '../models/lista-model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {

    this.cargarStorage();
  }

  crearLista( titulo: string ) {

    const nuevaLista = new Lista( titulo );
    this.listas.push( nuevaLista );

    this.guardarStorage();

    return nuevaLista.id;

  }

  obtenerLista( id: string | number ) { // El id puede ser traido por el url como string, por eso la opcion que puede ser eso o number

    id = Number(id); // En caso de ser string esto hace que se pueda usar como number y luego comparar estrictamente

    return this.listas.find( listaData =>  listaData.id === id  );

  }

  guardarStorage() {

    localStorage.setItem( 'data', JSON.stringify( this.listas ) );

  }

  cargarStorage() {
  
    if ( localStorage.getItem('data') ) { // Comprobar primero que tenga algun dato

      this.listas = JSON.parse( localStorage.getItem( 'data' ) );

    } else {

      this.listas = [];

    }

  }

}
