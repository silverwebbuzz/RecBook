(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preview-preview-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/preview/preview.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preview/preview.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPreviewPreviewPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon size=\"large\" name=\"arrow-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"md\" color=\"light\">\n      Receipt Preview\n    </ion-title>\n      <!-- <ion-buttons slot=\"end\">\n        <ion-button (click)=\"shareActionSheet()\">\n          <ion-icon size=\"large\" name=\"share-social\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"div_rec_img\">\n\n    <img src=\"../../assets/images/receipt.jpg\"/>\n\n  </div>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/preview/preview-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/preview/preview-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: PreviewPageRoutingModule */

  /***/
  function srcAppPreviewPreviewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewPageRoutingModule", function () {
      return PreviewPageRoutingModule;
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


    var _preview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./preview.page */
    "./src/app/preview/preview.page.ts");

    const routes = [{
      path: '',
      component: _preview_page__WEBPACK_IMPORTED_MODULE_3__["PreviewPage"]
    }];
    let PreviewPageRoutingModule = class PreviewPageRoutingModule {};
    PreviewPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PreviewPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/preview/preview.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/preview/preview.module.ts ***!
    \*******************************************/

  /*! exports provided: PreviewPageModule */

  /***/
  function srcAppPreviewPreviewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewPageModule", function () {
      return PreviewPageModule;
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


    var _preview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./preview-routing.module */
    "./src/app/preview/preview-routing.module.ts");
    /* harmony import */


    var _preview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./preview.page */
    "./src/app/preview/preview.page.ts");

    let PreviewPageModule = class PreviewPageModule {};
    PreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _preview_routing_module__WEBPACK_IMPORTED_MODULE_5__["PreviewPageRoutingModule"]],
      declarations: [_preview_page__WEBPACK_IMPORTED_MODULE_6__["PreviewPage"]]
    })], PreviewPageModule);
    /***/
  },

  /***/
  "./src/app/preview/preview.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/preview/preview.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPreviewPreviewPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\nion-content .div_rec_img {\n  padding: 8px;\n  border: 2px solid #ccc;\n  height: 100%;\n}\nion-content .div_rec_img img {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvUmVjYm9vay9zcmMvYXBwL3ByZXZpZXcvcHJldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0k7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ1I7QURDUTtFQUNJLFlBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG5cbiAgICAuZGl2X3JlY19pbWd7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLXRvcDogMTZweDtcbn1cbmlvbi1jb250ZW50IC5kaXZfcmVjX2ltZyB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLmRpdl9yZWNfaW1nIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/preview/preview.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/preview/preview.page.ts ***!
    \*****************************************/

  /*! exports provided: PreviewPage */

  /***/
  function srcAppPreviewPreviewPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PreviewPage", function () {
      return PreviewPage;
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

    let PreviewPage = class PreviewPage {
      constructor(navCtrl) {
        this.navCtrl = navCtrl;
      }

      ngOnInit() {}

      back() {
        this.navCtrl.pop();
      }

    };

    PreviewPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    PreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-preview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./preview.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/preview/preview.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./preview.page.scss */
      "./src/app/preview/preview.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], PreviewPage);
    /***/
  }
}]);
//# sourceMappingURL=preview-preview-module-es5.js.map