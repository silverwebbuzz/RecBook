(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"page_signin\">\n\n  <div class=\"blue-background\">\n\n    <ion-label class=\"lbl_header\">SignUp</ion-label>\n\n    <div class=\"div-logo\">\n      <ion-img src=\"../../assets/icon/icon.png\" class=\"img_logo\"></ion-img>\n    </div>\n\n  </div>\n\n  <div class=\"div-card\">\n\n    <ion-card>\n\n      <form [formGroup]=\"reg_form\" autocomplete=\"off\">\n\n        <ion-item lines=\"none\" class=\"input-item add space\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-input type=\"text\" formControlName=\"username\" placeholder=\"Username\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"reg_form.controls.username.hasError('required') && reg_form.controls.username.touched\">\n          <p class=\"content add-error\">Please Enter Username!</p>\n        </ion-item>\n\n        <!-- <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-input type=\"text\" placeholder=\"Last Name\" class=\"input-box\"></ion-input>\n    </ion-item> -->\n\n        <ion-item lines=\"none\" class=\"input-item add space\">\n          <ion-icon name=\"mail\"></ion-icon>\n          <ion-input type=\"email\" formControlName=\"email\" placeholder=\"Email address\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"reg_form.controls.email.hasError('required') && reg_form.controls.email.touched\">\n          <p class=\"content\">Please Enter Email address!</p>\n        </ion-item>\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"reg_form.controls.email.hasError('pattern') && reg_form.controls.email.touched\">\n          <p class=\"content\">Please Enter Valid Email address!</p>\n        </ion-item>\n        <ion-item no-padding lines=\"none\" class=\"validator-error\"\n          *ngIf=\"reg_form.controls.email.hasError('incorrect') && reg_form.controls.email.touched\">\n          <p class=\"content\">Email address is already taken!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add space\">\n          <ion-icon name=\"call\"></ion-icon>\n          <ion-input type=\"text\" formControlName=\"phone_number\" placeholder=\"Phone number\" class=\"input-box\">\n          </ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"reg_form.controls.phone_number.hasError('required') && reg_form.controls.phone_number.touched\">\n          <p class=\"content add-error\">Please Enter Phone number!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-icon name=\"lock-closed-outline\"></ion-icon>\n          <ion-input type=\"password\" formControlName=\"password\" placeholder=\"Password\" class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"reg_form.controls.password.hasError('required') && reg_form.controls.password.touched\">\n          <p class=\"content add-error\">Please Enter Password!</p>\n        </ion-item>\n\n        <ion-item lines=\"none\" class=\"input-item add\">\n          <ion-icon name=\"lock-closed\"></ion-icon>\n          <ion-input type=\"password\" formControlName=\"confirm_password\" placeholder=\"Confirm password\"\n            class=\"input-box\"></ion-input>\n        </ion-item>\n\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"reg_form.controls.confirm_password.hasError('required') && reg_form.controls.confirm_password.touched\">\n          <p class=\"content add-error\">Please Enter Password!</p>\n        </ion-item>\n        <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n          *ngIf=\"reg_form.controls.confirm_password.touched && reg_form.hasError('MatchPassword','confirm_password')\">\n          <p class=\"content add-error\"> Confirm password does not match with password.</p>\n\n        </ion-item>\n\n      </form>\n\n    </ion-card>\n\n    <div class=\"btn-bottom\">\n      <ion-button expand=\"full\" size=\"large\" shape=\"round\" (click)=\"signup()\">SIGN UP</ion-button>\n\n      <ion-label class=\"lbl-new\" (click)=\"signin()\">Already Registered ?</ion-label>\n    </div>\n\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/signup/signup-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup/signup-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    const routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];
    let SignupPageRoutingModule = class SignupPageRoutingModule {};
    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    let SignupPageModule = class SignupPageModule {};
    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page_signin {\n  position: relative;\n}\n.page_signin .div-card {\n  background: var(--ion-color-secondary-contrast);\n  width: 100%;\n}\n.lbl_header {\n  color: var(--ion-color-secondary-contrast);\n  font-size: 24px;\n  font-weight: 500;\n  line-height: 2.5;\n}\nion-card {\n  margin: 50px 28px 14px 28px;\n  border-radius: 0px;\n  box-shadow: 0px 0px 0px var(--ion-color-medium);\n}\n.img_icon {\n  height: 50px;\n  width: 50px;\n  border-radius: 50px;\n  box-shadow: 0px 4px 10px #ccc;\n  padding: 4px;\n  position: relative;\n  margin: 0 18px;\n}\nion-row {\n  margin: 0 auto;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 12px;\n}\n.lbl-forgot {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: end;\n  font-size: 14px;\n  margin: 0px 25px 30px 0px;\n  margin-right: 25px;\n}\n.div-email {\n  box-shadow: 0px 4px 10px var(--ion-color-medium);\n}\n.lbl-new {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: center;\n  font-size: 14px;\n  margin-top: 20px;\n}\nion-button {\n  color: var(--ion-color-secondary-contrast);\n  width: 65%;\n  margin: 0 auto;\n  font-size: 16px;\n  border-radius: 50px;\n  box-shadow: 0px 8px 10px #ccc !important;\n}\n.lbl_OR {\n  color: var(--ion-color-medium);\n  display: block;\n  text-align: center;\n  font-size: 16px;\n  margin-top: 15px;\n}\n::-webkit-input-placeholder {\n  font-size: 12px;\n}\n::-moz-placeholder {\n  font-size: 12px;\n}\n::-ms-input-placeholder {\n  font-size: 12px;\n}\n::placeholder {\n  font-size: 12px;\n}\n.fb_img:after {\n  content: \"\";\n  width: 2px;\n  height: 28px;\n  background-color: var(--ion-color-medium);\n  top: 12px;\n  bottom: 0;\n  right: -20px;\n  font-size: 23px;\n  position: absolute;\n}\n.btn-bottom {\n  margin-top: 25%;\n  margin-bottom: 10%;\n}\n.div-logo {\n  background: var(--ion-color-secondary-contrast);\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  box-shadow: 0px 0px 6px #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9SZWNib29rL3NyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBRENJO0VBRUksK0NBQUE7RUFHQSxXQUFBO0FDRlI7QURRQTtFQUNJLDBDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRHdCQTtFQUNJLDJCQUFBO0VBRUEsa0JBQUE7RUFDQSwrQ0FBQTtBQ3RCSjtBRHdCQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNyQko7QUR3QkE7RUFDSSxjQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0FDckJKO0FEdUJBO0VBQ0ksOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDcEJKO0FEc0JBO0VBQ0ksZ0RBQUE7QUNuQko7QURxQkE7RUFDSSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2xCSjtBRG9CQTtFQUNJLDBDQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx3Q0FBQTtBQ2pCSjtBRG1CQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDaEJKO0FEeUNBO0VBQ0ksZUFBQTtBQ3RDSjtBRHFDQTtFQUNJLGVBQUE7QUN0Q0o7QURxQ0E7RUFDSSxlQUFBO0FDdENKO0FEcUNBO0VBQ0ksZUFBQTtBQ3RDSjtBRHdDQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlDQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDckNKO0FEd0NBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDckNKO0FEd0NBO0VBQ0ksK0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FDckNKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZV9zaWduaW57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgIC5kaXYtY2FyZHtcbiAgICAgICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgICAgICAvLyB0b3A6IDMwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiA3MCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvL2JvcmRlci10b3AtbGVmdC1yYWRpdXM6IDc1cHg7XG4gICAgICAgIC8vYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDQwcHg7XG4gICAgfVxufVxuXG4ubGJsX2hlYWRlcntcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDIuNTtcbn1cblxuXG4vLyAuaW1nX2xvZ297XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgbWFyZ2luOiAwIGF1dG87XG4vLyAgICAgLy9tYXJnaW4tdG9wOiA4JTtcbi8vICAgICBoZWlnaHQ6IDc1cHg7XG4vLyAgICAgd2lkdGg6IDc1cHg7XG4vLyB9XG5cbi8vIGlvbi1jYXJke1xuLy8gICAgIG1hcmdpbjogMzJweCAyOHB4IDE0cHggMjhweDtcbi8vICAgICBwYWRkaW5nOiA1cHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vICAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcbi8vIH1cblxuaW9uLWNhcmR7XG4gICAgbWFyZ2luOiA1MHB4IDI4cHggMTRweCAyOHB4O1xuICAgIC8vcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbi5pbWdfaWNvbntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAxOHB4O1xufVxuXG5pb24tcm93e1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubGJsLWZvcmdvdHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDBweCAyNXB4IDMwcHggMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5kaXYtZW1haWx7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuLmxibC1uZXd7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbmlvbi1idXR0b257XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIHdpZHRoOiA2NSU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4ICNjY2MgIWltcG9ydGFudDtcbn1cbi5sYmxfT1J7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBcbn1cbi8vIGlvbi1pdGVte1xuLy8gICAgIC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4vLyAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuLy8gICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDhweDtcbi8vICAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAjY2NjO1xuLy8gICAgIG1hcmdpbjogNXB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4vLyAgICAgbWFyZ2luLXRvcDogMTRweDtcblxuLy8gICAgIGlvbi1pY29ue1xuLy8gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbi8vICAgICB9XG5cbi8vICAgICBpb24taW5wdXR7XG4vLyAgICAgICAgIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4vLyAgICAgICAgIC8vLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcbi8vICAgICAgICAgLy8tLWNvbG9yOiAjZmZmO1xuLy8gICAgIH1cbi8vIH1cbjo6cGxhY2Vob2xkZXJ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmZiX2ltZzphZnRlcntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiAycHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIHRvcDogMTJweDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5idG4tYm90dG9te1xuICAgIG1hcmdpbi10b3A6IDI1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5kaXYtbG9nb3tcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNmZmY7XG4gICAgLy9ib3gtc2hhZG93OiAwcHggMnB4IDEwcHggI2ZmZjtcbn0iLCIucGFnZV9zaWduaW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFnZV9zaWduaW4gLmRpdi1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGJsX2hlYWRlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMi41O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbjogNTBweCAyOHB4IDE0cHggMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLmltZ19pY29uIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICNjY2M7XG4gIHBhZGRpbmc6IDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgMThweDtcbn1cblxuaW9uLXJvdyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmxibC1mb3Jnb3Qge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHggMjVweCAzMHB4IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4uZGl2LWVtYWlsIHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4ubGJsLW5ldyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggI2NjYyAhaW1wb3J0YW50O1xufVxuXG4ubGJsX09SIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mYl9pbWc6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0b3A6IDEycHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IC0yMHB4O1xuICBmb250LXNpemU6IDIzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJ0bi1ib3R0b20ge1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmRpdi1sb2dvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNmZmY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/signup/signup.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signup/signup.page.ts ***!
    \***************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");
    /* harmony import */


    var _global_password_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../global/password_validation */
    "./src/app/global/password_validation.ts");

    let SignupPage = class SignupPage {
      constructor(statusBar, formBuilder, router, api) {
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.router = router;
        this.api = api;
        this.reg_fb();
      }

      ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#989aa2');
      }

      ngOnInit() {}

      reg_fb() {
        this.reg_form = this.formBuilder.group({
          username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          phone_number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          confirm_password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
          validator: _global_password_validation__WEBPACK_IMPORTED_MODULE_6__["PasswordValidation"].MatchPassword // your custom validation method  

        });
      }

      signup() {
        for (let v in this.reg_form.controls) {
          this.reg_form.controls[v].markAsTouched();
        }

        if (this.reg_form.valid) {
          this.api.presentLoading();
          this.reg_process = true;
          var body = {
            UserName: this.reg_form.value.username,
            Email: this.reg_form.value.email,
            PhoneNumber: this.reg_form.value.phone_number,
            Password: this.reg_form.value.password,
            Authentication_Provider: "Site",
            Status: "1"
          };
          this.api.signup(body).subscribe(val => {
            this.reg_process = false;
            this.api.dismissLoading();

            if (val['status'] == 200) {
              this.api.presentToastWithOptions(val['message']);
              this.router.navigate(['/signin']);
            } else {
              if (val == "email") {
                this.reg_form.controls['email'].setErrors({
                  'incorrect': true
                });
                this.reg_form.controls['email'].markAsTouched();
              } else {
                this.reg_form.controls['email'].setErrors({
                  'incorrect': true
                });
                this.reg_form.controls['email'].markAsTouched();
              }

              this.api.presentToastWithOptions('error', val['message']);
            }
          }, err => {
            this.reg_process = false;
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
          });
        }
      }

      signin() {
        this.router.navigate(['/signin']);
      }

    };

    SignupPage.ctorParameters = () => [{
      type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
    }];

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/signup/signup.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map