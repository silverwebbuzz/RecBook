(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ocr-ocr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ocr/ocr.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ocr/ocr.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon size=\"large\" name=\"arrow-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"md\" color=\"light\">\n      Receipt Scan\n    </ion-title>\n      <!-- <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon size=\"large\" name=\"checkmark-sharp\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"blue-background\">\n    <!-- <img src=\"../../assets/images/placeholders.png\" class=\"img_preview\"> -->\n\n    <div class=\"div-logo\" (click)=\"scan()\">\n      <div class=\"img_logo\">\n        <ion-icon name=\"camera\" color=\"light\"></ion-icon>\n        <ion-label class=\"lbl_dash\">Scan</ion-label>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- <p>Success : {{ocrresult}}</p>\n\n  <p>Error : {{ocrerror}}</p> -->\n\n</ion-content>\n\n<ion-footer>\n  <ion-button class=\"btn_footer\" size=\"large\" expand=\"full\" (click)=\"add()\">Add Receipt</ion-button>\n  <!-- <ion-row>\n    <ion-col size=\"6\">\n      <ion-button class=\"btn\" size=\"large\" expand=\"full\" (click)=\"presentActionSheet()\">Scan</ion-button>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-button class=\"btn\" size=\"large\" expand=\"full\" (click)=\"analyze()\">Read</ion-button>\n    </ion-col>\n  </ion-row> -->\n\n  \n\n</ion-footer>\n\n<!-- <ion-content padding>\n\n<button class=\"select-image\" ion-button block *ngIf=\"!srcImage\" (click)=\"presentActionSheet()\" color=\"light\">\n  <ion-icon name=\"camera\"></ion-icon>\n</button>\n\n<div *ngIf=\"srcImage\" class=\"image-wrapper\">\n  <img id=\"image\" [src]=\"srcImage\" />\n  <button ion-button icon-left block (click)=\"analyze()\" color=\"light\">\n    <ion-icon name=\"search\"></ion-icon>\n    Read\n  </button>\n  <button ion-button icon-left block (click)=\"restart()\" color=\"light\">\n    <ion-icon name=\"refresh\"></ion-icon>\n    Restart\n  </button>\n</div>\n\n</ion-content> -->");

/***/ }),

/***/ "./src/app/ocr/ocr-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ocr/ocr-routing.module.ts ***!
  \*******************************************/
/*! exports provided: OcrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcrPageRoutingModule", function() { return OcrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ocr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ocr.page */ "./src/app/ocr/ocr.page.ts");




const routes = [
    {
        path: '',
        component: _ocr_page__WEBPACK_IMPORTED_MODULE_3__["OcrPage"]
    }
];
let OcrPageRoutingModule = class OcrPageRoutingModule {
};
OcrPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OcrPageRoutingModule);



/***/ }),

/***/ "./src/app/ocr/ocr.module.ts":
/*!***********************************!*\
  !*** ./src/app/ocr/ocr.module.ts ***!
  \***********************************/
/*! exports provided: OcrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcrPageModule", function() { return OcrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ocr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ocr-routing.module */ "./src/app/ocr/ocr-routing.module.ts");
/* harmony import */ var _ocr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ocr.page */ "./src/app/ocr/ocr.page.ts");







let OcrPageModule = class OcrPageModule {
};
OcrPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ocr_routing_module__WEBPACK_IMPORTED_MODULE_5__["OcrPageRoutingModule"]
        ],
        declarations: [_ocr_page__WEBPACK_IMPORTED_MODULE_6__["OcrPage"]]
    })
], OcrPageModule);



/***/ }),

