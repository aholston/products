import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../product.service';

import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {
  errors;
  products;

  constructor(private _productService: ProductService,
              private _router: Router
              ) { }

  ngOnInit() {
    this.errors = '';
    this.getAll();
  }

  getAll() {
    let observable = this._productService.get();
    observable.subscribe(
      (data) => {
        const response = data.json();
        console.log(response);
        this.products = response.data;
      }, (err) => {
        this.errors = err.json().message;
      });
    }

    deleteProduct(id) {
      let observable = this._productService.delete(id);
      observable.subscribe(
        (data) => {
          this.getAll();
          this._router.navigate(['/']);
        },
        (err) => {
          this.errors = err.json().message;
        });
  }


}
