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
/* harmony default export */ __webpack_exports__["default"] = (".blue-background {\n  width: 100%;\n  height: 100px;\n  background: var(--ion-color-primary);\n  z-index: 0;\n  bottom: 75%;\n  text-align: center;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n}\n.blue-background .div-logo {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  padding-top: 45px;\n}\n.blue-background .div-logo .img_logo {\n  height: 100px;\n  background: var(--ion-color-primary);\n  border-radius: 50px;\n  border: 5px solid #fff;\n  box-shadow: 0px 0px 6px #ccc;\n}\n.blue-background .div-logo .img_logo ion-icon {\n  font-size: 65px;\n  height: 100%;\n}\n.blue-background .div-logo .img_logo .lbl_dash {\n  font-size: 14px;\n  color: #666;\n  font-family: \"MuliSemiBold\";\n}\n.row_rec {\n  margin-top: 8px;\n  box-shadow: 0px 2px 10px #ccc;\n  margin-right: 8px;\n  margin-left: 8px;\n}\n.row_rec .col_rec .img_rec {\n  height: 100%;\n  width: 100%;\n}\n.row_rec .col_rec .lbl_rec {\n  display: block;\n  font-size: 12px;\n}\n.row_rec .col_rec .lbl_rec_name {\n  display: block;\n  font-size: 14px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.spc {\n  padding: 0px;\n}\n.row-card .col-card .card-dash {\n  margin: 0px;\n  border-radius: 10px;\n  height: 100px;\n  background: var(--ion-color-secondary-contrast);\n  box-shadow: 0px 4px 8px #ccc;\n}\n.row-card .col-card .card-dash .div-icon {\n  height: 60px;\n  margin: 0 auto;\n  margin-top: 8px;\n  text-align: center;\n}\n.row-card .col-card .card-dash .div-icon .dash-icon {\n  height: 60px;\n  width: 60px;\n  color: var(--ion-color-primary);\n}\n.row-card .col-card .card-dash .lbl-only {\n  display: block;\n  font-weight: bold;\n  line-height: 5;\n  font-size: 20px;\n  text-align: center;\n}\n.row-card .col-card .card-dash .lbl-name {\n  display: block;\n  line-height: 1.5;\n  font-size: 18px;\n  text-align: center;\n  font-family: \"MuliSemiBold\";\n}\n.top_list {\n  margin-top: 80px;\n}\n.top-spc {\n  margin-top: -45px;\n}\n.side-spc {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n.bottom-spc {\n  padding-bottom: 5px;\n}\nion-item {\n  --padding-start: 6px;\n  --inner-padding-end: 0px;\n  border: 1px solid var(--ion-color-primary);\n  margin: 8px 8px 0px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvUmVjYm9vay9zcmMvYXBwL3JlY2VpcHRzL3JlY2VpcHRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVjZWlwdHMvcmVjZWlwdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtFQUNBLGFBQUE7RUFHQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDSEo7QURNSTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNMUjtBRFFRO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDTlY7QURTVTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDUFo7QURVVTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNSWjtBRGFBO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEYVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ1haO0FEYVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ1haO0FEYVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1haO0FEZUE7RUFDSSxZQUFBO0FDWko7QURpQlE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBRUEsK0NBQUE7RUFFQSw0QkFBQTtBQ2hCWjtBRGtCWTtFQUVJLFlBQUE7RUFHQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDbkJoQjtBRHNCZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUVBLCtCQUFBO0FDckJwQjtBRHdCWTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN0QmhCO0FEMEJZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBRUEsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUN6QmhCO0FEK0JBO0VBQ0ksZ0JBQUE7QUM1Qko7QUQ4QkE7RUFDSSxpQkFBQTtBQzNCSjtBRDZCQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUMxQko7QUQ0QkE7RUFDSSxtQkFBQTtBQ3pCSjtBRDRCQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHVCQUFBO0FDekJKIiwiZmlsZSI6InNyYy9hcHAvcmVjZWlwdHMvcmVjZWlwdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWUtYmFja2dyb3VuZHtcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8vdHJhbnNmb3JtOiByb3RhdGUoNjhkZWcpO1xuICAgIC8vYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgei1pbmRleDogMDtcbiAgICBib3R0b206IDc1JTtcbiAgICAvL2xlZnQ6IDE3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzBweDtcbiAgICAvL2JveC1zaGFkb3c6IDBweCA0cHggMTBweCAjYjFhZmFmO1xuXG4gICAgLmRpdi1sb2dve1xuICAgICAgICAvL2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogNDVweDtcbiAgICAgICAgLy9wYWRkaW5nOiA1cHg7XG4gICAgXG4gICAgICAgIC5pbWdfbG9nb3tcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggI2NjYztcbiAgICAgICAgICAvL2JveC1zaGFkb3c6IDBweCA0cHggMTBweCAjY2NjO1xuICAgIFxuICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgZm9udC1zaXplOiA2NXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAubGJsX2Rhc2h7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGlTZW1pQm9sZFwiO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59XG4ucm93X3JlY3tcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4ICNjY2M7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAuY29sX3JlY3tcbiAgICAgICAgXG4gICAgICAgIC5pbWdfcmVje1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmxibF9yZWN7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAubGJsX3JlY19uYW1le1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB9XG4gICAgfVxufVxuLnNwY3tcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4ucm93LWNhcmR7XG4gICAgICAgIFxuICAgIC5jb2wtY2FyZHtcbiAgICAgICAgLmNhcmQtZGFzaHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAvL2NvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICAgICAgICAvL2JveC1zaGFkb3c6IDBweCA0cHggOHB4IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggOHB4ICNjY2M7XG4gIFxuICAgICAgICAgICAgLmRpdi1pY29ue1xuICAgICAgICAgICAgICAgIC8vYmFja2dyb3VuZDogI2MxY2RmZjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLy9saW5lLWhlaWdodDogNS4yO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5kYXNoLWljb257XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgIC8vZm9udC1zaXplOiA3MHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYmwtb25seXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIC8vY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgICAgLy9wYWRkaW5nOiAycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGJsLW5hbWV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdNdWxpU2VtaUJvbGQnO1xuICAgICAgICAgICAgICAgIC8vcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICB9XG59XG4udG9wX2xpc3R7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbn1cbi50b3Atc3Bje1xuICAgIG1hcmdpbi10b3A6IC00NXB4O1xufVxuLnNpZGUtc3Bje1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbi5ib3R0b20tc3Bje1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlvbi1pdGVte1xuICAgIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgbWFyZ2luOiA4cHggOHB4IDBweCA4cHg7XG59IiwiLmJsdWUtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHotaW5kZXg6IDA7XG4gIGJvdHRvbTogNzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4O1xufVxuLmJsdWUtYmFja2dyb3VuZCAuZGl2LWxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbn1cbi5ibHVlLWJhY2tncm91bmQgLmRpdi1sb2dvIC5pbWdfbG9nbyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggI2NjYztcbn1cbi5ibHVlLWJhY2tncm91bmQgLmRpdi1sb2dvIC5pbWdfbG9nbyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJsdWUtYmFja2dyb3VuZCAuZGl2LWxvZ28gLmltZ19sb2dvIC5sYmxfZGFzaCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlTZW1pQm9sZFwiO1xufVxuXG4ucm93X3JlYyB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4ICNjY2M7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLnJvd19yZWMgLmNvbF9yZWMgLmltZ19yZWMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvd19yZWMgLmNvbF9yZWMgLmxibF9yZWMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnJvd19yZWMgLmNvbF9yZWMgLmxibF9yZWNfbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc3BjIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4ucm93LWNhcmQgLmNvbC1jYXJkIC5jYXJkLWRhc2gge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4ICNjY2M7XG59XG4ucm93LWNhcmQgLmNvbC1jYXJkIC5jYXJkLWRhc2ggLmRpdi1pY29uIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucm93LWNhcmQgLmNvbC1jYXJkIC5jYXJkLWRhc2ggLmRpdi1pY29uIC5kYXNoLWljb24ge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnJvdy1jYXJkIC5jb2wtY2FyZCAuY2FyZC1kYXNoIC5sYmwtb25seSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJvdy1jYXJkIC5jb2wtY2FyZCAuY2FyZC1kYXNoIC5sYmwtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVNlbWlCb2xkXCI7XG59XG5cbi50b3BfbGlzdCB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi50b3Atc3BjIHtcbiAgbWFyZ2luLXRvcDogLTQ1cHg7XG59XG5cbi5zaWRlLXNwYyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5ib3R0b20tc3BjIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDZweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogOHB4IDhweCAwcHggOHB4O1xufSJdfQ== */");

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