/***/ "./src/app/ocr/ocr.page.scss":
/*!***********************************!*\
  !*** ./src/app/ocr/ocr.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".blue-background {\n  width: 100%;\n  height: 100px;\n  background: var(--ion-color-primary);\n  z-index: 0;\n  bottom: 75%;\n  text-align: center;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n}\n.blue-background .img_preview {\n  height: 290px;\n  width: 90%;\n  margin-top: 28px;\n}\nion-footer ion-row ion-col {\n  padding: 0px;\n}\nion-footer ion-row ion-col ion-button {\n  margin: 0px;\n}\n.btn {\n  color: var(--ion-color-secondary-contrast);\n  margin: 16px;\n}\n.btn_footer {\n  margin: 0px;\n  color: var(--ion-color-secondary-contrast);\n  text-transform: capitalize;\n}\n.select-image {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  max-width: 250px;\n  height: 100%;\n  max-height: 250px;\n  font-size: 4em;\n  border-style: solid;\n  border-radius: 15px;\n  margin: auto;\n  cursor: pointer;\n}\n.image-wrapper {\n  width: 100%;\n}\n.div-logo {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  padding-top: 45px;\n}\n.div-logo .img_logo {\n  height: 100px;\n  background: var(--ion-color-primary);\n  border-radius: 50px;\n  border: 5px solid #fff;\n  box-shadow: 0px 0px 6px #ccc;\n}\n.div-logo .img_logo ion-icon {\n  font-size: 54px;\n  height: 100%;\n}\n.div-logo .img_logo .lbl_dash {\n  font-size: 18px;\n  color: #666;\n  font-family: \"MuliSemiBold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9SZWNib29rL3NyYy9hcHAvb2NyL29jci5wYWdlLnNjc3MiLCJzcmMvYXBwL29jci9vY3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsV0FBQTtFQUNBLGFBQUE7RUFHQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDSEY7QURNRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRFNJO0VBQ0UsWUFBQTtBQ05OO0FET007RUFDRSxXQUFBO0FDTFI7QURVQTtFQUNFLDBDQUFBO0VBQ0EsWUFBQTtBQ1BGO0FEU0E7RUFDRSxXQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtBQ05GO0FEU0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNOTjtBRFFJO0VBQ0UsV0FBQTtBQ0xOO0FEU0k7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDUE47QURVTTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQ1JSO0FEV1E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ1RWO0FEWVE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDVlYiLCJmaWxlIjoic3JjL2FwcC9vY3Ivb2NyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVlLWJhY2tncm91bmR7XG4gIC8vcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgLy90cmFuc2Zvcm06IHJvdGF0ZSg2OGRlZyk7XG4gIC8vYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB6LWluZGV4OiAwO1xuICBib3R0b206IDc1JTtcbiAgLy9sZWZ0OiAxNyU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwcHg7XG4gIC8vYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICNiMWFmYWY7XG5cbiAgLmltZ19wcmV2aWV3e1xuICAgIGhlaWdodDogMjkwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICB9XG59XG5pb24tZm9vdGVye1xuICBpb24tcm93e1xuICAgIGlvbi1jb2x7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBpb24tYnV0dG9ue1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5idG57XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgbWFyZ2luOiAxNnB4O1xufVxuLmJ0bl9mb290ZXJ7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4gICAgLnNlbGVjdC1pbWFnZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWF4LWhlaWdodDogMjUwcHg7XG4gICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuaW1hZ2Utd3JhcHBlciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cblxuICAgIC5kaXYtbG9nb3tcbiAgICAgIC8vYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gICAgICAvL3BhZGRpbmc6IDVweDtcbiAgXG4gICAgICAuaW1nX2xvZ297XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggI2NjYztcbiAgICAgICAgLy9ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcbiAgXG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgIGZvbnQtc2l6ZTogNTRweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5sYmxfZGFzaHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiTXVsaVNlbWlCb2xkXCI7XG4gICAgICAgIH1cbiAgICB9XG4gIH0iLCIuYmx1ZS1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgei1pbmRleDogMDtcbiAgYm90dG9tOiA3NSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNzBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDcwcHg7XG59XG4uYmx1ZS1iYWNrZ3JvdW5kIC5pbWdfcHJldmlldyB7XG4gIGhlaWdodDogMjkwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xufVxuaW9uLWZvb3RlciBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uYnRuIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICBtYXJnaW46IDE2cHg7XG59XG5cbi5idG5fZm9vdGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5zZWxlY3QtaW1hZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMjUwcHg7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltYWdlLXdyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdi1sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG59XG4uZGl2LWxvZ28gLmltZ19sb2dvIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAjY2NjO1xufVxuLmRpdi1sb2dvIC5pbWdfbG9nbyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNTRweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRpdi1sb2dvIC5pbWdfbG9nbyAubGJsX2Rhc2gge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBmb250LWZhbWlseTogXCJNdWxpU2VtaUJvbGRcIjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ocr/ocr.page.ts":
/*!*********************************!*\
  !*** ./src/app/ocr/ocr.page.ts ***!
  \*********************************/
/*! exports provided: OcrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OcrPage", function() { return OcrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_ocr_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ocr/ngx */ "./node_modules/@ionic-native/ocr/ngx/index.js");







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
                buttons: [
                    {
                        text: 'Choose Photo',
                        handler: () => {
                            this.getPicture(0); // 0 == Library
                        }
                    }, {
                        text: 'Take Photo',
                        handler: () => {
                            this.getPicture(1); // 1 == Camera
                        }
                    },
                    // {
                    //   text: 'Demo Photo',
                    //   handler: () => {
                    //     this.srcImage = 'assets/images/keycard.png';
                    //   }
                    // }, 
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
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
        }).then((imageData) => {
            this.srcImage = imageData;
            this.ocr.recText(_ionic_native_ocr_ngx__WEBPACK_IMPORTED_MODULE_6__["OCRSourceType"].BASE64, imageData)
                .then((res) => this.ocrresult = JSON.stringify(res))
                .catch((error) => this.ocrerror = JSON.stringify(error));
        }, (err) => {
            console.log(`ERROR -> ${JSON.stringify(err)}`);
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
    ngOnInit() {
    }
};
OcrPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_native_ocr_ngx__WEBPACK_IMPORTED_MODULE_6__["OCR"] }
];
OcrPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ocr',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ocr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ocr/ocr.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ocr.page.scss */ "./src/app/ocr/ocr.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _ionic_native_ocr_ngx__WEBPACK_IMPORTED_MODULE_6__["OCR"]])
], OcrPage);



/***/ })

}]);
//# sourceMappingURL=ocr-ocr-module-es2015.js.map