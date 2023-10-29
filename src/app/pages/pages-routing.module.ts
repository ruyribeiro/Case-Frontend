import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductResolver } from './product.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'new-product', component: NewProductComponent, resolve: { product: ProductResolver} },
  { path: 'edit/:id', component: NewProductComponent, resolve: { product: ProductResolver} }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
