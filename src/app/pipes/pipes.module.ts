import { NgModule } from '@angular/core';
import { FiltroCompletadoPipe } from './filtro-completado.pipe';

@NgModule({
  declarations: [FiltroCompletadoPipe],
  /* Como no se trabajará con los ngIf, ngFor, etcétera...no hace falta el móduclo CommonModule
  imports: [
    CommonModule
  ]*/
  exports: [FiltroCompletadoPipe] // Aquí se van agregando los pipes que iré haciendo y que se usan en otros lugares de la aplicación.
})
export class PipesModule { }
