import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Movido la carpeta de tabs dentro de una creada llamada "pages" por eso el cambio de nombre
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
