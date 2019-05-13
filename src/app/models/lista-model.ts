import { ListaItem } from './lista-item.model';
export class Lista {

   id: number;
   titulo: string;
   creadaEn: Date;
   terminadaEn: DataCue;
   terminada: boolean;

   items: ListaItem[];

   constructor( titulo: string ) {

      this.titulo = titulo;

      this.creadaEn = new Date();
      this.terminada = false;
      this.items = [];

      this.id = new Date().getTime(); // En la realidad esto es mejor que lo genere la base de datos (backend)


   }

}