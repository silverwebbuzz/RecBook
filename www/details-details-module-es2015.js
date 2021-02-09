(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon size=\"large\" name=\"arrow-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"md\" color=\"light\">\n      Receipt Details\n    </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"shareActionSheet()\">\n          <ion-icon size=\"large\" name=\"share-social\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <div class=\"blue-background\"></div> -->\n\n  <div class=\"div_rec\">\n\n    <ion-label class=\"lbl_bsns_name\">New Freezeland</ion-label>\n\n    <div class=\"div_hr\"></div>\n\n    <ion-label class=\"lbl_bsns_add\">Showroom no. 6, Shapath Hexa, Opp. Kargil Petrol pump, Sola road, S.G Highway, Ahmedabad, Gujarat, 380060</ion-label>\n\n    <div class=\"div_hr\"></div>\n\n    <ion-row class=\"row_details\">\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">GSTIN :</ion-label>\n      </ion-col>\n      <ion-col size=\"9\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">24AAAFQ7220L1ZB</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row_details\">\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Tel :</ion-label>\n      </ion-col>\n      <ion-col size=\"9\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">7574809616</ion-label>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row class=\"row_details\">\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Invoice :</ion-label>\n      </ion-col>\n      <ion-col size=\"9\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">11510335467</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row_details\">\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Bill no. :</ion-label>\n      </ion-col>\n      <ion-col size=\"9\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">26668</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"div_hr\"></div>\n    \n    <ion-row class=\"row_details\">\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Date :</ion-label>\n      </ion-col>\n      <ion-col size=\"9\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">\n          03/03/2020\n        </ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row_details\">\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Name :</ion-label>\n      </ion-col>\n      <ion-col size=\"9\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Chandrakant</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row_details\">\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Mobile :</ion-label>\n      </ion-col>\n      <ion-col size=\"9\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">9033366926</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"div_hr\"></div>\n    \n    <ion-row class=\"row_details\">\n      <ion-col size=\"4\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Item</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Qty</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Rate</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Amount</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"div_hr\"></div>\n\n    <ion-row class=\"row_details\">\n      <ion-col size=\"4\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Clb Nfl Special</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">1</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">129.0</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">129.0</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row_details\">\n      <ion-col size=\"4\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Clb Tandoori Paneer</ion-label>\n      </ion-col>\n      <ion-col size=\"2\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">2</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">139.0</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">278.0</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"div_hr\"></div>\n\n    <ion-row class=\"row_details alignR\">\n      <ion-col size=\"5\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Total Qty: 3</ion-label>\n      </ion-col>\n      <ion-col size=\"4\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Sub Total</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">278.0</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row_details alignR\">\n      <ion-col size=\"5\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">CGST 2.5</ion-label>\n      </ion-col>\n      <ion-col size=\"4\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">2.5%</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">6.95</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row_details alignR\">\n      <ion-col size=\"5\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">SGST 2.5</ion-label>\n      </ion-col>\n      <ion-col size=\"4\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">2.5%</ion-label>\n      </ion-col>\n      <ion-col size=\"3\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">6.95</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"div_hr\"></div>\n\n    <ion-row class=\"row_details alignR\">\n      <ion-col size=\"8\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">Grand Total</ion-label>\n      </ion-col>\n      <ion-col size=\"4\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">291.9</ion-label>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"div_hr\"></div>\n\n    <ion-row class=\"row_details alignC\">\n      <ion-col size=\"12\" class=\"col_details\">\n        <ion-label class=\"lbl_details\">!! Thank You Visit Again !!</ion-label>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/details/details-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/details/details-routing.module.ts ***!
  \***************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/details/details.page.scss":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blue-background {\n  width: 100%;\n  height: 75px;\n  background: var(--ion-color-primary);\n  z-index: 0;\n  bottom: 75%;\n  text-align: center;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n}\n\nion-content {\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n\nion-content .div_rec {\n  padding: 8px;\n  border: 2px solid #ccc;\n}\n\nion-content .div_rec .lbl_bsns_name {\n  display: block;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n}\n\nion-content .div_rec .lbl_bsns_add {\n  display: block;\n  font-size: 16px;\n}\n\nion-content .div_rec .row_details .col_details {\n  padding: 0px;\n}\n\nion-content .div_rec .row_details .col_details .lbl_details {\n  display: block;\n  font-size: 16px;\n}\n\nion-content .div_rec .div_hr {\n  margin: 8px 0px;\n  border: 0.5px dotted #ccc;\n}\n\n.alignR {\n  text-align: right;\n}\n\n.alignC {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9SZWNib29rL3NyYy9hcHAvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBR0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0hKOztBRE9BO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURNSTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQ0pSOztBRE9RO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTFo7O0FET1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0xaOztBRFFZO0VBQ0ksWUFBQTtBQ05oQjs7QURPZ0I7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0xwQjs7QURTUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtBQ1BaOztBRFlBO0VBQ0ksaUJBQUE7QUNUSjs7QURXQTtFQUNJLGtCQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWUtYmFja2dyb3VuZHtcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgLy90cmFuc2Zvcm06IHJvdGF0ZSg2OGRlZyk7XG4gICAgLy9ib3JkZXI6IHNvbGlkIDFweCAjZjFmMWYxO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJvdHRvbTogNzUlO1xuICAgIC8vbGVmdDogMTclO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3MHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4O1xuICAgIC8vYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICNiMWFmYWY7XG59XG5cbmlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMTZweDtcblxuICAgIC5kaXZfcmVje1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgIC8vaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIC5sYmxfYnNuc19uYW1le1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAubGJsX2JzbnNfYWRke1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJvd19kZXRhaWxze1xuICAgICAgICAgICAgLmNvbF9kZXRhaWxze1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgICAubGJsX2RldGFpbHN7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kaXZfaHJ7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDAuNXB4IGRvdHRlZCAjY2NjO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWxpZ25Se1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmFsaWduQ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59IiwiLmJsdWUtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgei1pbmRleDogMDtcbiAgYm90dG9tOiA3NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9yZWMge1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG59XG5pb24tY29udGVudCAuZGl2X3JlYyAubGJsX2JzbnNfbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGl2X3JlYyAubGJsX2JzbnNfYWRkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfcmVjIC5yb3dfZGV0YWlscyAuY29sX2RldGFpbHMge1xuICBwYWRkaW5nOiAwcHg7XG59XG5pb24tY29udGVudCAuZGl2X3JlYyAucm93X2RldGFpbHMgLmNvbF9kZXRhaWxzIC5sYmxfZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCAuZGl2X3JlYyAuZGl2X2hyIHtcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBib3JkZXI6IDAuNXB4IGRvdHRlZCAjY2NjO1xufVxuXG4uYWxpZ25SIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hbGlnbkMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/details/details.page.ts":
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");




let DetailsPage = class DetailsPage {
    constructor(navCtrl, actionSheetCtrl, statusBar) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.statusBar = statusBar;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#989aa2');
    }
    back() {
        this.navCtrl.pop();
    }
    shareActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                mode: 'md',
                header: 'Share',
                buttons: [{
                        text: 'PDF',
                        icon: 'document-text',
                        handler: () => {
                            console.log('PDF clicked');
                        }
                    }, {
                        text: 'CSV',
                        icon: 'document',
                        handler: () => {
                            console.log('CSV clicked');
                        }
                    },
                    {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
};
DetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] }
];
DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.page.scss */ "./src/app/details/details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]])
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=details-details-module-es2015.js.map