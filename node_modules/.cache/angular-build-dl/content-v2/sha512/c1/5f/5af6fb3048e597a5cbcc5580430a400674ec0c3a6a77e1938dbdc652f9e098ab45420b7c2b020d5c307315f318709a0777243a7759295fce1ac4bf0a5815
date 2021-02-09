(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon size=\"large\" name=\"arrow-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"md\" color=\"light\">\n      My Profile\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"submit()\">\n        <ion-icon size=\"large\" name=\"checkmark-sharp\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"profile_form\" autocomplete=\"off\">\n\n    <div class=\"blue-background\">\n\n      <div class=\"div-logo\">\n        <!-- <img src=\"../../assets/images/placeholders.png\" class=\"img_logo\" /> -->\n        <img *ngIf=\"!select_product_image\" src=\"{{user_not_found_place_holder}}\"  class=\"img_logo\"/>\n        <img *ngIf=\"select_product_image\"\n          src=\"{{mediaUrl_image ? select_product_image : select_product_image}}\"  class=\"img_logo\"/>\n          \n          \n      </div>\n\n    </div>\n\n    <!-- <div class=\"blue-background\">\n    <img *ngIf=\"!select_product_image\" src=\"{{user_not_found_place_holder}}\" class=\"format-img\" />\n    <img *ngIf=\"select_product_image\"\n      src=\"{{mediaUrl_image ? select_product_image : imageUrl + select_product_image}}\" class=\"format-img\" />\n  </div> -->\n\n    <div class=\"btn-img\">\n      <ion-button fill=\"clear\" expand=\"full\" class=\"btn\">Profile Picture</ion-button>\n      <input class=\"btn-choose\" type=\"file\" formControlName=\"image\" (change)=\"imageUpload($event)\" accept=\"image/*\" />\n    </div>\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.image.hasError('required') && profile_form.controls.image.touched\">\n      <p class=\"content\">Please Select Image!</p>\n    </ion-item>\n\n\n    <!-- <ion-label class=\"lbl_user\">Username</ion-label> -->\n\n    <ion-item lines=\"none\" class=\"input-item add space top\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"username\" placeholder=\"Username\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.username.hasError('required') && profile_form.controls.username.touched\">\n      <p class=\"content add-error\">Please Enter Username!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"mail\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"email\" placeholder=\"Email address\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.email.hasError('required') && profile_form.controls.email.touched\">\n      <p class=\"content add-error\">Please Enter Email address!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"call\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"phone_number\" placeholder=\"Phone number\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.phone_number.hasError('required') && profile_form.controls.phone_number.touched\">\n      <p class=\"content add-error\">Please Enter Phone number!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"business\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"address\" placeholder=\"Address\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.address.hasError('required') && profile_form.controls.address.touched\">\n      <p class=\"content add-error\">Please Enter Address!</p>\n    </ion-item>\n\n    <!-- <ion-item lines=\"none\" class=\"item-dropdown add\">\n    <ion-icon name=\"\"></ion-icon>\n    <ion-select interface=\"action-sheet\" formControlName=\"country\" placeholder=\"Country\"\n      class=\"btn-select bg\" mode=\"md\">\n      <ion-select-option>India</ion-select-option>\n      <ion-select-option>USA</ion-select-option>\n      <ion-select-option>UAE</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"earth\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"country\" placeholder=\"Country\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.country.hasError('required') && profile_form.controls.country.touched\">\n      <p class=\"content add-error\">Please Enter Country!</p>\n    </ion-item>\n\n    <!-- <ion-item lines=\"none\" class=\"item-dropdown add\">\n    <ion-icon name=\"\"></ion-icon>\n    <ion-select interface=\"action-sheet\" formControlName=\"state\" placeholder=\"State\"\n      class=\"btn-select bg\" mode=\"md\">\n      <ion-select-option>Option 1</ion-select-option>\n      <ion-select-option>Option 2</ion-select-option>\n      <ion-select-option>Option 3</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"location\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"state\" placeholder=\"State\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.state.hasError('required') && profile_form.controls.state.touched\">\n      <p class=\"content add-error\">Please Enter State!</p>\n    </ion-item>\n\n    <!-- <ion-item lines=\"none\" class=\"item-dropdown add\">\n    <ion-icon name=\"\"></ion-icon>\n    <ion-select interface=\"action-sheet\" formControlName=\"city\" placeholder=\"City\"\n      class=\"btn-select bg\" mode=\"md\">\n      <ion-select-option>Option 1</ion-select-option>\n      <ion-select-option>Option 2</ion-select-option>\n      <ion-select-option>Option 3</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"city\" placeholder=\"City\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.city.hasError('required') && profile_form.controls.city.touched\">\n      <p class=\"content add-error\">Please Enter City!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"pin\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"postal_code\" placeholder=\"Postal code\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.postal_code.hasError('required') && profile_form.controls.postal_code.touched\">\n      <p class=\"content add-error\">Please Enter Postal code!</p>\n    </ion-item>\n\n  </form>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/profile/profile-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/profile/profile-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    const routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];
    let ProfilePageRoutingModule = class ProfilePageRoutingModule {};
    ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/profile/profile.page.ts");

    let ProfilePageModule = class ProfilePageModule {};
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 20px ;\n}\n\n.blue-background {\n  width: 100%;\n  height: 100px;\n  background: var(--ion-color-primary);\n  z-index: 0;\n  bottom: 75%;\n  text-align: center;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n}\n\n.blue-background .img_logo {\n  border-radius: 50px;\n  border: 5px solid #fff;\n  box-shadow: 0px 0px 6px #ccc;\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.div-logo {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  padding-top: 45px;\n}\n\n.lbl_user {\n  display: block;\n  text-align: center;\n  margin-top: 45px;\n  font-size: 18px;\n}\n\n.input-item {\n  --inner-padding-end: 0px;\n  --padding-start: 4px;\n  padding: 0px 8px 0px 8px;\n  box-shadow: 0px 1px 6px #ccc;\n  margin: 16px 16px 0px 16px;\n  border-radius: 5px;\n}\n\n.input-item ion-icon {\n  color: var(--ion-color-medium);\n  font-size: 24px;\n}\n\n.input-item .input-box {\n  margin-left: 8px;\n}\n\n.input-item ion-textarea {\n  margin-left: 8px;\n}\n\n.item-dropdown {\n  --padding-start: 4px;\n  --inner-padding-end: 0px;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  padding: 0px 8px 0px 8px;\n  box-shadow: 0px 1px 6px #ccc;\n  margin: 16px 16px 0px 16px;\n  border-radius: 5px;\n}\n\n.item-dropdown .btn-select {\n  --padding-end: 0px;\n  --padding-start: 0px;\n  min-width: 87%;\n}\n\n.btn-choose {\n  position: absolute;\n  top: 30%;\n  opacity: 0;\n}\n\n.btn-img {\n  margin-top: 40px;\n}\n\n.btn {\n  color: #666;\n  font-size: 16px;\n  text-transform: capitalize;\n}\n\n.validator-error {\n  --background: transparent !important;\n  color: #d44848 !important;\n  --min-height: 18px !important;\n}\n\n.validator-error .content {\n  font-size: 12px !important;\n  margin: 0px !important;\n  text-align: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9SZWNib29rL3NyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0o7O0FERUE7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUdBLG9DQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFFQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNISjs7QURNSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQ0pSOztBRFNBO0VBQ0ksa0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUEo7O0FEV0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSSjs7QURXQTtFQUVJLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRFlJO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDVlI7O0FEYUk7RUFFSSxnQkFBQTtBQ1pSOztBRGlCSTtFQUVJLGdCQUFBO0FDaEJSOztBRHNCQTtFQUNJLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNuQko7O0FEcUJJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUNuQlI7O0FENEJBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ3pCSjs7QUQ0QkE7RUFDSSxnQkFBQTtBQ3pCSjs7QUQ0QkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDekJKOztBRDZCQTtFQUNJLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtBQzFCSjs7QUQ0Qkk7RUFDSSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDMUJSIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHhcbn1cblxuLmJsdWUtYmFja2dyb3VuZHtcbiAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8vdHJhbnNmb3JtOiByb3RhdGUoNjhkZWcpO1xuICAgIC8vYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgei1pbmRleDogMDtcbiAgICBib3R0b206IDc1JTtcbiAgICAvL2xlZnQ6IDE3JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNzBweDtcbiAgICAvL2JveC1zaGFkb3c6IDBweCA0cHggMTBweCAjYjFhZmFmO1xuXG4gICAgLmltZ19sb2dve1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAjY2NjO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAvL2JveC1zaGFkb3c6IDBweCA0cHggMTBweCAjY2NjO1xuICAgIH1cbn1cblxuLmRpdi1sb2dve1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvL2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gICAgLy9wYWRkaW5nOiA1cHg7XG59XG5cbi5sYmxfdXNlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDVweDsgICBcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbnB1dC1pdGVte1xuICAgIC8vLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgcGFkZGluZzogMHB4IDhweCAwcHggOHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNnB4ICNjY2M7XG4gICAgbWFyZ2luOiAxNnB4IDE2cHggMHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vbWFyZ2luLXRvcDogMTRweDtcblxuICAgIGlvbi1pY29ue1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG5cbiAgICAuaW5wdXQtYm94e1xuICAgICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAvLy0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4gICAgICAgIC8vLS1jb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBpb24tdGV4dGFyZWF7XG4gICAgICAgIC8vYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIC8vLS1wbGFjZWhvbGRlci1jb2xvcjogI2ZmZjtcbiAgICAgICAgLy8tLWNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLml0ZW0tZHJvcGRvd257XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7IFxuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMHB4IDhweCAwcHggOHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNnB4ICNjY2M7XG4gICAgbWFyZ2luOiAxNnB4IDE2cHggMHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuIFxuICAgIC5idG4tc2VsZWN0e1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICBtaW4td2lkdGg6IDg3JTtcbiAgICB9XG59XG5cblxuLy8gLnRvcHtcbi8vICAgICBtYXJnaW4tdG9wOiA0OHB4O1xuLy8gfVxuXG4uYnRuLWNob29zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMCU7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLmJ0bi1pbWd7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmJ0bntcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi8vIEZpZWxkIEVycm9yXG4udmFsaWRhdG9yLWVycm9ye1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2Q0NDg0OCAhaW1wb3J0YW50O1xuICAgIC0tbWluLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xuXG4gICAgLmNvbnRlbnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHggO1xufVxuXG4uYmx1ZS1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgei1pbmRleDogMDtcbiAgYm90dG9tOiA3NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwcHg7XG59XG4uYmx1ZS1iYWNrZ3JvdW5kIC5pbWdfbG9nbyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNjY2M7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5kaXYtbG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG59XG5cbi5sYmxfdXNlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0LWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4ICNjY2M7XG4gIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaW5wdXQtaXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmlucHV0LWl0ZW0gLmlucHV0LWJveCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uaW5wdXQtaXRlbSBpb24tdGV4dGFyZWEge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uaXRlbS1kcm9wZG93biB7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtZm9jdXNlZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweCA4cHggMHB4IDhweDtcbiAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggI2NjYztcbiAgbWFyZ2luOiAxNnB4IDE2cHggMHB4IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5pdGVtLWRyb3Bkb3duIC5idG4tc2VsZWN0IHtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgbWluLXdpZHRoOiA4NyU7XG59XG5cbi5idG4tY2hvb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmJ0bi1pbWcge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4uYnRuIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi52YWxpZGF0b3ItZXJyb3Ige1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZDQ0ODQ4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogMThweCAhaW1wb3J0YW50O1xufVxuLnZhbGlkYXRvci1lcnJvciAuY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/profile.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/profile/profile.page.ts ***!
    \*****************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../global/common_service */
    "./src/app/global/common_service.ts");

    let ProfilePage = class ProfilePage {
      constructor(navCtrl, statusBar, formBuilder, api, router) {
        this.navCtrl = navCtrl;
        this.statusBar = statusBar;
        this.formBuilder = formBuilder;
        this.api = api;
        this.router = router;
        this.user_not_found_place_holder = 'assets/images/placeholders.png';
        this.mediaUrl_image = '';
        this.profile_fb();
      }

      questionDetails(reqData) {
        this.api.profileDetail(reqData).subscribe(res => {
          this.profileData = res['result'];
          console.log("getdata", this.profileData);
          this.profile_form.patchValue({
            username: this.profileData['UserName'],
            email: this.profileData['Email'],
            phone_number: this.profileData['PhoneNumber'],
            address: this.profileData['Address'],
            country: this.profileData['Country'],
            state: this.profileData['State'],
            city: this.profileData['City'],
            postal_code: this.profileData['PostalCode']
          });
          this.select_product_image = this.profileData['ProfileUrl'];
        });
      }

      ngOnInit() {
        this.id = localStorage.getItem('id');
        this.questionDetails(this.id);
      }

      ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#989aa2');
      }

      profile_fb() {
        this.profile_form = this.formBuilder.group({
          username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          email: [{
            value: '',
            disabled: true
          }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          phone_number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          postal_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
      }

      imageUpload(e) {
        let file = e.target.files[0];

        if (file) {
          let reader = new FileReader();

          reader.onloadend = e => {
            this.select_product_image = e.target.result;
          };

          reader.readAsDataURL(e.target.files[0]);
          this.mediaUrl_image = file;
        }
      }

      submit() {
        for (let v in this.profile_form.controls) {
          this.profile_form.controls[v].markAsTouched();
        }

        if (this.profile_form.valid) {
          this.api.presentLoading();
          this.pro_process = true;
          const body = new FormData();
          body.append('UserName', this.profile_form.value.username);
          body.append('Email', this.profile_form.value.email);
          body.append('PhoneNumber', this.profile_form.value.phone_number);
          body.append('Address', this.profile_form.value.address);
          body.append('Country', this.profile_form.value.country);
          body.append('State', this.profile_form.value.state);
          body.append('City', this.profile_form.value.city);
          body.append('PostalCode', this.profile_form.value.postal_code);
          body.append('ID', this.id);
          body.append('image', this.mediaUrl_image);
          this.api.updateUser(body).subscribe(val => {
            this.pro_process = false;
            this.api.dismissLoading();

            if (val) {
              this.api.presentToastWithOptions(val['message']);
              this.router.navigate(['/home']);
            } else {
              this.api.presentToastWithOptions(val['message']);
            }
          }, err => {
            this.pro_process = false;
            this.api.dismissLoading();
            this.api.presentToastWithOptions("Internal Server Error Please try again after sometime.");
          });
        }
      }

      back() {
        this.navCtrl.pop();
      }

    };

    ProfilePage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }, {
      type: _global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/profile/profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map