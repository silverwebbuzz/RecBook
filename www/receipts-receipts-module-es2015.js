(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["receipts-receipts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/receipts/receipts.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/receipts/receipts.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ng-container *ngIf=\"!isserachOpen\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon size=\"large\" name=\"arrow-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"md\" color=\"light\">\n      Receipts\n    </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"OpenSearch()\">\n          <ion-icon size=\"large\" name=\"search\" color=\"light\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"shareActionSheet()\">\n          <ion-icon size=\"large\" name=\"share-social\" color=\"light\"></ion-icon>\n        </ion-button>\n        <ion-button (click)=\"filterActionSheet()\">\n          <ion-icon size=\"large\" name=\"filter\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ng-container>\n    <ng-container *ngIf=\"isserachOpen\">\n      <ion-searchbar mode=\"md\" placeholder=\"Search...\" showCancelButton=\"always\" animated=\"true\" (ionCancel)=\"OpenSearch()\"></ion-searchbar>\n    </ng-container>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"blue-background\">\n\n    <div class=\"div-logo\" (click)=\"addReceipt()\">\n      <div class=\"img_logo\">\n        <ion-icon name=\"add\" color=\"light\"></ion-icon>\n        <ion-label class=\"lbl_dash\">Add Receipt</ion-label>\n      </div>\n    </div>\n\n  </div>\n\n  <ion-row class=\"row_rec top_list\">\n    <ion-col size=\"2\" class=\"col_rec spc\" (click)=\"preview()\">\n      <img src=\"../../assets/images/placeholders.png\" class=\"img_rec\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_rec\" (click)=\"details()\">\n      <ion-label class=\"lbl_rec\">Merchant</ion-label>\n      <ion-label class=\"lbl_rec_name\">TGB CAFE N Bakery</ion-label>\n    </ion-col>\n    <ion-col size=\"4\" class=\"col_rec\" (click)=\"details()\">\n      <ion-label class=\"lbl_rec\">Date</ion-label>\n      <ion-label class=\"lbl_rec_name\">24-Jan-2020</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row_rec\">\n    <ion-col size=\"2\" class=\"col_rec spc\">\n      <img src=\"../../assets/images/placeholders.png\" class=\"img_rec\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_rec\">\n      <ion-label class=\"lbl_rec\">Merchant</ion-label>\n      <ion-label class=\"lbl_rec_name\">TGB CAFE N Bakery</ion-label>\n    </ion-col>\n    <ion-col size=\"4\" class=\"col_rec\">\n      <ion-label class=\"lbl_rec\">Date</ion-label>\n      <ion-label class=\"lbl_rec_name\">24-Jan-2020</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row_rec\">\n    <ion-col size=\"2\" class=\"col_rec spc\">\n      <img src=\"../../assets/images/placeholders.png\" class=\"img_rec\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_rec\">\n      <ion-label class=\"lbl_rec\">Merchant</ion-label>\n      <ion-label class=\"lbl_rec_name\">TGB CAFE N Bakery</ion-label>\n    </ion-col>\n    <ion-col size=\"4\" class=\"col_rec\">\n      <ion-label class=\"lbl_rec\">Date</ion-label>\n      <ion-label class=\"lbl_rec_name\">24-Jan-2020</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row_rec\">\n    <ion-col size=\"2\" class=\"col_rec spc\">\n      <img src=\"../../assets/images/placeholders.png\" class=\"img_rec\"/>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col_rec\">\n      <ion-label class=\"lbl_rec\">Merchant</ion-label>\n      <ion-label class=\"lbl_rec_name\">TGB CAFE N Bakery</ion-label>\n    </ion-col>\n    <ion-col size=\"4\" class=\"col_rec\">\n      <ion-label class=\"lbl_rec\">Date</ion-label>\n      <ion-label class=\"lbl_rec_name\">24-Jan-2020</ion-label>\n    </ion-col>\n  </ion-row>\n\n  <!-- <ion-item lines=\"none\" class=\"top-spc\" (click)=\"addReceipt()\">\n    <ion-icon name=\"add\" slot=\"start\" color=\"primary\"></ion-icon>\n    <ion-label>Add Receipt</ion-label>\n    <ion-icon name=\"arrow-forward\" slot=\"end\" color=\"primary\"></ion-icon>\n  </ion-item> -->\n\n  <!-- <ion-item lines=\"none\" class=\"top_list\" (click)=\"details()\">\n    <ion-icon name=\"document-text\" slot=\"start\" color=\"primary\"></ion-icon>\n    <ion-label>Recipient name</ion-label>\n    <ion-icon name=\"arrow-forward\" slot=\"end\" color=\"primary\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-icon name=\"document-text\" slot=\"start\" color=\"primary\"></ion-icon>\n    <ion-label>Recipient name</ion-label>\n    <ion-icon name=\"arrow-forward\" slot=\"end\" color=\"primary\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-icon name=\"document-text\" slot=\"start\" color=\"primary\"></ion-icon>\n    <ion-label>Recipient name</ion-label>\n    <ion-icon name=\"arrow-forward\" slot=\"end\" color=\"primary\"></ion-icon>\n  </ion-item>\n\n  <ion-item lines=\"none\">\n    <ion-icon name=\"document-text\" slot=\"start\" color=\"primary\"></ion-icon>\n    <ion-label>Recipient name</ion-label>\n    <ion-icon name=\"arrow-forward\" slot=\"end\" color=\"primary\"></ion-icon>\n  </ion-item> -->\n\n  <!-- <ion-row class=\"row-card side-spc top-spc\">\n    <ion-col size=\"4\" class=\"col-card\">\n      <ion-card class=\"card-dash\" (click)=\"addReceipt()\">\n        <div class=\"div-icon\">\n          <ion-icon name=\"add\" class=\"dash-icon\"></ion-icon>\n        </div>\n        <ion-label class=\"lbl-name\">Add</ion-label>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"4\" class=\"col-card\">\n      <ion-card class=\"card-dash\" (click)=\"details()\">\n          <div class=\"div-icon\">\n              <ion-icon name=\"document-text\" class=\"dash-icon\"></ion-icon>\n            </div>\n        <ion-label class=\"lbl-name\">Name</ion-label>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"4\" class=\"col-card\">\n      <ion-card class=\"card-dash box2\">\n          <div class=\"div-icon\">\n              <ion-icon name=\"document-text\" class=\"dash-icon\"></ion-icon>\n            </div>\n        <ion-label class=\"lbl-name\">Name</ion-label>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row-card side-spc bottom-spc\">\n    <ion-col size=\"4\" class=\"col-card\">\n      <ion-card class=\"card-dash\">\n        <div class=\"div-icon\">\n          <ion-icon name=\"document-text\" class=\"dash-icon\"></ion-icon>\n        </div>\n        <ion-label class=\"lbl-name\">Name</ion-label>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"4\" class=\"col-card\">\n      <ion-card class=\"card-dash\" (click)=\"details()\">\n          <div class=\"div-icon\">\n              <ion-icon name=\"document-text\" class=\"dash-icon\"></ion-icon>\n            </div>\n        <ion-label class=\"lbl-name\">Name</ion-label>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"4\" class=\"col-card\">\n      <ion-card class=\"card-dash box2\">\n          <div class=\"div-icon\">\n              <ion-icon name=\"document-text\" class=\"dash-icon\"></ion-icon>\n            </div>\n        <ion-label class=\"lbl-name\">Name</ion-label>\n      </ion-card>\n    </ion-col>\n  </ion-row> -->\n\n</ion-content>");

/***/ }),

