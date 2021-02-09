(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>SignIn</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"page_signin\">\n\n  <div class=\"blue-background\">\n\n    <ion-label class=\"lbl_header\">SignIn</ion-label>\n\n    <div class=\"div-logo\">\n      <ion-img src=\"../../assets/icon/icon.png\" class=\"img_logo\" ></ion-img>\n    </div>\n\n  </div>\n\n  <div class=\"div-card\">\n\n    <ion-card>\n\n      <form [formGroup]=\"login_form\" autocomplete=\"off\">\n\n        <ion-item lines=\"none\" class=\"input-item add space\">\n          <ion-icon name=\"mail\"></ion-icon>\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Email / Mobile</ion-label> -->\n          <ion-input type=\"email\" formControlName=\"email\" placeholder=\"Email or phone number\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.email.hasError('required') && login_form.controls.email.touched\">\n          <p class=\"content add-error\">Please Enter Email / Phone!</p>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.email.hasError('incorrect') && login_form.controls.email.touched\">\n          <p class=\"content add-error\">Email Address Does Not Exists.</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-icon name=\"lock-closed\"></ion-icon>\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Password</ion-label>  -->\n          <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.password.hasError('required') && login_form.controls.password.touched\">\n          <p class=\"content add-error\">Please Enter Password!</p>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.password.hasError('incorrect') && login_form.controls.password.touched\">\n          <p class=\"content add-error\">Invalid password.</p>\n        </ion-item>\n\n      </form>\n\n    </ion-card>\n\n    <ion-label class=\"lbl-forgot\" (click)=\"forgot()\">Forgot Password ?</ion-label>\n\n    <ion-button expand=\"full\" size=\"large\" shape=\"round\" (click)=\"login()\">SIGN IN</ion-button>\n\n    <ion-label class=\"lbl_OR\">OR Connect With</ion-label>\n\n    <!-- <ion-row>\n    <ion-img src=\"../../assets/images/fb.png\" class=\"img_icon fb_img\"></ion-img>\n    <ion-img src=\"../../assets/images/google.png\" class=\"img_icon\"></ion-img> -->\n    <!-- <ion-col size=\"5\">\n      \n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"5\">\n      \n    </ion-col> -->\n    <!-- </ion-row> -->\n\n    <ion-row>\n      <ion-img src=\"../../assets/images/google.png\" (click)=\"signInWithGoogle()\" class=\"img_icon\"></ion-img>\n      <!-- <ion-label>Google</ion-label> -->\n    </ion-row>\n\n    <ion-label class=\"lbl-new\" (click)=\"signup()\">New User ?</ion-label>\n  </div>\n\n  <!-- <ion-button routerLink='/ocr'>OCR</ion-button> -->\n\n</ion-content>");

/***/ }),

/***/ "./src/app/signin/signin-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signin/signin-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SigninPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function() { return SigninPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");




const routes = [
    {
        path: '',
        component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    }
];
let SigninPageRoutingModule = class SigninPageRoutingModule {
};
SigninPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SigninPageRoutingModule);



/***/ }),

/***/ "./src/app/signin/signin.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.module.ts ***!
  \*****************************************/
/*! exports provided: SigninPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPageModule", function() { return SigninPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin-routing.module */ "./src/app/signin/signin-routing.module.ts");
/* harmony import */ var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin.page */ "./src/app/signin/signin.page.ts");







let SigninPageModule = class SigninPageModule {
};
SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"]
        ],
        declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
    })
], SigninPageModule);



/***/ }),

