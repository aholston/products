import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../product.service';

import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.css']
})
export class ProductShowComponent implements OnInit {
  product;
  errors;


  constructor(private _productService: ProductService,
              private _route: ActivatedRoute,
              private _router: Router
              ) { }

  ngOnInit() {
    this._route.params.subscribe(
      (params) => {
        var observable = this._productService.getProduct(params.id);
        observable.subscribe(
          (data) => {
            var show = data.json().data;
            this.product = {name: show.name, price: show.price, qty: show.quantity, _id: show._id};
          },
          (err) => {
            this.errors = err.json().message;
          });
        });
      }

      deleteProduct(id) {
        var observable = this._productService.delete(id);
        observable.subscribe(
          (data) => {
            this._router.navigate(['']);
          },
          (err) => {
            this.errors = err;
          });

      }

}
