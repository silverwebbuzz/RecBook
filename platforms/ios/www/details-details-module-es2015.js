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
/* harmony default export */ __webpack_exports__["default"] = (".blue-background {\n  width: 100%;\n  height: 75px;\n  background: var(--ion-color-primary);\n  z-index: 0;\n  bottom: 75%;\n  text-align: center;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n}\n\nion-content {\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n\nion-content .div_rec {\n  padding: 8px;\n  border: 2px solid #ccc;\n}\n\nion-content .div_rec .lbl_bsns_name {\n  display: block;\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n}\n\nion-content .div_rec .lbl_bsns_add {\n  display: block;\n  font-size: 16px;\n}\n\nion-content .div_rec .row_details .col_details {\n  padding: 0px;\n}\n\nion-content .div_rec .row_details .col_details .lbl_details {\n  display: block;\n  font-size: 16px;\n}\n\nion-content .div_rec .div_hr {\n  margin: 8px 0px;\n  border: 0.5px dotted #ccc;\n}\n\n.alignR {\n  text-align: right;\n}\n\n.alignC {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvUmVjYm9vay9zcmMvYXBwL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUdBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNISjs7QURPQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSko7O0FETUk7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUNKUjs7QURPUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRE9RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNMWjs7QURRWTtFQUNJLFlBQUE7QUNOaEI7O0FET2dCO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNMcEI7O0FEU1E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7QUNQWjs7QURZQTtFQUNJLGlCQUFBO0FDVEo7O0FEV0E7RUFDSSxrQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVlLWJhY2tncm91bmR7XG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIC8vdHJhbnNmb3JtOiByb3RhdGUoNjhkZWcpO1xuICAgIC8vYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgei1pbmRleDogMDtcbiAgICBib3R0b206IDc1JTtcbiAgICAvL2xlZnQ6IDE3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzBweDtcbiAgICAvL2JveC1zaGFkb3c6IDBweCA0cHggMTBweCAjYjFhZmFmO1xufVxuXG5pb24tY29udGVudHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG5cbiAgICAuZGl2X3JlY3tcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAvL2hlaWdodDogMTAwJTtcblxuICAgICAgICAubGJsX2JzbnNfbmFtZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9ic25zX2FkZHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5yb3dfZGV0YWlsc3tcbiAgICAgICAgICAgIC5jb2xfZGV0YWlsc3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgLmxibF9kZXRhaWxze1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGl2X2hye1xuICAgICAgICAgICAgbWFyZ2luOiA4cHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBkb3R0ZWQgI2NjYztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFsaWduUntcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5hbGlnbkN7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSIsIi5ibHVlLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3NXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHotaW5kZXg6IDA7XG4gIGJvdHRvbTogNzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfcmVjIHtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xufVxuaW9uLWNvbnRlbnQgLmRpdl9yZWMgLmxibF9ic25zX25hbWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmRpdl9yZWMgLmxibF9ic25zX2FkZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5pb24tY29udGVudCAuZGl2X3JlYyAucm93X2RldGFpbHMgLmNvbF9kZXRhaWxzIHtcbiAgcGFkZGluZzogMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9yZWMgLnJvd19kZXRhaWxzIC5jb2xfZGV0YWlscyAubGJsX2RldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLmRpdl9yZWMgLmRpdl9ociB7XG4gIG1hcmdpbjogOHB4IDBweDtcbiAgYm9yZGVyOiAwLjVweCBkb3R0ZWQgI2NjYztcbn1cblxuLmFsaWduUiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYWxpZ25DIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

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