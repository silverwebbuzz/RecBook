(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signin-signin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSigninSigninPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>SignIn</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content class=\"page_signin\">\n\n  <div class=\"blue-background\">\n\n    <ion-label class=\"lbl_header\">SignIn</ion-label>\n\n    <div class=\"div-logo\">\n      <ion-img src=\"../../assets/icon/icon.png\" class=\"img_logo\" ></ion-img>\n    </div>\n\n  </div>\n\n  <div class=\"div-card\">\n\n    <ion-card>\n\n      <form [formGroup]=\"login_form\" autocomplete=\"off\">\n\n        <ion-item lines=\"none\" class=\"input-item add space\">\n          <ion-icon name=\"mail\"></ion-icon>\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Email / Mobile</ion-label> -->\n          <ion-input type=\"email\" formControlName=\"email\" placeholder=\"Email or phone number\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.email.hasError('required') && login_form.controls.email.touched\">\n          <p class=\"content add-error\">Please Enter Email / Phone!</p>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.email.hasError('incorrect') && login_form.controls.email.touched\">\n          <p class=\"content add-error\">Email Address Does Not Exists.</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-icon name=\"lock-closed\"></ion-icon>\n          <!-- <ion-label position=\"stacked\" class=\"input-lbl\">Password</ion-label>  -->\n          <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.password.hasError('required') && login_form.controls.password.touched\">\n          <p class=\"content add-error\">Please Enter Password!</p>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"login_form.controls.password.hasError('incorrect') && login_form.controls.password.touched\">\n          <p class=\"content add-error\">Invalid password.</p>\n        </ion-item>\n\n      </form>\n\n    </ion-card>\n\n    <ion-label class=\"lbl-forgot\" (click)=\"forgot()\">Forgot Password ?</ion-label>\n\n    <ion-button expand=\"full\" size=\"large\" shape=\"round\" (click)=\"login()\">SIGN IN</ion-button>\n\n    <ion-label class=\"lbl_OR\">OR Connect With</ion-label>\n\n    <!-- <ion-row>\n    <ion-img src=\"../../assets/images/fb.png\" class=\"img_icon fb_img\"></ion-img>\n    <ion-img src=\"../../assets/images/google.png\" class=\"img_icon\"></ion-img> -->\n    <!-- <ion-col size=\"5\">\n      \n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n    <ion-col size=\"5\">\n      \n    </ion-col> -->\n    <!-- </ion-row> -->\n\n    <ion-row>\n      <ion-img src=\"../../assets/images/google.png\" (click)=\"signInWithGoogle()\" class=\"img_icon\"></ion-img>\n      <!-- <ion-label>Google</ion-label> -->\n    </ion-row>\n\n    <ion-label class=\"lbl-new\" (click)=\"signup()\">New User ?</ion-label>\n  </div>\n\n  <ion-button routerLink='/home'>OCR</ion-button>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/signin/signin-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signin/signin-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SigninPageRoutingModule */

  /***/
  function srcAppSigninSigninRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function () {
      return SigninPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin.page */
    "./src/app/signin/signin.page.ts");

    const routes = [{
      path: '',
      component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    }];
    let SigninPageRoutingModule = class SigninPageRoutingModule {};
    SigninPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SigninPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signin/signin.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signin/signin.module.ts ***!
    \*****************************************/

  /*! exports provided: SigninPageModule */

  /***/
  function srcAppSigninSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPageModule", function () {
      return SigninPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signin-routing.module */
    "./src/app/signin/signin-routing.module.ts");
    /* harmony import */


    var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signin.page */
    "./src/app/signin/signin.page.ts");

    let SigninPageModule = class SigninPageModule {};
    SigninPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"]],
      declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
    })], SigninPageModule);
    /***/
  },

  /***/
  "./src/app/signin/signin.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signin/signin.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSigninSigninPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page_signin {\n  position: relative;\n}\n.page_signin .div-card {\n  background: var(--ion-color-secondary-contrast);\n  width: 100%;\n}\n.lbl_header {\n  color: var(--ion-color-secondary-contrast);\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 2.5;\n}\nion-card {\n  margin: 50px 28px 14px 28px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 0px var(--ion-color-secondary-contrast);\n}\n.img_icon {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  box-shadow: 0px 4px 10px #ccc;\n  padding: 4px;\n  position: relative;\n  margin: 0 18px;\n}\nion-row {\n  margin: 0 auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 18px;\n}\n.lbl-forgot {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: end;\n  font-size: 14px;\n  margin: 0px 25px 30px 0px;\n  margin-right: 25px;\n}\n.lbl-new {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  margin: 20px 0px;\n}\nion-button {\n  color: var(--ion-color-secondary-contrast);\n  width: 65%;\n  margin: 0 auto;\n  font-size: 16px;\n  border-radius: 50px;\n  box-shadow: 0px 8px 10px #ccc !important;\n}\n.lbl_OR {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: center;\n  font-size: 16px;\n  margin-top: 20px;\n}\n::-webkit-input-placeholder {\n  font-size: 12px;\n}\n::-moz-placeholder {\n  font-size: 12px;\n}\n::-ms-input-placeholder {\n  font-size: 12px;\n}\n::placeholder {\n  font-size: 12px;\n}\n.fb_img:after {\n  content: \"\";\n  width: 2px;\n  height: 28px;\n  background-color: var(--ion-color-medium);\n  top: 12px;\n  bottom: 0;\n  right: -20px;\n  font-size: 23px;\n  position: absolute;\n}\n.div-logo {\n  background: var(--ion-color-secondary-contrast);\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  box-shadow: 0px 0px 6px #fff;\n}\n.btn-bottom {\n  margin-top: 20%;\n  margin-bottom: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9SZWNib29rL3NyYy9hcHAvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBRENJO0VBRUksK0NBQUE7RUFHQSxXQUFBO0FDRlI7QURRQTtFQUNJLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRHdCQTtFQUNJLDJCQUFBO0VBRUEsa0JBQUE7RUFDQSwyREFBQTtBQ3RCSjtBRHdCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNyQko7QUR3QkE7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDckJKO0FEdUJBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDcEJKO0FEeUJBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUN0Qko7QUR3QkE7RUFDSSwwQ0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUNyQko7QUR1QkE7RUFDSSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BCSjtBRDZDQTtFQUNJLGVBQUE7QUMxQ0o7QUR5Q0E7RUFDSSxlQUFBO0FDMUNKO0FEeUNBO0VBQ0ksZUFBQTtBQzFDSjtBRHlDQTtFQUNJLGVBQUE7QUMxQ0o7QUQ0Q0E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3pDSjtBRDRDQTtFQUNJLCtDQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ3pDSjtBRDZDQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQzFDSiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Vfc2lnbmlue1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICAuZGl2LWNhcmR7XG4gICAgICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgLy90b3A6IDMwJTtcbiAgICAgICAgLy9oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvL2JvcmRlci10b3AtbGVmdC1yYWRpdXM6IDc1cHg7XG4gICAgICAgIC8vYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQwcHg7XG4gICAgfVxufVxuXG4ubGJsX2hlYWRlcntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcbn1cblxuXG4vLyAuaW1nX2xvZ297XG4vLyAgICAgLy8gZGlzcGxheTogYmxvY2s7XG4vLyAgICAgLy8gbWFyZ2luOiAwIGF1dG87XG4vLyAgICAgLy8gLy9tYXJnaW4tdG9wOiA4JTtcbi8vICAgICAvLyBoZWlnaHQ6IDc1cHg7XG4vLyAgICAgLy8gd2lkdGg6IDc1cHg7XG4vLyB9XG5cbi8vIGlvbi1jYXJke1xuLy8gICAgIG1hcmdpbjogMzJweCAyOHB4IDE0cHggMjhweDtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcbi8vIH1cblxuaW9uLWNhcmR7XG4gICAgbWFyZ2luOiA1MHB4IDI4cHggMTRweCAyOHB4O1xuICAgIC8vcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbn1cbi5pbWdfaWNvbntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAxOHB4O1xufVxuLy8gI0NGRUZGMFxuaW9uLXJvd3tcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxOHB4O1xufVxuLmxibC1mb3Jnb3R7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAwcHggMjVweCAzMHB4IDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4vLyAuZGl2LWVtYWlse1xuLy8gICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjY2NjO1xuLy8gfVxuLmxibC1uZXd7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbn1cbmlvbi1idXR0b257XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIHdpZHRoOiA2NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4ICNjY2MgIWltcG9ydGFudDtcbn1cbi5sYmxfT1J7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBcbn1cbi8vIGlvbi1pdGVte1xuLy8gICAgIC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4vLyAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuLy8gICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDhweDtcbi8vICAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAjY2NjO1xuLy8gICAgIG1hcmdpbjogNXB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMTRweDtcblxuLy8gICAgIGlvbi1pY29ue1xuLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbi8vICAgICB9XG5cbi8vICAgICBpb24taW5wdXR7XG4vLyAgICAgICAgIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4vLyAgICAgICAgIC8vLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcbi8vICAgICAgICAgLy8tLWNvbG9yOiAjZmZmO1xuLy8gICAgIH1cbi8vIH1cbjo6cGxhY2Vob2xkZXJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZiX2ltZzphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIHRvcDogMTJweDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5kaXYtbG9nb3tcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNmZmY7XG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDJweCAxMHB4ICNmZmY7XG59XG5cbi5idG4tYm90dG9te1xuICAgIG1hcmdpbi10b3A6IDIwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59IiwiLnBhZ2Vfc2lnbmluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhZ2Vfc2lnbmluIC5kaXYtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxibF9oZWFkZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbn1cblxuaW9uLWNhcmQge1xuICBtYXJnaW46IDUwcHggMjhweCAxNHB4IDI4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG59XG5cbi5pbWdfaWNvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjY2NjO1xuICBwYWRkaW5nOiA0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIDE4cHg7XG59XG5cbmlvbi1yb3cge1xuICBtYXJnaW46IDAgYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG5cbi5sYmwtZm9yZ290IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDI1cHggMzBweCAwcHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmxibC1uZXcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAyMHB4IDBweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4ICNjY2MgIWltcG9ydGFudDtcbn1cblxuLmxibF9PUiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZmJfaW1nOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgdG9wOiAxMnB4O1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5kaXYtbG9nbyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAjZmZmO1xufVxuXG4uYnRuLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDIwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/signin/signin.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signin/signin.page.ts ***!
    \***************************************/

  /*! exports provided: SigninPage */

  /***/
  function srcAppSigninSigninPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPage", function () {
      return SigninPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _global_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angularx-social-login */
    "./node_modules/angularx-social-login/angularx-social-login.js");

    let SigninPage = class SigninPage {
      constructor(statusBar, formBuilder, api, router, authService) {
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.authService = authService;
        this.login_fb();
      } // login with google api


      signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID).then(userData => {
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
            } else {
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

      ngOnInit() {}

      login_fb() {
        this.login_form = this.formBuilder.group({
          email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
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
            Password: this.login_form.value.password
          };
          this.api.signin(body).subscribe(val => {
            this.login_process = false;
            this.api.dismissLoading();

            if (val) {
              localStorage.setItem('id', val['result']['ID']);
              localStorage.setItem('token', val['result']['token']);
              this.api.presentToastWithOptions(val['message']);
              this.router.navigate(['/home']);
            } else {
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

    SigninPage.ctorParameters = () => [{
      type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }, {
      type: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
    }];

    SigninPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signin/signin.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signin.page.scss */
      "./src/app/signin/signin.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _global_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])], SigninPage);
    /***/
  }
}]);
//# sourceMappingURL=signin-signin-module-es5.js.map