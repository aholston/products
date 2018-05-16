import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

  get() {
    return this._http.get('/products');
  }

  getProduct(id) {
    return this._http.get(`/products/${id}`);
  }

  create(product) {
    return this._http.post('/products', product);
  }

  edit(id, product) {
    return this._http.patch(`/products/${id}`, product)
  }

  delete(id) {
    return this._http.delete(`/products/${id}`);
  }

}