/***/ "./src/app/receipts/receipts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/receipts/receipts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ReceiptsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPageRoutingModule", function() { return ReceiptsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _receipts_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receipts.page */ "./src/app/receipts/receipts.page.ts");




const routes = [
    {
        path: '',
        component: _receipts_page__WEBPACK_IMPORTED_MODULE_3__["ReceiptsPage"]
    }
];
let ReceiptsPageRoutingModule = class ReceiptsPageRoutingModule {
};
ReceiptsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReceiptsPageRoutingModule);



/***/ }),

/***/ "./src/app/receipts/receipts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/receipts/receipts.module.ts ***!
  \*********************************************/
/*! exports provided: ReceiptsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPageModule", function() { return ReceiptsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _receipts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./receipts-routing.module */ "./src/app/receipts/receipts-routing.module.ts");
/* harmony import */ var _receipts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./receipts.page */ "./src/app/receipts/receipts.page.ts");







let ReceiptsPageModule = class ReceiptsPageModule {
};
ReceiptsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _receipts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReceiptsPageRoutingModule"]
        ],
        declarations: [_receipts_page__WEBPACK_IMPORTED_MODULE_6__["ReceiptsPage"]]
    })
], ReceiptsPageModule);



/***/ }),

/***/ "./src/app/receipts/receipts.page.scss":
/*!*********************************************!*\
  !*** ./src/app/receipts/receipts.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blue-background {\n  width: 100%;\n  height: 100px;\n  background: var(--ion-color-primary);\n  z-index: 0;\n  bottom: 75%;\n  text-align: center;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n}\n.blue-background .div-logo {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  padding-top: 45px;\n}\n.blue-background .div-logo .img_logo {\n  height: 100px;\n  background: var(--ion-color-primary);\n  border-radius: 50px;\n  border: 5px solid #fff;\n  box-shadow: 0px 0px 6px #ccc;\n}\n.blue-background .div-logo .img_logo ion-icon {\n  font-size: 65px;\n  height: 100%;\n}\n.blue-background .div-logo .img_logo .lbl_dash {\n  font-size: 14px;\n  color: #666;\n  font-family: \"MuliSemiBold\";\n}\n.row_rec {\n  margin-top: 8px;\n  box-shadow: 0px 2px 10px #ccc;\n  margin-right: 8px;\n  margin-left: 8px;\n}\n.row_rec .col_rec .img_rec {\n  height: 100%;\n  width: 100%;\n}\n.row_rec .col_rec .lbl_rec {\n  display: block;\n  font-size: 12px;\n}\n.row_rec .col_rec .lbl_rec_name {\n  display: block;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.spc {\n  padding: 0px;\n}\n.row-card .col-card .card-dash {\n  margin: 0px;\n  border-radius: 10px;\n  height: 100px;\n  background: var(--ion-color-secondary-contrast);\n  box-shadow: 0px 4px 8px #ccc;\n}\n.row-card .col-card .card-dash .div-icon {\n  height: 60px;\n  margin: 0 auto;\n  margin-top: 8px;\n  text-align: center;\n}\n.row-card .col-card .card-dash .div-icon .dash-icon {\n  height: 60px;\n  width: 60px;\n  color: var(--ion-color-primary);\n}\n.row-card .col-card .card-dash .lbl-only {\n  display: block;\n  font-weight: bold;\n  line-height: 5;\n  font-size: 20px;\n  text-align: center;\n}\n.row-card .col-card .card-dash .lbl-name {\n  display: block;\n  line-height: 1.5;\n  font-size: 18px;\n  text-align: center;\n  font-family: \"MuliSemiBold\";\n}\n.top_list {\n  margin-top: 80px;\n}\n.top-spc {\n  margin-top: -45px;\n}\n.side-spc {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.bottom-spc {\n  padding-bottom: 5px;\n}\nion-item {\n  --padding-start: 6px;\n  --inner-padding-end: 0px;\n  border: 1px solid var(--ion-color-primary);\n  margin: 8px 8px 0px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9SZWNib29rL3NyYy9hcHAvcmVjZWlwdHMvcmVjZWlwdHMucGFnZS5zY3NzIiwic3JjL2FwcC9yZWNlaXB0cy9yZWNlaXB0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUdBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNISjtBRE1JO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0xSO0FEUVE7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNOVjtBRFNVO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNQWjtBRFVVO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ1JaO0FEYUE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDVko7QURhUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWFo7QURhUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDWFo7QURhUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDWFo7QURlQTtFQUNJLFlBQUE7QUNaSjtBRGlCUTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFFQSwrQ0FBQTtFQUVBLDRCQUFBO0FDaEJaO0FEa0JZO0VBRUksWUFBQTtFQUdBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNuQmhCO0FEc0JnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBRUEsK0JBQUE7QUNyQnBCO0FEd0JZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3RCaEI7QUQwQlk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ3pCaEI7QUQrQkE7RUFDSSxnQkFBQTtBQzVCSjtBRDhCQTtFQUNJLGlCQUFBO0FDM0JKO0FENkJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQzFCSjtBRDRCQTtFQUNJLG1CQUFBO0FDekJKO0FENEJBO0VBQ0ksb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EsdUJBQUE7QUN6QkoiLCJmaWxlIjoic3JjL2FwcC9yZWNlaXB0cy9yZWNlaXB0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZS1iYWNrZ3JvdW5ke1xuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgLy90cmFuc2Zvcm06IHJvdGF0ZSg2OGRlZyk7XG4gICAgLy9ib3JkZXI6IHNvbGlkIDFweCAjZjFmMWYxO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJvdHRvbTogNzUlO1xuICAgIC8vbGVmdDogMTclO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3MHB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4O1xuICAgIC8vYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICNiMWFmYWY7XG5cbiAgICAuZGl2LWxvZ297XG4gICAgICAgIC8vYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgICAgICAvL3BhZGRpbmc6IDVweDtcbiAgICBcbiAgICAgICAgLmltZ19sb2dve1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAjY2NjO1xuICAgICAgICAgIC8vYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICNjY2M7XG4gICAgXG4gICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDY1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuICAgIFxuICAgICAgICAgIC5sYmxfZGFzaHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaVNlbWlCb2xkXCI7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cbi5yb3dfcmVje1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggI2NjYztcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIC5jb2xfcmVje1xuICAgICAgICBcbiAgICAgICAgLmltZ19yZWN7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAubGJsX3JlY3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYmxfcmVjX25hbWV7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIH1cbiAgICB9XG59XG4uc3Bje1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbi5yb3ctY2FyZHtcbiAgICAgICAgXG4gICAgLmNvbC1jYXJke1xuICAgICAgICAuY2FyZC1kYXNoe1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIC8vY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgICAgIC8vYm94LXNoYWRvdzogMHB4IDRweCA4cHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggI2NjYztcbiAgXG4gICAgICAgICAgICAuZGl2LWljb257XG4gICAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kOiAjYzFjZGZmO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvL2xpbmUtaGVpZ2h0OiA1LjI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmRhc2gtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgLy9mb250LXNpemU6IDcwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxibC1vbmx5e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy9jb2xvcjogIzAwMDtcbiAgICAgICAgICAgICAgICAvL3BhZGRpbmc6IDJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYmwtbmFtZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgICAgIC8vZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ011bGlTZW1pQm9sZCc7XG4gICAgICAgICAgICAgICAgLy9wYWRkaW5nOiAycHg7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfVxuICAgIH1cbn1cbi50b3BfbGlzdHtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuLnRvcC1zcGN7XG4gICAgbWFyZ2luLXRvcDogLTQ1cHg7XG59XG4uc2lkZS1zcGN7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xufVxuLmJvdHRvbS1zcGN7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaW9uLWl0ZW17XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA2cHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDhweCA4cHggMHB4IDhweDtcbn0iLCIuYmx1ZS1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgei1pbmRleDogMDtcbiAgYm90dG9tOiA3NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwcHg7XG59XG4uYmx1ZS1iYWNrZ3JvdW5kIC5kaXYtbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xufVxuLmJsdWUtYmFja2dyb3VuZCAuZGl2LWxvZ28gLmltZ19sb2dvIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAjY2NjO1xufVxuLmJsdWUtYmFja2dyb3VuZCAuZGl2LWxvZ28gLmltZ19sb2dvIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYmx1ZS1iYWNrZ3JvdW5kIC5kaXYtbG9nbyAuaW1nX2xvZ28gLmxibF9kYXNoIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVNlbWlCb2xkXCI7XG59XG5cbi5yb3dfcmVjIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggI2NjYztcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ucm93X3JlYyAuY29sX3JlYyAuaW1nX3JlYyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucm93X3JlYyAuY29sX3JlYyAubGJsX3JlYyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ucm93X3JlYyAuY29sX3JlYyAubGJsX3JlY19uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zcGMge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5yb3ctY2FyZCAuY29sLWNhcmQgLmNhcmQtZGFzaCB7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggI2NjYztcbn1cbi5yb3ctY2FyZCAuY29sLWNhcmQgLmNhcmQtZGFzaCAuZGl2LWljb24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3ctY2FyZCAuY29sLWNhcmQgLmNhcmQtZGFzaCAuZGl2LWljb24gLmRhc2gtaWNvbiB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ucm93LWNhcmQgLmNvbC1jYXJkIC5jYXJkLWRhc2ggLmxibC1vbmx5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucm93LWNhcmQgLmNvbC1jYXJkIC5jYXJkLWRhc2ggLmxibC1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJNdWxpU2VtaUJvbGRcIjtcbn1cblxuLnRvcF9saXN0IHtcbiAgbWFyZ2luLXRvcDogODBweDtcbn1cblxuLnRvcC1zcGMge1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbn1cblxuLnNpZGUtc3BjIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLmJvdHRvbS1zcGMge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiA4cHggOHB4IDBweCA4cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/receipts/receipts.page.ts":
/*!*******************************************!*\
  !*** ./src/app/receipts/receipts.page.ts ***!
  \*******************************************/