/***/ "./src/app/signin/signin.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signin/signin.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page_signin {\n  position: relative;\n}\n.page_signin .div-card {\n  background: var(--ion-color-secondary-contrast);\n  width: 100%;\n}\n.lbl_header {\n  color: var(--ion-color-secondary-contrast);\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 2.5;\n}\nion-card {\n  margin: 50px 28px 14px 28px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 0px var(--ion-color-secondary-contrast);\n}\n.img_icon {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  box-shadow: 0px 4px 10px #ccc;\n  padding: 4px;\n  position: relative;\n  margin: 0 18px;\n}\nion-row {\n  margin: 0 auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 18px;\n}\n.lbl-forgot {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: end;\n  font-size: 14px;\n  margin: 0px 25px 30px 0px;\n  margin-right: 25px;\n}\n.lbl-new {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  margin: 20px 0px;\n}\nion-button {\n  color: var(--ion-color-secondary-contrast);\n  width: 65%;\n  margin: 0 auto;\n  font-size: 16px;\n  border-radius: 50px;\n  box-shadow: 0px 8px 10px #ccc !important;\n}\n.lbl_OR {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: center;\n  font-size: 16px;\n  margin-top: 20px;\n}\n::-webkit-input-placeholder {\n  font-size: 12px;\n}\n::-moz-placeholder {\n  font-size: 12px;\n}\n::-ms-input-placeholder {\n  font-size: 12px;\n}\n::placeholder {\n  font-size: 12px;\n}\n.fb_img:after {\n  content: \"\";\n  width: 2px;\n  height: 28px;\n  background-color: var(--ion-color-medium);\n  top: 12px;\n  bottom: 0;\n  right: -20px;\n  font-size: 23px;\n  position: absolute;\n}\n.div-logo {\n  background: var(--ion-color-secondary-contrast);\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  box-shadow: 0px 0px 6px #fff;\n}\n.btn-bottom {\n  margin-top: 20%;\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvUmVjYm9vay9zcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURDSTtFQUVJLCtDQUFBO0VBR0EsV0FBQTtBQ0ZSO0FEUUE7RUFDSSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDTEo7QUR3QkE7RUFDSSwyQkFBQTtFQUVBLGtCQUFBO0VBQ0EsMkRBQUE7QUN0Qko7QUR3QkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDckJKO0FEd0JBO0VBQ0ksY0FBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ3JCSjtBRHVCQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ3BCSjtBRHlCQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDdEJKO0FEd0JBO0VBQ0ksMENBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FDckJKO0FEdUJBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNwQko7QUQ2Q0E7RUFDSSxlQUFBO0FDMUNKO0FEeUNBO0VBQ0ksZUFBQTtBQzFDSjtBRHlDQTtFQUNJLGVBQUE7QUMxQ0o7QUR5Q0E7RUFDSSxlQUFBO0FDMUNKO0FENENBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUN6Q0o7QUQ0Q0E7RUFDSSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7QUN6Q0o7QUQ2Q0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUMxQ0oiLCJmaWxlIjoic3JjL2FwcC9zaWduaW4vc2lnbmluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlX3NpZ25pbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gICAgLmRpdi1jYXJke1xuICAgICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICAgIC8vdG9wOiAzMCU7XG4gICAgICAgIC8vaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy9ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA3NXB4O1xuICAgICAgICAvL2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0MHB4O1xuICAgIH1cbn1cblxuLmxibF9oZWFkZXJ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyLjU7XG59XG5cblxuLy8gLmltZ19sb2dve1xuLy8gICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIC8vIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgIC8vIC8vbWFyZ2luLXRvcDogOCU7XG4vLyAgICAgLy8gaGVpZ2h0OiA3NXB4O1xuLy8gICAgIC8vIHdpZHRoOiA3NXB4O1xuLy8gfVxuXG4vLyBpb24tY2FyZHtcbi8vICAgICBtYXJnaW46IDMycHggMjhweCAxNHB4IDI4cHg7XG4vLyAgICAgcGFkZGluZzogNXB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICNjY2M7XG4vLyB9XG5cbmlvbi1jYXJke1xuICAgIG1hcmdpbjogNTBweCAyOHB4IDE0cHggMjhweDtcbiAgICAvL3BhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG59XG4uaW1nX2ljb257XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICNjY2M7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMThweDtcbn1cbi8vICNDRkVGRjBcbmlvbi1yb3d7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbn1cbi5sYmwtZm9yZ290e1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMHB4IDI1cHggMzBweCAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuLy8gLmRpdi1lbWFpbHtcbi8vICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcbi8vIH1cbi5sYmwtbmV3e1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbjogMjBweCAwcHg7XG59XG5pb24tYnV0dG9ue1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICB3aWR0aDogNjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAjY2NjICFpbXBvcnRhbnQ7XG59XG4ubGJsX09Se1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgXG59XG4vLyBpb24taXRlbXtcbi8vICAgICAvLy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuLy8gICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbi8vICAgICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XG4vLyAgICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggI2NjYztcbi8vICAgICBtYXJnaW46IDVweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuLy8gICAgIG1hcmdpbi10b3A6IDE0cHg7XG5cbi8vICAgICBpb24taWNvbntcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuLy8gICAgICAgICBmb250LXNpemU6IDI0cHg7XG4vLyAgICAgfVxuXG4vLyAgICAgaW9uLWlucHV0e1xuLy8gICAgICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuLy8gICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuLy8gICAgICAgICAvLy0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4vLyAgICAgICAgIC8vLS1jb2xvcjogI2ZmZjtcbi8vICAgICB9XG4vLyB9XG46OnBsYWNlaG9sZGVye1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5mYl9pbWc6YWZ0ZXJ7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMnB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICB0b3A6IDEycHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZGl2LWxvZ297XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAjZmZmO1xuICAgIC8vIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAjZmZmO1xufVxuXG4uYnRuLWJvdHRvbXtcbiAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xufSIsIi5wYWdlX3NpZ25pbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wYWdlX3NpZ25pbiAuZGl2LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sYmxfaGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiA1MHB4IDI4cHggMTRweCAyOHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xufVxuXG4uaW1nX2ljb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcbiAgcGFkZGluZzogNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAxOHB4O1xufVxuXG5pb24tcm93IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuXG4ubGJsLWZvcmdvdCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGVuZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDBweCAyNXB4IDMwcHggMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5sYmwtbmV3IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMjBweCAwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIHdpZHRoOiA2NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAjY2NjICFpbXBvcnRhbnQ7XG59XG5cbi5sYmxfT1Ige1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZiX2ltZzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIHRvcDogMTJweDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogLTIwcHg7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZGl2LWxvZ28ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggI2ZmZjtcbn1cblxuLmJ0bi1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/signin/signin.page.ts":
/*!***************************************!*\
  !*** ./src/app/signin/signin.page.ts ***!
  \***************************************/
