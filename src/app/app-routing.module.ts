import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { MisLibrosComponent } from './paginas/mis-libros/mis-libros.component';
import { MisQuejasComponent } from './paginas/mis-quejas/mis-quejas.component';

const routes: Routes = [
  { path: '', component:InicioComponent},
  { path: 'listaLibros', component:MisLibrosComponent},
  { path: 'crearQueja', component:MisQuejasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
