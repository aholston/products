import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../product.service';

import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  newProduct;
  errors;

  constructor(private _productService: ProductService,
              private _router: Router
              ) { }

  ngOnInit() {
    this.newProduct = {name: '', qty: '', price: ''};
    this.errors = '';
  }

  createProduct() {
    if (this.newProduct.qty < 1) {
      this.errors = 'Product quantity must be above 0!'
      return;
    }
    let observable = this._productService.create(this.newProduct);
    observable.subscribe(
      (data) => {
        this._router.navigate(['']);
      },
      (err) => {
        console.log(err.json());
        this.errors = err.json().message;

      });
  }

}
