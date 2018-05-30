(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_gite_gite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/gite/gite.component */ "./src/app/pages/gite/gite.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'gite', component: _pages_gite_gite_component__WEBPACK_IMPORTED_MODULE_3__["GiteComponent"] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n\r\n<base href=\"/\">\r\n\r\n<toolbar-toolbar></toolbar-toolbar>\r\n<img src=\"/assets/pano.jpg\"> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_toolbar_toolbar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/toolbar-toolbar/toolbar-toolbar.component */ "./src/app/home/toolbar-toolbar/toolbar-toolbar.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_gite_gite_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/gite/gite.component */ "./src/app/pages/gite/gite.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_toolbar_toolbar_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarToolbarComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _pages_gite_gite_component__WEBPACK_IMPORTED_MODULE_12__["GiteComponent"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTooltipModule"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/toolbar-toolbar/toolbar-toolbar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/home/toolbar-toolbar/toolbar-toolbar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<div class=\"menu\">\r\n<div class=\"Translate\">\r\n    <a (click)=\"switchLanguage('en')\">en</a> | \r\n<a (click)=\"switchLanguage('fr')\">fr</a>\r\n</div>\r\n<nav>\r\n    <a  routerLink=\"home\"  [routerLinkActive]=\"'is-active'\" >{{'NavBar.Home' | translate}}</a>\r\n    &nbsp;\r\n    <a routerLink=\"gite\" [routerLinkActive]=\"'is-active'\" >{{'NavBar.HolidayCottage' | translate}}</a>\r\n    &nbsp;\r\n    <a > {{'NavBar.Find' | translate}}</a>\r\n    &nbsp;\r\n    <a >{{'NavBar.Activities' | translate}}</a>\r\n    &nbsp;\r\n</nav>   \r\n</div>  \r\n  \r\n\r\n\r\n\r\n<!-- Creates a layout with a left-positioned sidenav and explicit content. -->\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/toolbar-toolbar/toolbar-toolbar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/home/toolbar-toolbar/toolbar-toolbar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  width: 100%; }\n\nnav {\n  width: 100%;\n  margin-bottom: 10%; }\n\nnav a {\n  text-align: center;\n  padding: 10px; }\n\nis-not-selected {\n  border-bottom: 10px solid #82b5a4; }\n\nnav a:hover {\n  background-color: #71a81d; }\n\n.is-active {\n  border-left: 5px solid grey;\n  border-right: 5px solid grey;\n  border-bottom: 10px solid white; }\n\n.Translate {\n  text-align: right;\n  font-size: 14px; }\n\n.unselected {\n  border-bottom: 10px solid red; }\n"

/***/ }),

/***/ "./src/app/home/toolbar-toolbar/toolbar-toolbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/home/toolbar-toolbar/toolbar-toolbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: ToolbarToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarToolbarComponent", function() { return ToolbarToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToolbarToolbarComponent = /** @class */ (function () {
    function ToolbarToolbarComponent(translate, router) {
        this.translate = translate;
        this.href = '';
    }
    ToolbarToolbarComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    ToolbarToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'toolbar-toolbar',
            template: __webpack_require__(/*! ./toolbar-toolbar.component.html */ "./src/app/home/toolbar-toolbar/toolbar-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-toolbar.component.scss */ "./src/app/home/toolbar-toolbar/toolbar-toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ToolbarToolbarComponent);
    return ToolbarToolbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/gite/gite.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/gite/gite.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n<mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar class=\"example-header-image\"></div>\r\n          <mat-card-title>Shiba Inu</mat-card-title>\r\n          <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n        <mat-card-content>\r\n          <p>\r\n            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n            bred for hunting.\r\n          </p>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-button>LIKE</button>\r\n          <button mat-button>SHARE</button>\r\n        </mat-card-actions>\r\n      </mat-card>"

/***/ }),

/***/ "./src/app/pages/gite/gite.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/gite/gite.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 400px;\n  margin-top: 15px;\n  margin-left: 15px; }\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover; }\n"

/***/ }),

/***/ "./src/app/pages/gite/gite.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/gite/gite.component.ts ***!
  \**********************************************/
/*! exports provided: GiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiteComponent", function() { return GiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GiteComponent = /** @class */ (function () {
    function GiteComponent() {
    }
    GiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gite',
            template: __webpack_require__(/*! ./gite.component.html */ "./src/app/pages/gite/gite.component.html"),
            styles: [__webpack_require__(/*! ./gite.component.scss */ "./src/app/pages/gite/gite.component.scss")]
        })
    ], GiteComponent);
    return GiteComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--component html goes here -->\r\n\r\n<div id=\"conteneur\" style=\"margin: 15%\">\r\n\r\n\r\n<div>\r\n    <title>Caractéristique du gite</title>\r\n    <section style=\"background-color: azure\">\r\n        6 personnes <br>\r\n        \r\n\r\n     Jardin <br>Terrasse <br>Aérothermie <br>Parking Privé <br>\r\n\r\n    Lit bébé et chaise haute \r\n    Bain(s) de Soleil<br>Barbecue<br>Salon de jardin\r\n\r\n    Accès WIFI <br>Draps fournis <br>Lits faits à l'arrivée\r\n\r\n\r\n    </section>\r\n\r\n</div>\r\n<div>\r\n    <title>Welcome on board</title>\r\n    <span> \r\n        Quelle belle rénovation pour cette maison de bourg bénéficiant maintenant d'une belle extension moderne ! \r\n        Gîte aménagé avec confort et soin par Claudine et Philippe. \r\n    </span>\r\n    <br>\r\n    <span>\r\n            En famille ou entre amis, en toute saison, vous rayonnerez en toute facilité sur Lannion à 6 km, Ville d'Art et d'Histoire, \r\n            sur Perros-Guirec et la Côte de Granit Rose à 14 km, sur la magnifique plage de Trestel à 14 km aussi et sur Tréguier, \r\n            Petite Cité de Caractère à 15 km. \r\n    </span>\r\n    <br>\r\n    <span>\r\n            Bref, de magnifiques ballades en peu de kilomètres. \r\n            Les amateurs de randonnée (GR34, GR34B,...) et de pêche (Le Léguer, Le Guindy, ...) se régaleront aussi.\r\n             Bienvenue à Rospez !\r\n    </span>\r\n</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section {\n  flex-grow: 1; }\n\n#home {\n  display: flex;\n  justify-content: space-around; }\n\narticle {\n  flex-grow: 2; }\n\n#conteneur {\n  display: flex;\n  justify-content: space-around; }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yolliero\Desktop\projet perso\gite-blés-blancs v2\gite-bles-blancs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map