/*! exports provided: SigninPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninPage", function() { return SigninPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/common_service */ "./src/app/global/common_service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");








let SigninPage = class SigninPage {
    constructor(statusBar, formBuilder, api, router, authService) {
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.authService = authService;
        this.login_fb();
    }
    // login with google api
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID).then((userData) => {
            var body = {
                UserName: userData.name,
                Email: userData.email,
                Authentication_Provider: userData.provider,
                Password: "null",
                ProfileUrl: userData.photoUrl,
                authToken: userData.authToken
            };
            this.api.signup(body).subscribe(val => {
                console.log("token", val);
                this.login_process = false;
                this.api.dismissLoading();
                if (val) {
                    this.api.presentLoading();
                    this.login_process = true;
                    localStorage.setItem('id', val['result']['ID']);
                    localStorage.setItem('token', val['result']['token']);
                    this.api.presentToastWithOptions(val['message']);
                    this.router.navigate(['/home']);
                }
                else {
                    this.api.presentToastWithOptions(val['message']);
                }
            }, err => {
                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        });
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#989aa2');
    }
    ngOnInit() {
    }
    login_fb() {
        this.login_form = this.formBuilder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    login() {
        for (let v in this.login_form.controls) {
            this.login_form.controls[v].markAsTouched();
        }
        if (this.login_form.valid) {
            this.api.presentLoading();
            this.login_process = true;
            var body = {
                Email: this.login_form.value.email,
                Password: this.login_form.value.password,
            };
            this.api.signin(body).subscribe(val => {
                this.login_process = false;
                this.api.dismissLoading();
                if (val) {
                    localStorage.setItem('id', val['result']['ID']);
                    localStorage.setItem('token', val['result']['token']);
                    this.api.presentToastWithOptions(val['message']);
                    this.router.navigate(['/home']);
                }
                else {
                    this.api.presentToastWithOptions(val['message']);
                }
            }, err => {
                this.login_process = false;
                this.api.dismissLoading();
                this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
            });
        }
    }
    signup() {
        this.router.navigate(['/signup']);
    }
    forgot() {
        this.router.navigate(['/forgot']);
    }
};
SigninPage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signin.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signin.page.scss */ "./src/app/signin/signin.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
], SigninPage);



/***/ })

}]);
//# sourceMappingURL=signin-signin-module-es2015.js.map