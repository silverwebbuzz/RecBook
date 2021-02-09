(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"page_signin\">\n\n  <div class=\"blue-background\">\n\n    <ion-label class=\"lbl_header\">Forgot Password</ion-label>\n\n    <div class=\"div-logo\">\n    <ion-img src=\"../../assets/icon/icon.png\" class=\"img_logo\"></ion-img>\n    </div>\n\n  </div>\n\n  <div class=\"div-card\">\n\n    <ion-card>\n\n      <ion-label class=\"lbl_head\">Enter your registered email address.</ion-label>\n\n  <form [formGroup]=\"forgot_form\" autocomplete=\"off\">\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"mail\"></ion-icon>\n      <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Email / Mobile</ion-label> -->\n      <ion-input type=\"text\"  formControlName=\"email\" placeholder=\"Email address\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"forgot_form.controls.email.hasError('required') && forgot_form.controls.email.touched\">\n      <p class=\"content add-error\">Please Enter Email address!</p>\n    </ion-item>\n\n  </form>\n\n</ion-card>\n\n\n\n<div class=\"btn-bottom\">\n<ion-button expand=\"full\" size=\"large\" shape=\"round\" (click)=\"forgot()\">SUBMIT</ion-button>\n<ion-label class=\"lbl-new\" (click)=\"back()\">Back</ion-label>\n</div>\n\n</div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/forgot/forgot-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forgot/forgot-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ForgotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function() { return ForgotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.page */ "./src/app/forgot/forgot.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ "./src/app/forgot/forgot.module.ts":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.module.ts ***!
  \*****************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/forgot/forgot-routing.module.ts");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/forgot/forgot.page.ts");







let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"]
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })
], ForgotPageModule);



/***/ }),

