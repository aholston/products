webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var product_component_1 = __webpack_require__("./src/app/product/product.component.ts");
var product_index_component_1 = __webpack_require__("./src/app/product/product-index/product-index.component.ts");
var product_new_component_1 = __webpack_require__("./src/app/product/product-new/product-new.component.ts");
var product_update_component_1 = __webpack_require__("./src/app/product/product-update/product-update.component.ts");
var product_show_component_1 = __webpack_require__("./src/app/product/product-show/product-show.component.ts");
var routes = [
    { path: 'product/:id/edit', component: product_update_component_1.ProductUpdateComponent },
    { path: 'product/new', component: product_new_component_1.ProductNewComponent },
    { path: 'product/:id', component: product_show_component_1.ProductShowComponent },
    { path: '', pathMatch: 'full', component: product_index_component_1.ProductIndexComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routeComponents = [product_component_1.ProductComponent, product_index_component_1.ProductIndexComponent, product_show_component_1.ProductShowComponent, product_update_component_1.ProductUpdateComponent, product_new_component_1.ProductNewComponent];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <div class='container'>\n\n\n    <nav class=\"navbar fixed-top navbar-light bg-light\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">Home</a>\n      <a class=\"navbar-brand\" [routerLink]=\"['/product/new']\">Add a product!</a>\n    </nav>\n\n<app-product></app-product>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var product_service_1 = __webpack_require__("./src/app/product.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                app_routing_module_1.routeComponents
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [product_service_1.ProductService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/product.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var ProductService = /** @class */ (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.get = function () {
        return this._http.get('/products');
    };
    ProductService.prototype.getProduct = function (id) {
        return this._http.get("/products/" + id);
    };
    ProductService.prototype.create = function (product) {
        return this._http.post('/products', product);
    };
    ProductService.prototype.edit = function (id, product) {
        return this._http.patch("/products/" + id, product);
    };
    ProductService.prototype.delete = function (id) {
        return this._http.delete("/products/" + id);
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;


/***/ }),

/***/ "./src/app/product/product-index/product-index.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-index/product-index.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n\n  <div class='bg-danger'>{{ errors }}</div>\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th scope=\"col\">Product ID</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Quantity</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Actions</th>\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor='let p of products'>\n        <th scope=\"row\">{{ p._id }}</th>\n        <td>{{ p.name }}</td>\n        <td>{{ p.qty }}</td>\n        <td>{{ p.price }}</td>\n        <td>\n          <a [routerLink]=\"['product', p._id, 'edit']\"><button class='btn-primary'>Edit</button></a>\n          <a [routerLink]=\"['product', p._id]\"><button class='btn-success'>Details</button></a>\n          <button [disabled]='p.qty > 0' class='btn-danger' (click)='deleteProduct(p._id)'>Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-index/product-index.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductIndexComponent = /** @class */ (function () {
    function ProductIndexComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
    }
    ProductIndexComponent.prototype.ngOnInit = function () {
        this.errors = '';
        this.getAll();
    };
    ProductIndexComponent.prototype.getAll = function () {
        var _this = this;
        var observable = this._productService.get();
        observable.subscribe(function (data) {
            var response = data.json();
            console.log(response);
            _this.products = response.data;
        }, function (err) {
            _this.errors = err.json().message;
        });
    };
    ProductIndexComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        var observable = this._productService.delete(id);
        observable.subscribe(function (data) {
            _this.getAll();
            _this._router.navigate(['/']);
        }, function (err) {
            _this.errors = err.json().message;
        });
    };
    ProductIndexComponent = __decorate([
        core_1.Component({
            selector: 'app-product-index',
            template: __webpack_require__("./src/app/product/product-index/product-index.component.html"),
            styles: [__webpack_require__("./src/app/product/product-index/product-index.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.Router])
    ], ProductIndexComponent);
    return ProductIndexComponent;
}());
exports.ProductIndexComponent = ProductIndexComponent;


/***/ }),

/***/ "./src/app/product/product-new/product-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-new/product-new.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add a Product</h3>\n\n<div class='bg-danger'>{{ errors }}</div>\n\n<form (submit)='createProduct()' name='newProd'>\n  <div class=\"form-group\">\n    <label for=\"title\">Name</label>\n    <input type=\"text\" class=\"form-control\" id=\"title\" name='newProduct.name' [(ngModel)]='newProduct.name' placeholder=\"Enter name\" required minlength='3'>\n  </div>\n\n\n\n  <div class=\"form-group\">\n    <label for=\"price\">Price</label>\n    <input type=\"number\" class=\"form-control\" id=\"price\" name='newProduct.price' [(ngModel)]='newProduct.price' placeholder=\"Enter price\" required min='.01'>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"img_url\">Quantity</label>\n    <input type=\"text\" class=\"form-control\" id=\"qty\" name='newProduct.qty' [(ngModel)]='newProduct.qty' placeholder=\"Enter quantity\">\n  </div>\n\n\n\n\n\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/product/product-new/product-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductNewComponent = /** @class */ (function () {
    function ProductNewComponent(_productService, _router) {
        this._productService = _productService;
        this._router = _router;
    }
    ProductNewComponent.prototype.ngOnInit = function () {
        this.newProduct = { name: '', qty: '', price: '' };
        this.errors = '';
    };
    ProductNewComponent.prototype.createProduct = function () {
        var _this = this;
        if (this.newProduct.qty < 1) {
            this.errors = 'Product quantity must be above 0!';
            return;
        }
        var observable = this._productService.create(this.newProduct);
        observable.subscribe(function (data) {
            _this._router.navigate(['']);
        }, function (err) {
            console.log(err.json());
            _this.errors = err.json().message;
        });
    };
    ProductNewComponent = __decorate([
        core_1.Component({
            selector: 'app-product-new',
            template: __webpack_require__("./src/app/product/product-new/product-new.component.html"),
            styles: [__webpack_require__("./src/app/product/product-new/product-new.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.Router])
    ], ProductNewComponent);
    return ProductNewComponent;
}());
exports.ProductNewComponent = ProductNewComponent;


/***/ }),

/***/ "./src/app/product/product-show/product-show.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-show/product-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n  <h2>Product Details</h2>\n\n  <div class='bg-danger'>{{ errors }}</div>\n\n\n  <div class=\"list-group\">\n    <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Product ID</h5>\n      </div>\n      <p class=\"mb-1\">{{ product._id }}</p>\n    </div>\n    <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Product Name</h5>\n      </div>\n      <p class=\"mb-1\">{{ product.name }}</p>\n    </div>\n    <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Product Price</h5>\n      </div>\n      <p class=\"mb-1\">{{ product.price }}</p>\n    </div>\n    <div class=\"list-group-item list-group-item-action flex-column align-items-start\">\n      <div class=\"d-flex w-100 justify-content-between\">\n        <h5 class=\"mb-1\">Product Quantity</h5>\n      </div>\n      <p class=\"mb-1\">{{ product.qty }}</p>\n    </div>\n  </div>\n\n  <a [routerLink]=\"['/']\"><button class='btn-primary'>Back</button></a>\n  <button [disabled]='product.qty > 0' (click)='deleteProduct(product._id)' class='btn-danger'>Delete</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/product/product-show/product-show.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductShowComponent = /** @class */ (function () {
    function ProductShowComponent(_productService, _route, _router) {
        this._productService = _productService;
        this._route = _route;
        this._router = _router;
    }
    ProductShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var observable = _this._productService.getProduct(params.id);
            observable.subscribe(function (data) {
                var show = data.json().data;
                _this.product = { name: show.name, price: show.price, qty: show.qty, _id: show._id };
            }, function (err) {
                _this.errors = err.json().message;
            });
        });
    };
    ProductShowComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        var observable = this._productService.delete(id);
        observable.subscribe(function (data) {
            _this._router.navigate(['']);
        }, function (err) {
            _this.errors = err;
        });
    };
    ProductShowComponent = __decorate([
        core_1.Component({
            selector: 'app-product-show',
            template: __webpack_require__("./src/app/product/product-show/product-show.component.html"),
            styles: [__webpack_require__("./src/app/product/product-show/product-show.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ProductShowComponent);
    return ProductShowComponent;
}());
exports.ProductShowComponent = ProductShowComponent;


/***/ }),

/***/ "./src/app/product/product-update/product-update.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-update/product-update.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h3>Edit Product</h3>\n\n<div class='bg-danger'>{{ errors }}</div>\n\n<form (submit)='editProduct(currentProduct._id)'>\n  <div class=\"form-group\">\n    <label for=\"title\">Title</label>\n    <input type=\"text\" class=\"form-control\" id=\"title\" name='currentProduct.name' [(ngModel)]='currentProduct.name' placeholder=\"Enter title\" value='currentProduct.name'>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"price\">Price</label>\n    <input type=\"number\" class=\"form-control\" id=\"price\" name='currentProduct.price' [(ngModel)]='currentProduct.price' placeholder=\"Enter price\" value='currentProduct.price'>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"img_url\">Quantity</label>\n    <input type=\"text\" class=\"form-control\" id=\"qty\" name='currentProduct.qty' [(ngModel)]='currentProduct.qty' placeholder=\"Enter image URL\" value='currentProduct.qty'>\n  </div>\n\n\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n<button id='reset' (click)='getFields()'>Reset</button>\n"

/***/ }),

