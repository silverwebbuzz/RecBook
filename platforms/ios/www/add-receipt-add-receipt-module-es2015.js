(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-receipt-add-receipt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-receipt/add-receipt.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-receipt/add-receipt.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon size=\"large\" name=\"arrow-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"md\" color=\"light\">\n      Add Receipt\n    </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon size=\"large\" name=\"checkmark-sharp\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <div class=\"blue-background\"></div> -->\n\n  <ion-label class=\"lbl_stick\">Business</ion-label>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <!-- <ion-icon name=\"person\"></ion-icon> -->\n    <ion-input type=\"text\" placeholder=\"Name\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Address\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"GSIT\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Phone number\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Invoice\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Bill number\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-label class=\"lbl_stick lbl_stick_spc\">Customer</ion-label>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Name\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Phone number\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <div class=\"div-product\">\n\n    <ng-container>\n    <ion-card class=\"card-main\">\n      <div>\n      <div>\n          <ion-row class=\"row-card\">\n            <ion-col size=\"6\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Product</ion-label>\n              <ion-input readonly class=\"col-value add-input no-border\" value=\"ButterScotch 1 KG\"></ion-input>\n            </ion-col>\n            <ion-col size=\"4\" class=\"col-lbl\">\n              <ion-label class=\"col-title\">Qty</ion-label>\n              <ion-input autofocus type=\"number\" class=\"col-value add-input border\" value=\"1\"></ion-input>\n            </ion-col>\n            <ion-col size=\"2\" class=\"col-edit\">\n              <ion-button size=\"small\" fill=\"clear\" class=\"dlt\" (click)=\"removeItem()\">\n                <ion-icon name=\"trash\" class=\"btn-icon\"></ion-icon>\n              </ion-button>\n            </ion-col>\n        </ion-row>\n              <ion-row class=\"row-card\">\n                <ion-col size=\"6\" class=\"col-lbl\">\n                  <ion-label class=\"col-title\">Rate</ion-label>\n                  <ion-input readonly class=\"col-value add-input no-border\" value=\"650.0\"></ion-input>\n                </ion-col>\n                <ion-col size=\"4\" class=\"col-lbl\">\n                  <ion-label class=\"col-title\">Amount</ion-label>\n                  <ion-input readonly class=\"col-value add-input no-border\" value=\"650.0\"></ion-input>\n                </ion-col>\n                <ion-col size=\"2\">\n                </ion-col>\n              </ion-row>\n            </div>\n            </div>\n      </ion-card>\n    </ng-container>\n\n    <ion-button class=\"btn_add\" size=\"large\" expand=\"full\" (click)=\"addItem()\">\n      <ion-icon name=\"add-circle-outline\"></ion-icon>\n      Add Item\n    </ion-button>\n\n  </div>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Tax\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Amount\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/add-receipt/add-receipt-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/add-receipt/add-receipt-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddReceiptPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReceiptPageRoutingModule", function() { return AddReceiptPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_receipt_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-receipt.page */ "./src/app/add-receipt/add-receipt.page.ts");




const routes = [
    {
        path: '',
        component: _add_receipt_page__WEBPACK_IMPORTED_MODULE_3__["AddReceiptPage"]
    }
];
let AddReceiptPageRoutingModule = class AddReceiptPageRoutingModule {
};
AddReceiptPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddReceiptPageRoutingModule);



/***/ }),

/***/ "./src/app/add-receipt/add-receipt.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-receipt/add-receipt.module.ts ***!
  \***************************************************/
/*! exports provided: AddReceiptPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReceiptPageModule", function() { return AddReceiptPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_receipt_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-receipt-routing.module */ "./src/app/add-receipt/add-receipt-routing.module.ts");
/* harmony import */ var _add_receipt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-receipt.page */ "./src/app/add-receipt/add-receipt.page.ts");







let AddReceiptPageModule = class AddReceiptPageModule {
};
AddReceiptPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_receipt_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddReceiptPageRoutingModule"]
        ],
        declarations: [_add_receipt_page__WEBPACK_IMPORTED_MODULE_6__["AddReceiptPage"]]
    })
], AddReceiptPageModule);



