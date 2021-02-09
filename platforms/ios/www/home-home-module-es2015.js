(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <!-- <ion-buttons slot=\"start\">\n      <ion-button>\n        <ion-icon name=\"menu\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons> -->\n    <ion-title mode=\"md\" color=\"light\">\n      Dashboard\n    </ion-title>\n      <!-- <ion-buttons slot=\"end\">\n        <ion-button routerLink=\"/ocr\">\n          <ion-icon name=\"camera\" color=\"light\"></ion-icon>\n        </ion-button>\n        <ion-button>\n          <ion-icon name=\"share-social\" color=\"light\"></ion-icon>\n        </ion-button>\n        <ion-button>\n          <ion-icon name=\"filter\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"blue-background\">\n\n    <div class=\"div-logo\" (click)=\"ocr()\">\n      <div class=\"img_logo\">\n        <ion-icon name=\"camera\" color=\"light\"></ion-icon>\n        <ion-label class=\"lbl_dash\">Receipt Scan</ion-label>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- <ion-row class=\"row-card side-spc top-spc\">\n    <ion-col size=\"6\" class=\"col-card\">\n      <ion-card class=\"card-dash\" (click)=\"ocr()\">\n        <div class=\"div-icon\">\n          <ion-icon name=\"camera\" class=\"dash-icon\"></ion-icon>\n        </div>\n        <ion-label class=\"lbl-name\">Receipt Scan</ion-label>\n      </ion-card>\n    </ion-col> -->\n    <ion-row class=\"row-card side-spc top-spc\">\n    <ion-col size=\"6\" class=\"col-card\">\n      <ion-card class=\"card-dash box2\" (click)=\"emailScan()\">\n          <div class=\"div-icon\">\n              <ion-icon name=\"mail\" class=\"dash-icon\"></ion-icon>\n            </div>\n        <ion-label class=\"lbl-name\">Email Scan</ion-label>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col-card\">\n      <ion-card class=\"card-dash\" (click)=\"receipts()\">\n        <div class=\"div-icon\">\n          <ion-icon name=\"receipt\" class=\"dash-icon\"></ion-icon>\n        </div>\n        <ion-label class=\"lbl-name\">All Receipts</ion-label>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class=\"row-card side-spc\">\n    <ion-col size=\"6\" class=\"col-card\">\n      <ion-card class=\"card-dash\" (click)=\"profile()\">\n          <div class=\"div-icon\">\n              <ion-icon name=\"person\" class=\"dash-icon\"></ion-icon>\n            </div>\n        <ion-label class=\"lbl-name\">My Profile</ion-label>\n      </ion-card>\n    </ion-col>\n    <ion-col size=\"6\" class=\"col-card\">\n      <ion-card class=\"card-dash\" (click)=\"logout()\">\n          <div class=\"div-icon\">\n              <ion-icon name=\"lock-closed\" class=\"dash-icon\"></ion-icon>\n            </div>\n        <ion-label class=\"lbl-name\" (click)=\"logout()\">Logout</ion-label>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n\n  <!-- <img src=\"../../assets/images/rcpt2.JPEG\" class=\"chkimg\"/> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  text-align: center;\n}\n\n.blue-background {\n  width: 100%;\n  height: 100px;\n  background: var(--ion-color-primary);\n  z-index: 0;\n  bottom: 75%;\n  text-align: center;\n  border-bottom-left-radius: 70px;\n  border-bottom-right-radius: 70px;\n}\n\n.blue-background .div-logo {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto;\n  border-radius: 50px;\n  padding-top: 45px;\n}\n\n.blue-background .div-logo .img_logo {\n  height: 100px;\n  background: var(--ion-color-primary);\n  border-radius: 50px;\n  border: 5px solid #fff;\n  box-shadow: 0px 0px 6px #ccc;\n}\n\n.blue-background .div-logo .img_logo ion-icon {\n  font-size: 50px;\n  height: 100%;\n}\n\n.blue-background .div-logo .img_logo .lbl_dash {\n  font-size: 14px;\n  color: #666;\n  font-family: \"MuliSemiBold\";\n}\n\n.row-card .col-card .card-dash {\n  margin: 0px;\n  border-radius: 10px;\n  height: 125px;\n  background: var(--ion-color-secondary-contrast);\n  box-shadow: 0px 4px 8px #ccc;\n}\n\n.row-card .col-card .card-dash .div-icon {\n  height: 60px;\n  margin: 0 auto;\n  margin-top: 10px;\n  text-align: center;\n  line-height: 5.2;\n}\n\n.row-card .col-card .card-dash .div-icon .dash-icon {\n  height: 65px;\n  width: 65px;\n  font-size: 70px;\n  color: var(--ion-color-primary);\n}\n\n.row-card .col-card .card-dash .lbl-only {\n  display: block;\n  font-weight: bold;\n  line-height: 5;\n  font-size: 20px;\n  text-align: center;\n}\n\n.row-card .col-card .card-dash .lbl-name {\n  display: block;\n  line-height: 3;\n  font-size: 18px;\n  text-align: center;\n  font-family: \"MuliSemiBold\";\n}\n\n.top-spc {\n  margin-top: 80px;\n}\n\n.side-spc {\n  padding-right: 5px;\n  padding-left: 5px;\n}\n\n.bottom-spc {\n  padding-bottom: 5px;\n}\n\n.chkimg {\n  -webkit-filter: contrast(3) brightness(1) grayscale(1);\n          filter: contrast(3) brightness(1) grayscale(1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWx2ZXJ3ZWJidXp6L0RvY3VtZW50cy9NRC9pb25pY1Byb2plY3QvUmVjYm9vay9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBRUUsV0FBQTtFQUNBLGFBQUE7RUFHQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBRUEsa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDSEY7O0FETUU7RUFFRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUk7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNOTjs7QURTTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDUFI7O0FEVU07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FDUlI7O0FEaUJNO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUVBLCtDQUFBO0VBRUEsNEJBQUE7QUNoQlY7O0FEa0JVO0VBRUksWUFBQTtFQUdBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNuQmQ7O0FEcUJjO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNuQmxCOztBRHNCVTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNwQmQ7O0FEd0JVO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ3ZCZDs7QUQ4QkE7RUFDRSxnQkFBQTtBQzNCRjs7QUQ2QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDMUJGOztBRDRCQTtFQUNFLG1CQUFBO0FDekJGOztBRDRCQTtFQTZJQSxzREFBQTtVQUFBLDhDQUFBO0FDcktBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmx1ZS1iYWNrZ3JvdW5ke1xuICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIC8vdHJhbnNmb3JtOiByb3RhdGUoNjhkZWcpO1xuICAvL2JvcmRlcjogc29saWQgMXB4ICNmMWYxZjE7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgei1pbmRleDogMDtcbiAgYm90dG9tOiA3NSU7XG4gIC8vbGVmdDogMTclO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4O1xuICAvL2JveC1zaGFkb3c6IDBweCA0cHggMTBweCAjYjFhZmFmO1xuXG4gIC5kaXYtbG9nb3tcbiAgICAvL2JhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XG4gICAgLy9wYWRkaW5nOiA1cHg7XG5cbiAgICAuaW1nX2xvZ297XG4gICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNmZmY7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAjY2NjO1xuICAgICAgLy9ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggI2NjYztcblxuICAgICAgaW9uLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAubGJsX2Rhc2h7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk11bGlTZW1pQm9sZFwiO1xuICAgICAgfVxuICB9XG59XG59XG5cbi5yb3ctY2FyZHtcbiAgICAgICAgXG4gIC5jb2wtY2FyZHtcbiAgICAgIC5jYXJkLWRhc2h7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEyNXB4O1xuICAgICAgICAgIC8vY29sb3I6ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICAgICAgLy9ib3gtc2hhZG93OiAwcHggNHB4IDhweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA4cHggI2NjYztcblxuICAgICAgICAgIC5kaXYtaWNvbntcbiAgICAgICAgICAgICAgLy9iYWNrZ3JvdW5kOiAjYzFjZGZmO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICAgIC8vIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1LjI7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAuZGFzaC1pY29ue1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2NXB4O1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDcwcHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sYmwtb25seXtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIC8vY29sb3I6ICMwMDA7XG4gICAgICAgICAgICAgIC8vcGFkZGluZzogMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGJsLW5hbWV7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMztcbiAgICAgICAgICAgICAgLy9mb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTXVsaVNlbWlCb2xkJztcbiAgICAgICAgICAgICAgLy9wYWRkaW5nOiAycHg7XG4gICAgICAgICAgfSAgXG4gICAgICB9XG4gIH1cbn1cblxuLnRvcC1zcGN7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG4uc2lkZS1zcGN7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG4uYm90dG9tLXNwY3tcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNoa2ltZ3tcbiAgLy9maWx0ZXI6IGNvbnRyYXN0KDEpO1xuICAvL2ZpbHRlcjogY29udHJhc3QoMS43NSk7XG4gIC8vZmlsdGVyOiBjb250cmFzdCg1MCUpO1xuICAvL2ZpbHRlcjogY29udHJhc3QoNjUlKTtcbiAgLy9maWx0ZXI6IGNvbnRyYXN0KDIwMCUpO1xuXG4gIC8vZmlsdGVyOiBpbnZlcnQoMCk7XG4gIC8vZmlsdGVyOiBpbnZlcnQoMC4zMCk7XG4gIC8vZmlsdGVyOiBpbnZlcnQoNTAlKTtcbiAgLy9maWx0ZXI6IGludmVydCg3MCUpO1xuICAvL2ZpbHRlcjogaW52ZXJ0KC42KTtcbiAgLy9maWx0ZXI6IGludmVydCgxMDAlKTtcblxuICAvL2ZpbHRlcjogZ3JheXNjYWxlKDAuMjApO1xuICAvL2ZpbHRlcjogZ3JheXNjYWxlKDYwJSk7XG4gIC8vZmlsdGVyOiBncmF5c2NhbGUoMSk7XG4gIC8vZmlsdGVyOiBncmF5c2NhbGUoLjcpO1xuXG4gIC8vIGZpbHRlcjogc2F0dXJhdGUoMSk7XG4gIC8vIGZpbHRlcjogc2F0dXJhdGUoNCk7XG4gIC8vIGZpbHRlcjogc2F0dXJhdGUoNTAlKTtcbiAgLy8gZmlsdGVyOiBzYXR1cmF0ZSgwKTtcbiAgLy8gZmlsdGVyOiBzYXR1cmF0ZSguNCk7XG4gIC8vIGZpbHRlcjogc2F0dXJhdGUoMTAwJSk7XG4gIC8vIGZpbHRlcjogc2F0dXJhdGUoMjAwJSk7XG5cbiAgLy8gZmlsdGVyOiBicmlnaHRuZXNzKDEpO1xuICAvLyBmaWx0ZXI6IGJyaWdodG5lc3MoMS43NSk7XG4gIC8vIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xuICAvLyBmaWx0ZXI6IGJyaWdodG5lc3MoMCk7XG4gIC8vIGZpbHRlcjogYnJpZ2h0bmVzcygwLjQpO1xuICAvLyBmaWx0ZXI6IGJyaWdodG5lc3MoMjAwJSk7XG5cbiAgLy8gZmlsdGVyOiBodWUtcm90YXRlKDApO1xuICAvLyBmaWx0ZXI6IGh1ZS1yb3RhdGUoOTBkZWcpO1xuICAvLyBmaWx0ZXI6IGh1ZS1yb3RhdGUoLTAuMjV0dXJuKTtcbiAgLy8gZmlsdGVyOiBodWUtcm90YXRlKDMuMTQycmFkKTtcbiAgLy8gZmlsdGVyOiBodWUtcm90YXRlKDBkZWcpO1xuICAvLyBmaWx0ZXI6IGh1ZS1yb3RhdGUoOTBkZWcpO1xuICAvLyBmaWx0ZXI6IGh1ZS1yb3RhdGUoLjV0dXJuKTtcbiAgLy8gZmlsdGVyOiBodWUtcm90YXRlKDQwNWRlZyk7XG5cbiAgLy8gZmlsdGVyOiBzZXBpYSgwKTtcbiAgLy8gZmlsdGVyOiBzZXBpYSgwLjIwKTtcbiAgLy8gZmlsdGVyOiBzZXBpYSg2MCUpO1xuICAvLyBmaWx0ZXI6IHNlcGlhKDEpO1xuICAvLyBmaWx0ZXI6IHNlcGlhKDAuNjUpO1xuICAvLyBmaWx0ZXI6IHNlcGlhKDEwMCUpO1xuXG4gIC8vIGZpbHRlcjogc2F0dXJhdGUoMyk7XG4gIC8vIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuICAvLyBmaWx0ZXI6IGNvbnRyYXN0KDE2MCUpO1xuXG4gICAgLy8gZmlsbDogIzAwMDtcbiAgICAvLyBzdHJva2U6ICMwMDA7XG4gICAgLy8gc3Ryb2tlLXdpZHRoOiAxMHB4O1xuXG4gICAgLy9maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSkgaW52ZXJ0KDEpO1xuXG4gICAgLy8gLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbiAgICAvLyBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcblxuICAgIC8vIGZpbHRlcjpjb250cmFzdCgxLjEwKSBncmF5c2NhbGUoMTAwJSk7XG5cbiAgICAvLyBmaWx0ZXI6Y29udHJhc3QoMSkgZ3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMTAwJSk7XG5cbiAgICAvLyBmaWx0ZXI6Y29udHJhc3QoMSkgZ3JheXNjYWxlKDEwMCUpIGJyaWdodG5lc3MoMTAwJSkgc2F0dXJhdGUoOCk7XG5cbiAgICAvLyBmaWx0ZXI6IGdyYXk7XG4gICAgLy8gZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG5cbiAgLy8gICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuICAvLyBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcbiAgLy8gLXdlYmtpdC1maWx0ZXI6IHNhdHVyYXRlKDgpO1xuICAvLyBmaWx0ZXI6IHNhdHVyYXRlKDgpO1xuICAvLyAtd2Via2l0LWZpbHRlcjogaW52ZXJ0KC44KTtcbiAgLy8gZmlsdGVyOiBpbnZlcnQoLjgpO1xuICAvLyAtd2Via2l0LWZpbHRlcjogY29udHJhc3QoNCk7XG4gIC8vIGZpbHRlcjogY29udHJhc3QoNCk7XG5cbiAgLy8gZmlsdGVyOiBncmF5OyBcbiAgLy8gICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpOyBcbiAgLy8gICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyBcbiAgLy8gICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgXG5cbi8vIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyBcbi8vIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7IFxuLy8gLW1vei1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbi8vIC1tcy1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgXG4vLyAtby1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbi8vIGZpbHRlcjogZ3JheTtcblxuLy8gZmlsdGVyOiBncmF5OyBcbi8vICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpOyBcblxuLy8gLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxKTtcbi8vIFx0LXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbi8vIFx0ZmlsdGVyOiBncmF5O1xuLy8gXHRmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcblxuLy8gZmlsdGVyOiBjb250cmFzdCgxMDAwJSkgaW52ZXJ0KDEwMCUpIHNlcGlhKDEwMCUpIHNhdHVyYXRlKDEwMDAwJSkgaHVlLXJvdGF0ZSg5MGRlZyk7XG5cbi8vIGZpbHRlcjogZ3JheSBzYXR1cmF0ZSgwJSkgYnJpZ2h0bmVzcyg3MCUpIGNvbnRyYXN0KDEwMDAlKTtcblxuLy8gLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgXG4vLyAgIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuXG4vLyAtby1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbi8vIC1tb3otZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4vLyAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuLy8gZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG5cbi8vIC13ZWJraXQtZmlsdGVyOiBncmF5c2NhbGUoMSk7IFxuLy8gICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuLy8gICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuLy8gICAtbXMtZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XG4vLyAgIC1vLWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuLy8gICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbi8vICAgZmlsdGVyOiBncmF5O1xuXG4vLyAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEpO1xuLy8gICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpO1xuLy8gICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcbi8vICAgZmlsdGVyOiB1cmwoI2dyZXlzY2FsZSk7XG4vLyAgIGZpbHRlcjogZ3JheTtcblxuLy8gQHN1cHBvcnRzICgoLXdlYmtpdC1maWx0ZXI6IGludmVydCgxKSkgb3IgKGZpbHRlcjogaW52ZXJ0KDEpKSkgYW5kIChiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRpZmZlcmVuY2UsIHNjcmVlbikge1xuLy8gICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG4vLyAgIC13ZWJraXQtZmlsdGVyOiBicmlnaHRuZXNzKDEpIGludmVydCgwKSBncmF5c2NhbGUoMSk7XG4vLyAgIGZpbHRlcjogYnJpZ2h0bmVzcygxKSBpbnZlcnQoMCkgZ3JheXNjYWxlKDEpO1xuLy8gICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggYmxhY2s7XG4vLyB9XG4vLyBAc3VwcG9ydHMgKCgtd2Via2l0LWZpbHRlcjogaW52ZXJ0KDEpKSBvciAoZmlsdGVyOiBpbnZlcnQoMSkpKSBhbmQgKG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseSkge1xuLy8gICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcygxKSBpbnZlcnQoMSkgZ3JheXNjYWxlKDApO1xuLy8gICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XG4vLyAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMSkgaW52ZXJ0KDEpIGdyYXlzY2FsZSgwKTtcbi8vICAgICAgIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbi8vICAgIH1cbi8vIH1cblxuZmlsdGVyOiBjb250cmFzdCgzKSBicmlnaHRuZXNzKDEpIGdyYXlzY2FsZSgxKTtcblxuLy8gQHN1cHBvcnRzIChmaWx0ZXI6IGludmVydCgwKSkgYW5kIChiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGRpZmZlcmVuY2UsIHNjcmVlbikge1xuLy8gICAvLyAuZW1ib3NzLWVmZmVjdCB7XG4vLyAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlLCBzY3JlZW47XG4vLyAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDEpIGludmVydCgwKSBncmF5c2NhbGUoMSkgY29udHJhc3QoMSk7XG4vLyAgIC8vIH1cbi8vIH1cblxufSIsImlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJsdWUtYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHotaW5kZXg6IDA7XG4gIGJvdHRvbTogNzUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDcwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA3MHB4O1xufVxuLmJsdWUtYmFja2dyb3VuZCAuZGl2LWxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBwYWRkaW5nLXRvcDogNDVweDtcbn1cbi5ibHVlLWJhY2tncm91bmQgLmRpdi1sb2dvIC5pbWdfbG9nbyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggI2NjYztcbn1cbi5ibHVlLWJhY2tncm91bmQgLmRpdi1sb2dvIC5pbWdfbG9nbyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJsdWUtYmFja2dyb3VuZCAuZGl2LWxvZ28gLmltZ19sb2dvIC5sYmxfZGFzaCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlTZW1pQm9sZFwiO1xufVxuXG4ucm93LWNhcmQgLmNvbC1jYXJkIC5jYXJkLWRhc2gge1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxMjVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggOHB4ICNjY2M7XG59XG4ucm93LWNhcmQgLmNvbC1jYXJkIC5jYXJkLWRhc2ggLmRpdi1pY29uIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNS4yO1xufVxuLnJvdy1jYXJkIC5jb2wtY2FyZCAuY2FyZC1kYXNoIC5kaXYtaWNvbiAuZGFzaC1pY29uIHtcbiAgaGVpZ2h0OiA2NXB4O1xuICB3aWR0aDogNjVweDtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLnJvdy1jYXJkIC5jb2wtY2FyZCAuY2FyZC1kYXNoIC5sYmwtb25seSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJvdy1jYXJkIC5jb2wtY2FyZCAuY2FyZC1kYXNoIC5sYmwtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMztcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk11bGlTZW1pQm9sZFwiO1xufVxuXG4udG9wLXNwYyB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi5zaWRlLXNwYyB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbi5ib3R0b20tc3BjIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNoa2ltZyB7XG4gIGZpbHRlcjogY29udHJhc3QoMykgYnJpZ2h0bmVzcygxKSBncmF5c2NhbGUoMSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _global_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/common_service */ "./src/app/global/common_service.ts");






let HomePage = class HomePage {
    constructor(statusBar, router, alertCtrl, menuCtrl, api) {
        this.statusBar = statusBar;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.api = api;
        this.id = localStorage.getItem("id");
    }
    ionViewWillEnter() {
        this.statusBar.show();
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#989aa2');
    }
    receipts() {
        this.router.navigate(['/receipts']);
    }
    profile() {
        this.router.navigate(['/profile']);
    }
    emailScan() {
        // this.router.navigate(['/email-scan']);
        console.log('Scanned Email Receipts');
    }
    ocr() {
        this.router.navigate(['/ocr']);
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var body = {
                ID: this.id
            };
            this.menuCtrl.close();
            const alert = yield this.alertCtrl.create({
                mode: 'md',
                header: 'Confirm !',
                message: 'Are you sure you want to logout ?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                    }, {
                        text: 'Logout',
                        handler: () => {
                            let log = this.api.logout(body);
                            if (log) {
                                localStorage.removeItem("id");
                                localStorage.removeItem("token");
                                this.router.navigate(['/signin']);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _global_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map