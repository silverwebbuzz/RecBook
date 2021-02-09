(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon size=\"large\" name=\"arrow-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"md\" color=\"light\">\n      My Profile\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"submit()\">\n        <ion-icon size=\"large\" name=\"checkmark-sharp\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"profile_form\" autocomplete=\"off\">\n\n    <div class=\"blue-background\">\n\n      <div class=\"div-logo\">\n        <!-- <img src=\"../../assets/images/placeholders.png\" class=\"img_logo\" /> -->\n        <img *ngIf=\"!select_product_image\" src=\"{{user_not_found_place_holder}}\"  class=\"img_logo\"/>\n        <img *ngIf=\"select_product_image\"\n          src=\"{{mediaUrl_image ? select_product_image : select_product_image}}\"  class=\"img_logo\"/>\n          \n          \n      </div>\n\n    </div>\n\n    <!-- <div class=\"blue-background\">\n    <img *ngIf=\"!select_product_image\" src=\"{{user_not_found_place_holder}}\" class=\"format-img\" />\n    <img *ngIf=\"select_product_image\"\n      src=\"{{mediaUrl_image ? select_product_image : imageUrl + select_product_image}}\" class=\"format-img\" />\n  </div> -->\n\n    <div class=\"btn-img\">\n      <ion-button fill=\"clear\" expand=\"full\" class=\"btn\">Profile Picture</ion-button>\n      <input class=\"btn-choose\" type=\"file\" formControlName=\"image\" (change)=\"imageUpload($event)\" accept=\"image/*\" />\n    </div>\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.image.hasError('required') && profile_form.controls.image.touched\">\n      <p class=\"content\">Please Select Image!</p>\n    </ion-item>\n\n\n    <!-- <ion-label class=\"lbl_user\">Username</ion-label> -->\n\n    <ion-item lines=\"none\" class=\"input-item add space top\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"username\" placeholder=\"Username\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.username.hasError('required') && profile_form.controls.username.touched\">\n      <p class=\"content add-error\">Please Enter Username!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"mail\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"email\" placeholder=\"Email address\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.email.hasError('required') && profile_form.controls.email.touched\">\n      <p class=\"content add-error\">Please Enter Email address!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"call\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"phone_number\" placeholder=\"Phone number\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.phone_number.hasError('required') && profile_form.controls.phone_number.touched\">\n      <p class=\"content add-error\">Please Enter Phone number!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"business\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"address\" placeholder=\"Address\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.address.hasError('required') && profile_form.controls.address.touched\">\n      <p class=\"content add-error\">Please Enter Address!</p>\n    </ion-item>\n\n    <!-- <ion-item lines=\"none\" class=\"item-dropdown add\">\n    <ion-icon name=\"\"></ion-icon>\n    <ion-select interface=\"action-sheet\" formControlName=\"country\" placeholder=\"Country\"\n      class=\"btn-select bg\" mode=\"md\">\n      <ion-select-option>India</ion-select-option>\n      <ion-select-option>USA</ion-select-option>\n      <ion-select-option>UAE</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"earth\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"country\" placeholder=\"Country\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.country.hasError('required') && profile_form.controls.country.touched\">\n      <p class=\"content add-error\">Please Enter Country!</p>\n    </ion-item>\n\n    <!-- <ion-item lines=\"none\" class=\"item-dropdown add\">\n    <ion-icon name=\"\"></ion-icon>\n    <ion-select interface=\"action-sheet\" formControlName=\"state\" placeholder=\"State\"\n      class=\"btn-select bg\" mode=\"md\">\n      <ion-select-option>Option 1</ion-select-option>\n      <ion-select-option>Option 2</ion-select-option>\n      <ion-select-option>Option 3</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"location\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"state\" placeholder=\"State\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.state.hasError('required') && profile_form.controls.state.touched\">\n      <p class=\"content add-error\">Please Enter State!</p>\n    </ion-item>\n\n    <!-- <ion-item lines=\"none\" class=\"item-dropdown add\">\n    <ion-icon name=\"\"></ion-icon>\n    <ion-select interface=\"action-sheet\" formControlName=\"city\" placeholder=\"City\"\n      class=\"btn-select bg\" mode=\"md\">\n      <ion-select-option>Option 1</ion-select-option>\n      <ion-select-option>Option 2</ion-select-option>\n      <ion-select-option>Option 3</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"home\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"city\" placeholder=\"City\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.city.hasError('required') && profile_form.controls.city.touched\">\n      <p class=\"content add-error\">Please Enter City!</p>\n    </ion-item>\n\n    <ion-item lines=\"none\" class=\"input-item add space\">\n      <ion-icon name=\"pin\"></ion-icon>\n      <ion-input type=\"text\" formControlName=\"postal_code\" placeholder=\"Postal code\" class=\"input-box\"></ion-input>\n    </ion-item>\n\n    <ion-item no-padding lines=\"none\" class=\"validator-error error-spc\"\n      *ngIf=\"profile_form.controls.postal_code.hasError('required') && profile_form.controls.postal_code.touched\">\n      <p class=\"content add-error\">Please Enter Postal code!</p>\n    </ion-item>\n\n  </form>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-bottom: 20px ;\n}\n\n.blue-background {\n  width: 100%;\n  height: 100px;\n  background: var(--ion-color-primary);\n  z-index: 0;\n  bottom: 75%;\n  text-align: center;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n}\n\n.blue-background .img_logo {\n  border-radius: 50px;\n  border: 5px solid #fff;\n  box-shadow: 0px 0px 6px #ccc;\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.div-logo {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  padding-top: 45px;\n}\n\n.lbl_user {\n  display: block;\n  text-align: center;\n  margin-top: 45px;\n  font-size: 18px;\n}\n\n.input-item {\n  --inner-padding-end: 0px;\n  --padding-start: 4px;\n  padding: 0px 8px 0px 8px;\n  box-shadow: 0px 1px 6px #ccc;\n  margin: 16px 16px 0px 16px;\n  border-radius: 5px;\n}\n\n.input-item ion-icon {\n  color: var(--ion-color-medium);\n  font-size: 24px;\n}\n\n.input-item .input-box {\n  margin-left: 8px;\n}\n\n.input-item ion-textarea {\n  margin-left: 8px;\n}\n\n.item-dropdown {\n  --padding-start: 4px;\n  --inner-padding-end: 0px;\n  --background-activated: transparent;\n  --background-focused: transparent;\n  padding: 0px 8px 0px 8px;\n  box-shadow: 0px 1px 6px #ccc;\n  margin: 16px 16px 0px 16px;\n  border-radius: 5px;\n}\n\n.item-dropdown .btn-select {\n  --padding-end: 0px;\n  --padding-start: 0px;\n  min-width: 87%;\n}\n\n.btn-choose {\n  position: absolute;\n  top: 30%;\n  opacity: 0;\n}\n\n.btn-img {\n  margin-top: 40px;\n}\n\n.btn {\n  color: #666;\n  font-size: 16px;\n  text-transform: capitalize;\n}\n\n.validator-error {\n  --background: transparent !important;\n  color: #d44848 !important;\n  --min-height: 18px !important;\n}\n\n.validator-error .content {\n  font-size: 12px !important;\n  margin: 0px !important;\n  text-align: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvUmVjYm9vay9zcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKOztBREVBO0VBRUksV0FBQTtFQUNBLGFBQUE7RUFHQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDSEo7O0FETUk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNKUjs7QURTQTtFQUNJLGtCQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFdBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUko7O0FEV0E7RUFFSSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNUSjs7QURZSTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ1ZSOztBRGFJO0VBRUksZ0JBQUE7QUNaUjs7QURpQkk7RUFFSSxnQkFBQTtBQ2hCUjs7QURzQkE7RUFDSSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDbkJKOztBRHFCSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FDbkJSOztBRDRCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUN6Qko7O0FENEJBO0VBQ0ksZ0JBQUE7QUN6Qko7O0FENEJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQ3pCSjs7QUQ2QkE7RUFDSSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUMxQko7O0FENEJJO0VBQ0ksMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQzFCUiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4XG59XG5cbi5ibHVlLWJhY2tncm91bmR7XG4gICAgLy9wb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvL3RyYW5zZm9ybTogcm90YXRlKDY4ZGVnKTtcbiAgICAvL2JvcmRlcjogc29saWQgMXB4ICNmMWYxZjE7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIHotaW5kZXg6IDA7XG4gICAgYm90dG9tOiA3NSU7XG4gICAgLy9sZWZ0OiAxNyU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwcHg7XG4gICAgLy9ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2IxYWZhZjtcblxuICAgIC5pbWdfbG9nb3tcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggI2NjYztcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgLy9ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcbiAgICB9XG59XG5cbi5kaXYtbG9nb3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy9iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgIC8vcGFkZGluZzogNXB4O1xufVxuXG4ubGJsX3VzZXJ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDQ1cHg7ICAgXG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW5wdXQtaXRlbXtcbiAgICAvLy0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDhweDtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAjY2NjO1xuICAgIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvL21hcmdpbi10b3A6IDE0cHg7XG5cbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgLmlucHV0LWJveHtcbiAgICAgICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgLy8tLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAvLy0tY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAvLy0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4gICAgICAgIC8vLS1jb2xvcjogI2ZmZjtcbiAgICB9XG59XG5cbi5pdGVtLWRyb3Bkb3due1xuICAgIC0tcGFkZGluZy1zdGFydDogNHB4OyBcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDhweDtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAjY2NjO1xuICAgIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiBcbiAgICAuYnRuLXNlbGVjdHtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgbWluLXdpZHRoOiA4NyU7XG4gICAgfVxufVxuXG5cbi8vIC50b3B7XG4vLyAgICAgbWFyZ2luLXRvcDogNDhweDtcbi8vIH1cblxuLmJ0bi1jaG9vc2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzAlO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5idG4taW1ne1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5idG57XG4gICAgY29sb3I6ICM2NjY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4vLyBGaWVsZCBFcnJvclxuLnZhbGlkYXRvci1lcnJvcntcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICNkNDQ4NDggIWltcG9ydGFudDtcbiAgICAtLW1pbi1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcblxuICAgIC5jb250ZW50e1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59IiwiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4IDtcbn1cblxuLmJsdWUtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHotaW5kZXg6IDA7XG4gIGJvdHRvbTogNzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4O1xufVxuLmJsdWUtYmFja2dyb3VuZCAuaW1nX2xvZ28ge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAjY2NjO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uZGl2LWxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xufVxuXG4ubGJsX3VzZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0NXB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbnB1dC1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgcGFkZGluZzogMHB4IDhweCAwcHggOHB4O1xuICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAjY2NjO1xuICBtYXJnaW46IDE2cHggMTZweCAwcHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmlucHV0LWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5pbnB1dC1pdGVtIC5pbnB1dC1ib3gge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmlucHV0LWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLml0ZW0tZHJvcGRvd24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4ICNjY2M7XG4gIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaXRlbS1kcm9wZG93biAuYnRuLXNlbGVjdCB7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIG1pbi13aWR0aDogODclO1xufVxuXG4uYnRuLWNob29zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5idG4taW1nIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLmJ0biB7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4udmFsaWRhdG9yLWVycm9yIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Q0NDg0OCAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IDE4cHggIWltcG9ydGFudDtcbn1cbi52YWxpZGF0b3ItZXJyb3IgLmNvbnRlbnQge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _global_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/common_service */ "./src/app/global/common_service.ts");







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
                postal_code: this.profileData['PostalCode'],
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
            email: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            phone_number: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            postal_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            image: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    imageUpload(e) {
        let file = e.target.files[0];
        if (file) {
            let reader = new FileReader();
            reader.onloadend = (e) => {
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
                }
                else {
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
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _global_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map