/*! exports provided: ReceiptsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiptsPage", function() { return ReceiptsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");





let ReceiptsPage = class ReceiptsPage {
    constructor(actionSheetCtrl, router, navCtrl, statusBar) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.isserachOpen = false;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#989aa2');
    }
    OpenSearch() {
        this.isserachOpen = !this.isserachOpen;
    }
    details() {
        this.router.navigate(['/details']);
    }
    addReceipt() {
        this.router.navigate(['/add-receipt']);
    }
    preview() {
        this.router.navigate(['/preview']);
    }
    back() {
        this.navCtrl.pop();
    }
    filterActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                mode: 'md',
                header: 'Filter',
                buttons: [{
                        text: 'Scan',
                        icon: 'scan',
                        handler: () => {
                            console.log('Scan clicked');
                        }
                    }, {
                        text: 'Email',
                        icon: 'mail',
                        handler: () => {
                            console.log('Email clicked');
                        }
                    },
                    {
                        text: 'All',
                        icon: 'receipt',
                        handler: () => {
                            console.log('All clicked');
                        }
                    }, {
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
ReceiptsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] }
];
ReceiptsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-receipts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./receipts.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/receipts/receipts.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./receipts.page.scss */ "./src/app/receipts/receipts.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])
], ReceiptsPage);



/***/ })

}]);
//# sourceMappingURL=receipts-receipts-module-es2015.js.map