/***/ }),

/***/ "./src/app/add-receipt/add-receipt.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-receipt/add-receipt.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 16px;\n}\n\n.blue-background {\n  width: 100%;\n  height: 100px;\n  background: var(--ion-color-primary);\n  z-index: 0;\n  bottom: 75%;\n  text-align: center;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n}\n\n.lbl_stick {\n  display: block;\n  background: #f1f1f1;\n  padding: 4px 16px;\n  color: var(--ion-color-primary);\n  font-size: 16px;\n  font-family: MuliSemiBold;\n}\n\n.lbl_stick_spc {\n  margin-top: 16px;\n}\n\n.btn_add {\n  margin: 16px 16px 0px 16px;\n  color: #fff;\n}\n\n.input-item {\n  --inner-padding-end: 0px;\n  --padding-start: 4px;\n  padding: 0px 8px 0px 8px;\n  box-shadow: 0px 1px 6px #ccc;\n  margin: 16px 16px 0px 16px;\n}\n\n.input-item ion-icon {\n  color: var(--ion-color-medium);\n  font-size: 24px;\n}\n\n.input-item .input-box {\n  margin-left: 8px;\n}\n\n.input-item ion-textarea {\n  margin-left: 8px;\n}\n\n.div-product {\n  padding: 15px 0px;\n}\n\n.div-product .card-main {\n  padding: 8px;\n  margin: 16px;\n  box-shadow: 0px 0px 5px #ccc;\n  border-radius: 0px;\n  background: #fff;\n}\n\n.div-product .card-main .row-card {\n  padding-top: 1px;\n}\n\n.div-product .card-main .row-card .col-lbl {\n  padding: 0px 0px 5px 0px;\n}\n\n.div-product .card-main .row-card .col-lbl .col-title {\n  padding: 0px 8px;\n  font-size: 12px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  color: #999;\n  line-height: 1.2;\n}\n\n.div-product .card-main .row-card .col-lbl .col-value {\n  padding: 0px 8px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.3;\n  color: #4e4d4d;\n  display: inline-block;\n}\n\n.div-product .card-main .dlt {\n  margin: 0px 5px;\n  --padding-start: 4px;\n  --padding-end: 4px;\n  color: var(--ion-color-danger-shade);\n  --color-activated: var(--ion-color-danger);\n  border-radius: 50%;\n  border: 1px solid;\n}\n\n.div-product .add-input {\n  height: 24px;\n  width: 75%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n}\n\n.div-product .border {\n  border-bottom: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvUmVjYm9vay9zcmMvYXBwL2FkZC1yZWNlaXB0L2FkZC1yZWNlaXB0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWRkLXJlY2VpcHQvYWRkLXJlY2VpcHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUVJLFdBQUE7RUFDQSxhQUFBO0VBR0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0hKOztBRE9BO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7QUNKSjs7QURPQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtBQ0pKOztBRE9BO0VBRUksd0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtBQ0xKOztBRFNJO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDUFI7O0FEVUk7RUFFSSxnQkFBQTtBQ1RSOztBRGNJO0VBRUksZ0JBQUE7QUNiUjs7QURtQkE7RUFFSSxpQkFBQTtBQ2pCSjs7QURtQkE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2pCSjs7QURtQkk7RUFDSSxnQkFBQTtBQ2pCUjs7QURtQlE7RUFDSSx3QkFBQTtBQ2pCWjs7QURtQlk7RUFDSSxnQkFBQTtFQUVBLGVBQUE7RUFHQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDcEJoQjs7QUR1Qlk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDckJoQjs7QUQwQkk7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0FDekJSOztBRDhCSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQzVCUjs7QURpQ0k7RUFDSSw2QkFBQTtBQy9CUiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZWNlaXB0L2FkZC1yZWNlaXB0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5ibHVlLWJhY2tncm91bmR7XG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvL3RyYW5zZm9ybTogcm90YXRlKDY4ZGVnKTtcbiAgICAvL2JvcmRlcjogc29saWQgMXB4ICNmMWYxZjE7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHotaW5kZXg6IDA7XG4gICAgYm90dG9tOiA3NSU7XG4gICAgLy9sZWZ0OiAxNyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwcHg7XG4gICAgLy9ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2IxYWZhZjtcbn1cblxuLmxibF9zdGlja3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgIHBhZGRpbmc6IDRweCAxNnB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiBNdWxpU2VtaUJvbGQ7XG59XG5cbi5sYmxfc3RpY2tfc3Bje1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5idG5fYWRke1xuICAgIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uaW5wdXQtaXRlbXtcbiAgICAvLy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDhweDtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAjY2NjO1xuICAgIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xuICAgIC8vYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vbWFyZ2luLXRvcDogMTRweDtcblxuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuaW5wdXQtYm94e1xuICAgICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAvLy0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4gICAgICAgIC8vLS1jb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIC8vLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcbiAgICAgICAgLy8tLWNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLmRpdi1wcm9kdWN0e1xuICAgIC8vbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcblxuLmNhcmQtbWFpbntcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgbWFyZ2luOiAxNnB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAucm93LWNhcmR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XG5cbiAgICAgICAgLmNvbC1sYmx7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XG4gICAgXG4gICAgICAgICAgICAuY29sLXRpdGxle1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICAgICAgICAgICAgLy9mb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAuY29sLXZhbHVle1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0ZTRkNGQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRsdHtcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgLy92ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xuICAgIH1cbiAgICBcbiAgICB9XG5cbiAgICAuYWRkLWlucHV0e1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgLy9tYXJnaW46IDBweCA4cHg7XG4gICAgfVxuXG4gICAgLmJvcmRlcntcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgfVxuXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4uYmx1ZS1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgei1pbmRleDogMDtcbiAgYm90dG9tOiA3NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwcHg7XG59XG5cbi5sYmxfc3RpY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgcGFkZGluZzogNHB4IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IE11bGlTZW1pQm9sZDtcbn1cblxuLmxibF9zdGlja19zcGMge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uYnRuX2FkZCB7XG4gIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmlucHV0LWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4ICNjY2M7XG4gIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xufVxuLmlucHV0LWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5pbnB1dC1pdGVtIC5pbnB1dC1ib3gge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmlucHV0LWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmRpdi1wcm9kdWN0IHtcbiAgcGFkZGluZzogMTVweCAwcHg7XG59XG4uZGl2LXByb2R1Y3QgLmNhcmQtbWFpbiB7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiAxNnB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZGl2LXByb2R1Y3QgLmNhcmQtbWFpbiAucm93LWNhcmQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xufVxuLmRpdi1wcm9kdWN0IC5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtbGJsIHtcbiAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xufVxuLmRpdi1wcm9kdWN0IC5jYXJkLW1haW4gLnJvdy1jYXJkIC5jb2wtbGJsIC5jb2wtdGl0bGUge1xuICBwYWRkaW5nOiAwcHggOHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM5OTk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG4uZGl2LXByb2R1Y3QgLmNhcmQtbWFpbiAucm93LWNhcmQgLmNvbC1sYmwgLmNvbC12YWx1ZSB7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjNGU0ZDRkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZGl2LXByb2R1Y3QgLmNhcmQtbWFpbiAuZGx0IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cbi5kaXYtcHJvZHVjdCAuYWRkLWlucHV0IHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogNzUlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZGl2LXByb2R1Y3QgLmJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/add-receipt/add-receipt.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-receipt/add-receipt.page.ts ***!
  \*************************************************/
/*! exports provided: AddReceiptPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddReceiptPage", function() { return AddReceiptPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddReceiptPage = class AddReceiptPage {
    constructor(navCtrl, statusBar, router) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.router = router;
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
    addItem() {
        this.router.navigate(['/add-item']);
    }
};
AddReceiptPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AddReceiptPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-receipt',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-receipt.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-receipt/add-receipt.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-receipt.page.scss */ "./src/app/add-receipt/add-receipt.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AddReceiptPage);



/***/ })

}]);
//# sourceMappingURL=add-receipt-add-receipt-module-es2015.js.map