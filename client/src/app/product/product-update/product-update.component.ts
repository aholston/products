import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../product.service';

import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  currentProduct;
  reset;
  errors;


  constructor(private _productService: ProductService,
              private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.getFields();
  }


  getFields() {
    this._route.params.subscribe(
      (params) => {
        var observable = this._productService.getProduct(params.id);
        observable.subscribe(
          (data) => {
            var product = data.json().data;
            this.currentProduct = {name: product.name, price: product.price, qty: product.qty, _id: product._id};
            this.reset = {name: product.name, price: product.price, qty: product.qty, _id: product._id};
          },
          (err) => {
            this.errors = err;
          });
      });

  }

  editProduct(id) {
    let observable = this._productService.edit(id, this.currentProduct);
    observable.subscribe(
      (data) => {
        this._router.navigate(['']);
      },
      (err) => {
        this.errors = err.json().message;
      });
  }

}