/***/ "./src/app/product/product-update/product-update.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var product_service_1 = __webpack_require__("./src/app/product.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ProductUpdateComponent = /** @class */ (function () {
    function ProductUpdateComponent(_productService, _route, _router) {
        this._productService = _productService;
        this._route = _route;
        this._router = _router;
    }
    ProductUpdateComponent.prototype.ngOnInit = function () {
        this.getFields();
    };
    ProductUpdateComponent.prototype.getFields = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            var observable = _this._productService.getProduct(params.id);
            observable.subscribe(function (data) {
                var product = data.json().data;
                _this.currentProduct = { name: product.name, price: product.price, qty: product.qty, _id: product._id };
                _this.reset = { name: product.name, price: product.price, qty: product.qty, _id: product._id };
            }, function (err) {
                _this.errors = err;
            });
        });
    };
    ProductUpdateComponent.prototype.editProduct = function (id) {
        var _this = this;
        var observable = this._productService.edit(id, this.currentProduct);
        observable.subscribe(function (data) {
            _this._router.navigate(['']);
        }, function (err) {
            _this.errors = err.json().message;
        });
    };
    ProductUpdateComponent = __decorate([
        core_1.Component({
            selector: 'app-product-update',
            template: __webpack_require__("./src/app/product/product-update/product-update.component.html"),
            styles: [__webpack_require__("./src/app/product/product-update/product-update.component.css")]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], ProductUpdateComponent);
    return ProductUpdateComponent;
}());
exports.ProductUpdateComponent = ProductUpdateComponent;


/***/ }),

/***/ "./src/app/product/product.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            template: __webpack_require__("./src/app/product/product.component.html"),
            styles: [__webpack_require__("./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map