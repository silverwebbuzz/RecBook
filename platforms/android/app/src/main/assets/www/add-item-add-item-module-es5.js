(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-item-add-item-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddItemAddItemPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header mode=\"md\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon size=\"large\" name=\"arrow-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title mode=\"md\" color=\"light\">\n      Add Item\n    </ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button>\n          <ion-icon size=\"large\" name=\"checkmark-sharp\" color=\"light\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Item Name\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Qty\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Rate\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"none\" class=\"input-item add space\">\n    <ion-input type=\"text\" placeholder=\"Amount\" class=\"input-box\"></ion-input>\n  </ion-item>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/add-item/add-item-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/add-item/add-item-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AddItemPageRoutingModule */

  /***/
  function srcAppAddItemAddItemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddItemPageRoutingModule", function () {
      return AddItemPageRoutingModule;
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


    var _add_item_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-item.page */
    "./src/app/add-item/add-item.page.ts");

    const routes = [{
      path: '',
      component: _add_item_page__WEBPACK_IMPORTED_MODULE_3__["AddItemPage"]
    }];
    let AddItemPageRoutingModule = class AddItemPageRoutingModule {};
    AddItemPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddItemPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/add-item/add-item.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/add-item/add-item.module.ts ***!
    \*********************************************/

  /*! exports provided: AddItemPageModule */

  /***/
  function srcAppAddItemAddItemModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddItemPageModule", function () {
      return AddItemPageModule;
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


    var _add_item_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-item-routing.module */
    "./src/app/add-item/add-item-routing.module.ts");
    /* harmony import */


    var _add_item_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-item.page */
    "./src/app/add-item/add-item.page.ts");

    let AddItemPageModule = class AddItemPageModule {};
    AddItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_item_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddItemPageRoutingModule"]],
      declarations: [_add_item_page__WEBPACK_IMPORTED_MODULE_6__["AddItemPage"]]
    })], AddItemPageModule);
    /***/
  },

  /***/
  "./src/app/add-item/add-item.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/add-item/add-item.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddItemAddItemPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-item {\n  --inner-padding-end: 0px;\n  --padding-start: 4px;\n  padding: 0px 8px 0px 8px;\n  box-shadow: 0px 1px 6px #ccc;\n  margin: 16px 16px 0px 16px;\n}\n.input-item ion-icon {\n  color: var(--ion-color-medium);\n  font-size: 24px;\n}\n.input-item .input-box {\n  margin-left: 8px;\n}\n.input-item ion-textarea {\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWNtaW5pL0Rlc2t0b3AvRG9jdW1lbnRzL01EL2lvbmljUHJvamVjdC9SZWNib29rL3NyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0ucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtaXRlbS9hZGQtaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0FDQUo7QURJSTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FES0k7RUFFSSxnQkFBQTtBQ0pSO0FEU0k7RUFFSSxnQkFBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWl0ZW17XG4gICAgLy8tLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggI2NjYztcbiAgICBtYXJnaW46IDE2cHggMTZweCAwcHggMTZweDtcbiAgICAvL2JvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvL21hcmdpbi10b3A6IDE0cHg7XG5cbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuXG4gICAgLmlucHV0LWJveHtcbiAgICAgICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgLy8tLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgICAvLy0tY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgaW9uLXRleHRhcmVhe1xuICAgICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAvLy0tcGxhY2Vob2xkZXItY29sb3I6ICNmZmY7XG4gICAgICAgIC8vLS1jb2xvcjogI2ZmZjtcbiAgICB9XG59IiwiLmlucHV0LWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogNHB4O1xuICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNnB4ICNjY2M7XG4gIG1hcmdpbjogMTZweCAxNnB4IDBweCAxNnB4O1xufVxuLmlucHV0LWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5pbnB1dC1pdGVtIC5pbnB1dC1ib3gge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmlucHV0LWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/add-item/add-item.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/add-item/add-item.page.ts ***!
    \*******************************************/

  /*! exports provided: AddItemPage */

  /***/
  function srcAppAddItemAddItemPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddItemPage", function () {
      return AddItemPage;
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

    let AddItemPage = class AddItemPage {
      constructor(navCtrl) {
        this.navCtrl = navCtrl;
      }

      ngOnInit() {}

      back() {
        this.navCtrl.pop();
      }

    };

    AddItemPage.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
    }];

    AddItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-item',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-item.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-item.page.scss */
      "./src/app/add-item/add-item.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])], AddItemPage);
    /***/
  }
}]);
//# sourceMappingURL=add-item-add-item-module-es5.js.map