/***/ "./src/app/forgot/forgot.page.scss":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page_signin {\n  position: relative;\n}\n.page_signin .div-card {\n  background: var(--ion-color-secondary-contrast);\n  width: 100%;\n}\n.lbl_header {\n  color: var(--ion-color-secondary-contrast);\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 2.5;\n}\nion-card {\n  margin: 50px 28px 14px 28px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 0px var(--ion-color-medium);\n}\n.img_icon {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  box-shadow: 0px 8px 10px #ccc;\n  padding: 4px;\n  position: relative;\n  margin: 0 18px;\n}\nion-row {\n  margin: 0 auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 18px;\n}\n.lbl-forgot {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: end;\n  font-size: 14px;\n  margin: 0px 25px 30px 0px;\n  margin-right: 25px;\n}\n.div-email {\n  box-shadow: 0px 4px 10px var(--ion-color-medium);\n}\n.lbl-new {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  margin-top: 20px;\n}\nion-button {\n  color: var(--ion-color-secondary-contrast);\n  width: 65%;\n  margin: 0 auto;\n  font-size: 16px;\n  border-radius: 50px;\n  box-shadow: 0px 8px 10px #ccc !important;\n}\n.lbl_OR {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: center;\n  font-size: 16px;\n  margin-top: 20px;\n}\n::-webkit-input-placeholder {\n  font-size: 12px;\n}\n::-moz-placeholder {\n  font-size: 12px;\n}\n::-ms-input-placeholder {\n  font-size: 12px;\n}\n::placeholder {\n  font-size: 12px;\n}\n.fb_img:after {\n  content: \"\";\n  width: 2px;\n  height: 28px;\n  background-color: var(--ion-color-medium);\n  top: 12px;\n  bottom: 0;\n  right: -20px;\n  font-size: 23px;\n  position: absolute;\n}\n.div-logo {\n  background: var(--ion-color-secondary-contrast);\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  box-shadow: 0px 0px 6px #fff;\n}\n.btn-bottom {\n  margin-top: 20%;\n  margin-bottom: 10%;\n}\n.lbl_head {\n  font-size: 14px;\n  font-weight: bold;\n  display: block;\n  text-align: center;\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvUmVjYm9vay9zcmMvYXBwL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic3JjL2FwcC9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUVJLCtDQUFBO0VBR0EsV0FBQTtBQ0ZSO0FEUUE7RUFDSSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTEo7QUR3QkE7RUFDSSwyQkFBQTtFQUVBLGtCQUFBO0VBQ0EsK0NBQUE7QUN0Qko7QUR3QkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDckJKO0FEd0JBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ3JCSjtBRHVCQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3BCSjtBRHNCQTtFQUNJLGdEQUFBO0FDbkJKO0FEcUJBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNsQko7QURvQkE7RUFDSSwwQ0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUNqQko7QURtQkE7RUFDSSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2hCSjtBRHlDQTtFQUNJLGVBQUE7QUN0Q0o7QURxQ0E7RUFDSSxlQUFBO0FDdENKO0FEcUNBO0VBQ0ksZUFBQTtBQ3RDSjtBRHFDQTtFQUNJLGVBQUE7QUN0Q0o7QUR3Q0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3JDSjtBRHdDQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ3JDSjtBRHlDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ3RDSjtBRHlDQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDdENKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZV9zaWduaW57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIC5kaXYtY2FyZHtcbiAgICAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgICAgICAvL3RvcDogMzAlO1xuICAgICAgICAvL2hlaWdodDogNzAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy9ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3NXB4O1xuICAgICAgICAvL2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xuICAgIH1cbn1cblxuLmxibF9oZWFkZXJ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XG59XG5cblxuLy8gLmltZ19sb2dve1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgIC8vbWFyZ2luLXRvcDogOCU7XG4vLyAgICAgaGVpZ2h0OiA3NXB4O1xuLy8gICAgIHdpZHRoOiA3NXB4O1xuLy8gfVxuXG4vLyBpb24tY2FyZHtcbi8vICAgICBtYXJnaW46IDMycHggMjhweCAxNHB4IDI4cHg7XG4vLyAgICAgcGFkZGluZzogNXB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICNjY2M7XG4vLyB9XG5cbmlvbi1jYXJke1xuICAgIG1hcmdpbjogNTBweCAyOHB4IDE0cHggMjhweDtcbiAgICAvL3BhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG4uaW1nX2ljb257XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4ICNjY2M7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMThweDtcbn1cblxuaW9uLXJvd3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLmxibC1mb3Jnb3R7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwcHggMjVweCAzMHB4IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4uZGl2LWVtYWlse1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5sYmwtbmV3e1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5pb24tYnV0dG9ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAjY2NjICFpbXBvcnRhbnQ7XG59XG4ubGJsX09Se1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgXG59XG4vLyBpb24taXRlbXtcbi8vICAgICAvLy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbi8vICAgICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggI2NjYztcbi8vICAgICBtYXJnaW46IDVweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDE0JTtcblxuLy8gICAgIGlvbi1pY29ue1xuLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbi8vICAgICB9XG5cbi8vICAgICBpb24taW5wdXR7XG4vLyAgICAgICAgIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4vLyAgICAgICAgIC8vLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcbi8vICAgICAgICAgLy8tLWNvbG9yOiAjZmZmO1xuLy8gICAgIH1cbi8vIH1cbjo6cGxhY2Vob2xkZXJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZiX2ltZzphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIHRvcDogMTJweDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5kaXYtbG9nb3tcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNmZmY7XG4gICAgLy9ib3gtc2hhZG93OiAwcHggMnB4IDEwcHggI2ZmZjtcbn1cblxuLmJ0bi1ib3R0b217XG4gICAgbWFyZ2luLXRvcDogMjAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmxibF9oZWFke1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufSIsIi5wYWdlX3NpZ25pbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlX3NpZ25pbiAuZGl2LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYmxfaGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiA1MHB4IDI4cHggMTRweCAyOHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4uaW1nX2ljb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggI2NjYztcbiAgcGFkZGluZzogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAxOHB4O1xufVxuXG5pb24tcm93IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuXG4ubGJsLWZvcmdvdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweCAyNXB4IDMwcHggMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5kaXYtZW1haWwge1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbi5sYmwtbmV3IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAjY2NjICFpbXBvcnRhbnQ7XG59XG5cbi5sYmxfT1Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZiX2ltZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRvcDogMTJweDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogLTIwcHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZGl2LWxvZ28ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggI2ZmZjtcbn1cblxuLmJ0bi1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmxibF9oZWFkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/forgot/forgot.page.ts":
/*!***************************************!*\
  !*** ./src/app/forgot/forgot.page.ts ***!
  \***************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/common_service */ "./src/app/global/common_service.ts");







let ForgotPage = class ForgotPage {
    constructor(statusBar, formBuilder, router, navCtrl, api) {
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.navCtrl = navCtrl;
        this.api = api;
        this.forgot_fb();
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#989aa2');
    }
    ngOnInit() {
    }
    forgot_fb() {
        this.forgot_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    forgot() {
        for (let v in this.forgot_form.controls) {
            this.forgot_form.controls[v].markAsTouched();
        }
        if (this.forgot_form.valid) {
            this.api.presentLoading();
            this.forgot_process = true;
            var body = {
                Email: this.forgot_form.value.email,
            };
            this.api.forgot(body).subscribe(val => {
                this.forgot_process = false;
                this.api.dismissLoading();
                if (val) {
                    this.api.presentToastWithOptions(val['message']);
                    this.router.navigate(['/signin']);
                }
                else {
                    this.api.presentToastWithOptions(val['message']);
                }
            }, err => {
                this.forgot_process = false;
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
    back() {
        this.navCtrl.pop();
    }
};
ForgotPage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot.page.scss */ "./src/app/forgot/forgot.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], ForgotPage);



/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module-es2015.js.map