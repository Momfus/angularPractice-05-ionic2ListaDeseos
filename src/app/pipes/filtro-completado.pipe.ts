import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista-model';

@Pipe({
  name: 'filtroCompletado',
  pure: false // Por defecto los pipes son "puros" (true), al hacerlo falso hace que esten pendientes de los cambios
})
export class FiltroCompletadoPipe implements PipeTransform {
  transform(listas: Lista[], completada: boolean = true): Lista[] {

    return listas.filter( lista => lista.terminada === completada);

  }
}
