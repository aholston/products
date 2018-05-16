import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ProductIndexComponent } from './product/product-index/product-index.component';
import { ProductNewComponent } from './product/product-new/product-new.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductShowComponent } from './product/product-show/product-show.component';

const routes: Routes = [
  { path: 'product/:id/edit', component: ProductUpdateComponent },
  { path: 'product/new', component: ProductNewComponent },
  { path: 'product/:id', component: ProductShowComponent },
  { path: '', pathMatch: 'full', component: ProductIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [ProductComponent, ProductIndexComponent, ProductShowComponent, ProductUpdateComponent, ProductNewComponent]
