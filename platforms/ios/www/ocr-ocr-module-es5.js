(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ocr-ocr-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ocr/ocr.page.html":
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ocr/ocr.page.html ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOcrOcrPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon size=\"large\" name=\"arrow-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"md\" color=\"light\">\n      Receipt Scan\n    </ion-title>\n      <!-- <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon size=\"large\" name=\"checkmark-sharp\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"blue-background\">\n    <!-- <img src=\"../../assets/images/placeholders.png\" class=\"img_preview\"> -->\n\n    <div class=\"div-logo\" (click)=\"scan()\">\n      <div class=\"img_logo\">\n        <ion-icon name=\"camera\" color=\"light\"></ion-icon>\n        <ion-label class=\"lbl_dash\">Scan</ion-label>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- <p>Success : {{ocrresult}}</p>\n\n  <p>Error : {{ocrerror}}</p> -->\n\n</ion-content>\n\n<ion-footer>\n  <ion-button class=\"btn_footer\" size=\"large\" expand=\"full\" (click)=\"add()\">Add Receipt</ion-button>\n  <!-- <ion-row>\n    <ion-col size=\"6\">\n      <ion-button class=\"btn\" size=\"large\" expand=\"full\" (click)=\"presentActionSheet()\">Scan</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"btn\" size=\"large\" expand=\"full\" (click)=\"analyze()\">Read</ion-button>\n    </ion-col>\n  </ion-row> -->\n\n  \n\n</ion-footer>\n\n<!-- <ion-content padding>\n\n<button class=\"select-image\" ion-button block *ngIf=\"!srcImage\" (click)=\"presentActionSheet()\" color=\"light\">\n  <ion-icon name=\"camera\"></ion-icon>\n</button>\n\n<div *ngIf=\"srcImage\" class=\"image-wrapper\">\n  <img id=\"image\" [src]=\"srcImage\" />\n  <button ion-button icon-left block (click)=\"analyze()\" color=\"light\">\n    <ion-icon name=\"search\"></ion-icon>\n    Read\n  </button>\n  <button ion-button icon-left block (click)=\"restart()\" color=\"light\">\n    <ion-icon name=\"refresh\"></ion-icon>\n    Restart\n  </button>\n</div>\n\n</ion-content> -->";
    /***/
  },

  /***/
  "./src/app/ocr/ocr-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/ocr/ocr-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: OcrPageRoutingModule */

  /***/
  function srcAppOcrOcrRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OcrPageRoutingModule", function () {
      return OcrPageRoutingModule;
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


    var _ocr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ocr.page */
    "./src/app/ocr/ocr.page.ts");

    const routes = [{
      path: '',
      component: _ocr_page__WEBPACK_IMPORTED_MODULE_3__["OcrPage"]
    }];
    let OcrPageRoutingModule = class OcrPageRoutingModule {};
    OcrPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OcrPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/ocr/ocr.module.ts":
  /*!***********************************!*\
    !*** ./src/app/ocr/ocr.module.ts ***!
    \***********************************/

  /*! exports provided: OcrPageModule */

  /***/
  function srcAppOcrOcrModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OcrPageModule", function () {
      return OcrPageModule;
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


    var _ocr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ocr-routing.module */
    "./src/app/ocr/ocr-routing.module.ts");
    /* harmony import */


    var _ocr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ocr.page */
    "./src/app/ocr/ocr.page.ts");

    let OcrPageModule = class OcrPageModule {};
    OcrPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ocr_routing_module__WEBPACK_IMPORTED_MODULE_5__["OcrPageRoutingModule"]],
      declarations: [_ocr_page__WEBPACK_IMPORTED_MODULE_6__["OcrPage"]]
    })], OcrPageModule);
    /***/
  },

  /***/
  "./src/app/ocr/ocr.page.scss":
  /*!***********************************!*\
    !*** ./src/app/ocr/ocr.page.scss ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppOcrOcrPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blue-background {\n  width: 100%;\n  height: 100px;\n  background: var(--ion-color-primary);\n  z-index: 0;\n  bottom: 75%;\n  text-align: center;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n}\n.blue-background .img_preview {\n  height: 290px;\n  width: 90%;\n  margin-top: 28px;\n}\nion-footer ion-row ion-col {\n  padding: 0px;\n}\nion-footer ion-row ion-col ion-button {\n  margin: 0px;\n}\n.btn {\n  color: var(--ion-color-secondary-contrast);\n  margin: 16px;\n}\n.btn_footer {\n  margin: 0px;\n  color: var(--ion-color-secondary-contrast);\n  text-transform: capitalize;\n}\n.select-image {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  max-width: 250px;\n  height: 100%;\n  max-height: 250px;\n  font-size: 4em;\n  border-style: solid;\n  border-radius: 15px;\n  margin: auto;\n  cursor: pointer;\n}\n.image-wrapper {\n  width: 100%;\n}\n.div-logo {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  padding-top: 45px;\n}\n.div-logo .img_logo {\n  height: 100px;\n  background: var(--ion-color-primary);\n  border-radius: 50px;\n  border: 5px solid #fff;\n  box-shadow: 0px 0px 6px #ccc;\n}\n.div-logo .img_logo ion-icon {\n  font-size: 54px;\n  height: 100%;\n}\n.div-logo .img_logo .lbl_dash {\n  font-size: 18px;\n  color: #666;\n  font-family: \"MuliSemiBold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvUmVjYm9vay9zcmMvYXBwL29jci9vY3IucGFnZS5zY3NzIiwic3JjL2FwcC9vY3Ivb2NyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFdBQUE7RUFDQSxhQUFBO0VBR0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0hGO0FETUU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDSko7QURTSTtFQUNFLFlBQUE7QUNOTjtBRE9NO0VBQ0UsV0FBQTtBQ0xSO0FEVUE7RUFDRSwwQ0FBQTtFQUNBLFlBQUE7QUNQRjtBRFNBO0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsMEJBQUE7QUNORjtBRFNJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDTk47QURRSTtFQUNFLFdBQUE7QUNMTjtBRFNJO0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1BOO0FEVU07RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNSUjtBRFdRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNUVjtBRFlRO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBQ1ZWIiwiZmlsZSI6InNyYy9hcHAvb2NyL29jci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmx1ZS1iYWNrZ3JvdW5ke1xuICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIC8vdHJhbnNmb3JtOiByb3RhdGUoNjhkZWcpO1xuICAvL2JvcmRlcjogc29saWQgMXB4ICNmMWYxZjE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgei1pbmRleDogMDtcbiAgYm90dG9tOiA3NSU7XG4gIC8vbGVmdDogMTclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4O1xuICAvL2JveC1zaGFkb3c6IDBweCA0cHggMTBweCAjYjFhZmFmO1xuXG4gIC5pbWdfcHJldmlld3tcbiAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luLXRvcDogMjhweDtcbiAgfVxufVxuaW9uLWZvb3RlcntcbiAgaW9uLXJvd3tcbiAgICBpb24tY29se1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uYnRue1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIG1hcmdpbjogMTZweDtcbn1cbi5idG5fZm9vdGVye1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuICAgIC5zZWxlY3QtaW1hZ2Uge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmltYWdlLXdyYXBwZXIge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG5cbiAgICAuZGl2LWxvZ297XG4gICAgICAvL2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIHBhZGRpbmctdG9wOiA0NXB4O1xuICAgICAgLy9wYWRkaW5nOiA1cHg7XG4gIFxuICAgICAgLmltZ19sb2dve1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4ICNjY2M7XG4gICAgICAgIC8vYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICNjY2M7XG4gIFxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICBmb250LXNpemU6IDU0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gIFxuICAgICAgICAubGJsX2Rhc2h7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGlTZW1pQm9sZFwiO1xuICAgICAgICB9XG4gICAgfVxuICB9IiwiLmJsdWUtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHotaW5kZXg6IDA7XG4gIGJvdHRvbTogNzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4O1xufVxuLmJsdWUtYmFja2dyb3VuZCAuaW1nX3ByZXZpZXcge1xuICBoZWlnaHQ6IDI5MHB4O1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuXG5pb24tZm9vdGVyIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbn1cblxuLmJ0biB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgbWFyZ2luOiAxNnB4O1xufVxuXG4uYnRuX2Zvb3RlciB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uc2VsZWN0LWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBmb250LXNpemU6IDRlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXYtbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xufVxuLmRpdi1sb2dvIC5pbWdfbG9nbyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggI2NjYztcbn1cbi5kaXYtbG9nbyAuaW1nX2xvZ28gaW9uLWljb24ge1xuICBmb250LXNpemU6IDU0cHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kaXYtbG9nbyAuaW1nX2xvZ28gLmxibF9kYXNoIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1mYW1pbHk6IFwiTXVsaVNlbWlCb2xkXCI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ocr/ocr.page.ts":
  /*!*********************************!*\
    !*** ./src/app/ocr/ocr.page.ts ***!
    \*********************************/

  /*! exports provided: OcrPage */

  /***/
  function srcAppOcrOcrPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OcrPage", function () {
      return OcrPage;
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


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_ocr_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/ocr/ngx */
    "./node_modules/@ionic-native/ocr/ngx/index.js");

    let OcrPage = class OcrPage {
      constructor(navCtrl, actionSheetCtrl, loadingCtrl, camera, statusBar, router, ocr) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.statusBar = statusBar;
        this.router = router;
        this.ocr = ocr;
        this.srcImage = null;
        this.ocrresult = null;
        this.ocrerror = null;
      }

      ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#989aa2');
      }

      back() {
        this.navCtrl.pop();
      }

      scan() {
        this.getPicture(1);
      }

      add() {
        this.router.navigate(['/add-receipt']);
      }

      presentActionSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionSheetCtrl.create({
            mode: 'md',
            buttons: [{
              text: 'Choose Photo',
              handler: () => {
                this.getPicture(0); // 0 == Library
              }
            }, {
              text: 'Take Photo',
              handler: () => {
                this.getPicture(1); // 1 == Camera
              }
            }, // {
            //   text: 'Demo Photo',
            //   handler: () => {
            //     this.srcImage = 'assets/images/keycard.png';
            //   }
            // }, 
            {
              text: 'Cancel',
              role: 'cancel'
            }]
          });
          actionSheet.present();
        });
      }

      getPicture(sourceType) {
        // You can check the values here:
        // https://github.com/driftyco/ionic-native/blob/master/src/plugins/camera.ts
        this.camera.getPicture({
          quality: 100,
          destinationType: 0,
          sourceType,
          allowEdit: true,
          saveToPhotoAlbum: false,
          correctOrientation: true
        }).then(imageData => {
          this.srcImage = imageData;
          this.ocr.recText(_ionic_native_ocr_ngx__WEBPACK_IMPORTED_MODULE_6__["OCRSourceType"].BASE64, imageData).then(res => this.ocrresult = JSON.stringify(res)).catch(error => this.ocrerror = JSON.stringify(error));
        }, err => {
          console.log("ERROR -> ".concat(JSON.stringify(err)));
        });
      }

      analyze() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          let loader = yield this.loadingCtrl.create({
            message: 'Please wait...'
          });
          loader.present();
          window.OCRAD(document.getElementById('image'), text => {
            loader.dismiss();
            alert(text);
            console.log(text);
          });
        });
      }

      restart() {
        this.srcImage = '';
        this.presentActionSheet();
      }

      ngOnInit() {}

    };

    OcrPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
    }, {
      type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"]
    }, {
      type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }, {
      type: _ionic_native_ocr_ngx__WEBPACK_IMPORTED_MODULE_6__["OCR"]
    }];

    OcrPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ocr',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ocr.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ocr/ocr.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ocr.page.scss */
      "./src/app/ocr/ocr.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_native_ocr_ngx__WEBPACK_IMPORTED_MODULE_6__["OCR"]])], OcrPage);
    /***/
  }
}]);
//# sourceMappingURL=ocr-ocr-module-es5.js.map