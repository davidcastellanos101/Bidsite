import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductgridComponent } from './components/content/productgrid/productgrid.component';
import { CategoriasComponent } from './components/content/categorias/categorias.component';

const routes: Routes = [
  { path: 'grilla-productos', component: ProductgridComponent },
  { path: 'categorias', component: CategoriasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }