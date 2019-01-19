(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _watchlectures_watchlectures_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watchlectures/watchlectures.component */ "./src/app/watchlectures/watchlectures.component.ts");
/* harmony import */ var _uploadvids_uploadvids_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uploadvids/uploadvids.component */ "./src/app/uploadvids/uploadvids.component.ts");
/* harmony import */ var _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./howitworks/howitworks.component */ "./src/app/howitworks/howitworks.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _watchocob_watchocob_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./watchocob/watchocob.component */ "./src/app/watchocob/watchocob.component.ts");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contribute/contribute.component */ "./src/app/contribute/contribute.component.ts");









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'howitworks', component: _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_5__["HowitworksComponent"] },
    { path: 'watchlectures', component: _watchlectures_watchlectures_component__WEBPACK_IMPORTED_MODULE_3__["WatchlecturesComponent"] },
    { path: 'uploadvids', component: _uploadvids_uploadvids_component__WEBPACK_IMPORTED_MODULE_4__["UploadvidsComponent"] },
    { path: 'watchocob', component: _watchocob_watchocob_component__WEBPACK_IMPORTED_MODULE_7__["WatchocobComponent"] },
    { path: 'contribute', component: _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_8__["ContributeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n\r\n\r\n<section>\r\n  <router-outlet></router-outlet>\r\n</section>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'captionthis';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./howitworks/howitworks.component */ "./src/app/howitworks/howitworks.component.ts");
/* harmony import */ var _watchlectures_watchlectures_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./watchlectures/watchlectures.component */ "./src/app/watchlectures/watchlectures.component.ts");
/* harmony import */ var _uploadvids_uploadvids_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uploadvids/uploadvids.component */ "./src/app/uploadvids/uploadvids.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _watchocob_watchocob_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./watchocob/watchocob.component */ "./src/app/watchocob/watchocob.component.ts");
/* harmony import */ var _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contribute/contribute.component */ "./src/app/contribute/contribute.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _howitworks_howitworks_component__WEBPACK_IMPORTED_MODULE_6__["HowitworksComponent"],
                _watchlectures_watchlectures_component__WEBPACK_IMPORTED_MODULE_7__["WatchlecturesComponent"],
                _uploadvids_uploadvids_component__WEBPACK_IMPORTED_MODULE_8__["UploadvidsComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _watchocob_watchocob_component__WEBPACK_IMPORTED_MODULE_12__["WatchocobComponent"],
                _contribute_contribute_component__WEBPACK_IMPORTED_MODULE_13__["ContributeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contribute/contribute.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contribute/contribute.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headings {\r\n  padding: 35px;\r\n  color: rgb(0, 156, 252);\r\n  font-size: 25px;\r\n}\r\n\r\n#greybox {\r\n  background-color: rgb(230, 228, 228) ;\r\n  padding-bottom: 500px;\r\n  border-top: 3px solid  rgb(0, 156, 252); \r\n  margin-top: 30px;\r\n}\r\n\r\ninput[type=range] {\r\n  -webkit-appearance: none;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=range]:focus {\r\n  outline: none;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 12.8px;\r\n  cursor: pointer;\r\n  animate: 0.2s;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  background: #5ab8e0;\r\n  border-radius: 25px;\r\n  border: 0px solid #000101;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  border: 0px solid #000000;\r\n  height: 20px;\r\n  width: 39px;\r\n  border-radius: 7px;\r\n  background: #360dff;\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n  margin-top: -3.6px;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n  background: #5ab8e0;\r\n}\r\n\r\ninput[type=range]::-moz-range-track {\r\n  width: 100%;\r\n  height: 12.8px;\r\n  cursor: pointer;\r\n  animate: 0.2s;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  background: #5ab8e0;\r\n  border-radius: 25px;\r\n  border: 0px solid #000101;\r\n}\r\n\r\ninput[type=range]::-moz-range-thumb {\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  border: 0px solid #000000;\r\n  height: 20px;\r\n  width: 39px;\r\n  border-radius: 7px;\r\n  background: #360dff;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=range]::-ms-track {\r\n  width: 100%;\r\n  height: 12.8px;\r\n  cursor: pointer;\r\n  animate: 0.2s;\r\n  background: transparent;\r\n  border-color: transparent;\r\n  border-width: 39px 0;\r\n  color: transparent;\r\n}\r\n\r\ninput[type=range]::-ms-fill-lower {\r\n  background: #5ab8e0;\r\n  border: 0px solid #000101;\r\n  border-radius: 50px;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n}\r\n\r\ninput[type=range]::-ms-fill-upper {\r\n  background: #5ab8e0;\r\n  border: 0px solid #000101;\r\n  border-radius: 50px;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n}\r\n\r\ninput[type=range]::-ms-thumb {\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  border: 0px solid #000000;\r\n  height: 20px;\r\n  width: 39px;\r\n  border-radius: 7px;\r\n  background: #360dff;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-lower {\r\n  background: #5ab8e0;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-upper {\r\n  background: #5ab8e0;\r\n}\r\n\r\nbody {\r\n  padding: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJpYnV0ZS9jb250cmlidXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGdCQUFnQjtDQUNqQjs7QUFFRDtFQUNFLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsWUFBWTtDQUNiOztBQUNEO0VBQ0UsY0FBYztDQUNmOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFEQUFxRDtFQUNyRCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtDQUMzQjs7QUFDRDtFQUNFLHFEQUFxRDtFQUNyRCwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFEQUFxRDtFQUNyRCxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtDQUMzQjs7QUFDRDtFQUNFLHFEQUFxRDtFQUNyRCwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtDQUNqQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixtQkFBbUI7Q0FDcEI7O0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixxREFBcUQ7Q0FDdEQ7O0FBQ0Q7RUFDRSxvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixxREFBcUQ7Q0FDdEQ7O0FBQ0Q7RUFDRSxxREFBcUQ7RUFDckQsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBQ0Q7RUFDRSxvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb250cmlidXRlL2NvbnRyaWJ1dGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ncyB7XHJcbiAgcGFkZGluZzogMzVweDtcclxuICBjb2xvcjogcmdiKDAsIDE1NiwgMjUyKTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbiNncmV5Ym94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMjgsIDIyOCkgO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MDBweDtcclxuICBib3JkZXItdG9wOiAzcHggc29saWQgIHJnYigwLCAxNTYsIDI1Mik7IFxyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFuZ2VdIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEyLjhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYW5pbWF0ZTogMC4ycztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwLCAwcHggMHB4IDBweCAjMGQwZDBkO1xyXG4gIGJhY2tncm91bmQ6ICM1YWI4ZTA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjMDAwMTAxO1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMCwgMHB4IDBweCAwcHggIzBkMGQwZDtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMzlweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYmFja2dyb3VuZDogIzM2MGRmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbi10b3A6IC0zLjZweDtcclxufVxyXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICM1YWI4ZTA7XHJcbn1cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2sge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTIuOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBhbmltYXRlOiAwLjJzO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDAsIDBweCAwcHggMHB4ICMwZDBkMGQ7XHJcbiAgYmFja2dyb3VuZDogIzVhYjhlMDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICMwMDAxMDE7XHJcbn1cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDAsIDBweCAwcHggMHB4ICMwZDBkMGQ7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwMDAwMDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDM5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJhY2tncm91bmQ6ICMzNjBkZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTIuOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBhbmltYXRlOiAwLjJzO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAzOXB4IDA7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC1sb3dlciB7XHJcbiAgYmFja2dyb3VuZDogIzVhYjhlMDtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjMDAwMTAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMCwgMHB4IDBweCAwcHggIzBkMGQwZDtcclxufVxyXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtdXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1YWI4ZTA7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwMDEwMTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDAsIDBweCAwcHggMHB4ICMwZDBkMGQ7XHJcbn1cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10aHVtYiB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMCwgMHB4IDBweCAwcHggIzBkMGQwZDtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjMDAwMDAwO1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMzlweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYmFja2dyb3VuZDogIzM2MGRmZjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLWxvd2VyIHtcclxuICBiYWNrZ3JvdW5kOiAjNWFiOGUwO1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC11cHBlciB7XHJcbiAgYmFja2dyb3VuZDogIzVhYjhlMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZzogMzBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/contribute/contribute.component.html":
/*!******************************************************!*\
  !*** ./src/app/contribute/contribute.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\" dir=\"ltr\">\r\n    <body>\r\n        <div id=\"greybox\">\r\n            <p><b class=\"headings\">ADD CAPTIONS</b></p> \r\n        <video width=\"480\" height=\"360\" controls>\r\n            <source src=\"https://github.com/ameru/caption-this/blob/master/angular/images%20and%20logos/samplevideo.MOV?raw=true\" type=\"video/mp4\">\r\n        </video>\r\n        <div>\r\n            <input type=\"range\">\r\n        </div>\r\n        </div>\r\n    </body>\r\n        \r\n</html>"

/***/ }),

/***/ "./src/app/contribute/contribute.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contribute/contribute.component.ts ***!
  \****************************************************/
/*! exports provided: ContributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeComponent", function() { return ContributeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContributeComponent = /** @class */ (function () {
    function ContributeComponent() {
    }
    ContributeComponent.prototype.ngOnInit = function () {
    };
    ContributeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contribute',
            template: __webpack_require__(/*! ./contribute.component.html */ "./src/app/contribute/contribute.component.html"),
            styles: [__webpack_require__(/*! ./contribute.component.css */ "./src/app/contribute/contribute.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContributeComponent);
    return ContributeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headings {\r\n    padding: 35px;\r\n    color: rgb(0, 156, 252);\r\n    font-size: 25px;\r\n}\r\n\r\n#greybox {\r\n    background-color: rgb(230, 228, 228) ;\r\n    padding-bottom: 100px;\r\n    border-top: 3px solid  rgb(0, 156, 252); \r\n    margin-top: 30px;\r\n  }\r\n\r\n.buttons button,\r\n.buttons a {\r\n  margin-right: 8px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n.searchbycollege {\r\n    margin-top: 100px;\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n  }\r\n\r\n.searchbycollege {\r\n    width: 95%;\r\n    background-color: rgb(0, 156, 252); ;\r\n    overflow: auto;\r\n    margin-top: 25px;\r\n    margin-right: 25px #153ef7e9;\r\n  }\r\n\r\n.searchbycollege a {\r\n    float: left;\r\n    padding: 15px;\r\n    font-weight: bold;\r\n    color: rgb(255, 255, 255);\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    width: 31.13%; \r\n    text-align: center;\r\n  }\r\n\r\n/* Add a background color on hover */\r\n\r\n.searchbycollege a:hover {\r\n    background-color: #153ef7e9;\r\n  }\r\n\r\n.slider {\r\n    width: 800px;\r\n    height: 450px;\r\n    margin-left: 300px;\r\n    display: flex;\r\n    overflow-x: auto;\r\n    -ms-scroll-snap-type: y mandatory;\r\n        scroll-snap-type: y mandatory;\r\n  }\r\n\r\n.slide {\r\n    width: 800px;\r\n    flex-shrink: 0;\r\n    height: 100%;\r\n    background-color: blue;\r\n    scroll-snap-align: center;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtHQUNsQjs7QUFFSDs7RUFFRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFdBQVc7R0FDWjs7QUFFSDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0dBQ3BCOztBQUVIO0lBQ0ksV0FBVztJQUNYLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDZCQUE2QjtHQUM5Qjs7QUFFSDtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7R0FDcEI7O0FBRUgscUNBQXFDOztBQUNyQztJQUNJLDRCQUE0QjtHQUM3Qjs7QUFFRDtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0NBQThCO1FBQTlCLDhCQUE4QjtHQUMvQjs7QUFDRDtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QiwwQkFBMEI7R0FDM0IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkaW5ncyB7XHJcbiAgICBwYWRkaW5nOiAzNXB4O1xyXG4gICAgY29sb3I6IHJnYigwLCAxNTYsIDI1Mik7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbiNncmV5Ym94IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIyOCwgMjI4KSA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIHJnYigwLCAxNTYsIDI1Mik7IFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4uYnV0dG9ucyBidXR0b24sXHJcbi5idXR0b25zIGEge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbi5zZWFyY2hieWNvbGxlZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9XHJcblxyXG4uc2VhcmNoYnljb2xsZWdlIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTU2LCAyNTIpOyA7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHggIzE1M2VmN2U5O1xyXG4gIH1cclxuXHJcbi5zZWFyY2hieWNvbGxlZ2UgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB3aWR0aDogMzEuMTMlOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4vKiBBZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXHJcbi5zZWFyY2hieWNvbGxlZ2UgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUzZWY3ZTk7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyIHtcclxuICAgIHdpZHRoOiA4MDBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xyXG4gIH1cclxuICAuc2xpZGUge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html> \r\n    <head> \r\n        <title>Home Page</title> \r\n    </head> \r\n    <body> \r\n        <div id=\"greybox\">\r\n            <p><b class=\"headings\">RECOMMENDED VIDEOS</b></p> \r\n\r\n            <div class=\"slide-wrap\">\r\n                  \r\n                    <div class=\"slider\">\r\n                        <div class=\"slide\" id=\"slide-1\"> <h2>Avatar</h2> </div>\r\n                        <div class=\"slide\" id=\"slide-2\">  <h2>Hi</h2> </div>\r\n                      <div class=\"slide\" id=\"slide-3\">3</div>\r\n                      <div class=\"slide\" id=\"slide-4\">4</div>\r\n                      <div class=\"slide\" id=\"slide-5\">5</div>\r\n                    </div>\r\n\r\n            </div>\r\n\r\n            <p><b class=\"headings\">BROWSE BY COLLEGE</b></p> \r\n            <header>\r\n                <div class=\"searchbycollege\">\r\n                <nav>\r\n                    <ul>\r\n                    <li><a routerLink=\"/watchlectures\">CLA</a></li>\r\n                    <li><a routerLink=\"/watchlectures\">CAFES</a></li>\r\n                    <li><a routerLink=\"/watchocob\">OCOB</a></li>\r\n                    <li><a routerLink=\"/watchlectures\">CENG</a></li>\r\n                    <li><a routerLink=\"/watchlectures\">COSAM</a></li>\r\n                    <li><a routerLink=\"/watchlectures\">CAED</a></li>\r\n                    </ul>\r\n                </nav>\r\n                </div>\r\n            </header>\r\n        </div> \r\n    </body> \r\n</html> "

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/howitworks/howitworks.component.css":
/*!*****************************************************!*\
  !*** ./src/app/howitworks/howitworks.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headings {\r\n    padding: 35px;\r\n    color: rgb(0, 156, 252);\r\n    font-size: 25px;\r\n}\r\n\r\n#greybox {\r\n    background-color: rgb(230, 228, 228) ;\r\n    padding-bottom: 200;\r\n    border-top: 3px solid  rgb(0, 156, 252); \r\n    margin-top: 30px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93aXR3b3Jrcy9ob3dpdHdvcmtzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNDQUFzQztJQUN0QyxvQkFBb0I7SUFDcEIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtHQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvd2l0d29ya3MvaG93aXR3b3Jrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdzIHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE1NiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuI2dyZXlib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjI4LCAyMjgpIDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMDA7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIHJnYigwLCAxNTYsIDI1Mik7IFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/howitworks/howitworks.component.html":
/*!******************************************************!*\
  !*** ./src/app/howitworks/howitworks.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<html lang=\"en\" dir=\"ltr\">\r\n<<<<<<< HEAD\r\n    <head>\r\n        <div style=\"width:300px;height:150px;overflow:hidden;\">\r\n        <img src=\"https://github.com/ameru/caption-this/blob/master/angular/images%20and%20logos/caption-this-logo.png?raw=true\" width=\"300px\" height=\"auto\" alt=\"Caption This!\" id=\"logo\">\r\n        </div>\r\n        <div style=\"width:100px;height:100px;overflow:hidden;\">\r\n            <img src=\"https://github.com/ameru/caption-this/blob/master/angular/images%20and%20logos/cph-profile.png?raw=true\" width=\"100px\" height=\"auto\" alt=\"profile\" id=\"profile\">\r\n        </div>\r\n        <form>\r\n            <label for=\"profile\">Hello, TeamWork</label>\r\n            <select id=\"my profile\" name=\"my profile\">\r\n                <option value=\"profile\"> </option>\r\n                <option value=\"profile\">My Profile</option>\r\n                <option value=\"logout\"> Log Out</option>\r\n            </select>\r\n        </form>\r\n    </head>\r\n    <body>\r\n        <h2>So... what is \"Caption This\"?</h2>\r\n        <p>\r\n            \"Caption This!\" is a website application that aids hearing impaired students in understanding course materials. The website will be an open-source platform where students can upload videos of lectures and students can contribute close-captioning to these videos, where they will then be utilized by their hearing impaired peers.\r\n        </p>\r\n        <h3>How It Works:</h3>\r\n            <ol>\r\n                <li>Students will be notified through the Disabilities Resource Center (DRC) if there is a student in their class that has a hearing impairment.</li>\r\n                <li>Once given the professor's permission, students in that class will have the ability to videotape the lecture and upload it onto the web app.</li>\r\n                <li>Anyone in the community can add closed captions to the video (they can caption the entire 2 hours, or choose to caption only 2 minutes)</li>\r\n                <li>The closed captions will be flagged for a moderator to review.</li>\r\n                <li>Once approved, the moderator will indicate that the video has closed captions, and students with disabilities are free to watch the video!</li>\r\n                <li>After watching the lecture, students will then be able to rate the quality of the closed caption video on a 5-star scale.</li>\r\n                <li>If a video is rated less than 3 stars, the moderator will flag the video and open the video up for a re-caption.</li>\r\n                <li>In the event that a lecture does not have closed captioning, a speech-to-text function will be implemented, until it can be replaced with closed captioning.</li>\r\n            </ol>\r\n    </body>\r\n </html>\r\n=======\r\n    <div id=\"greybox\">\r\n        <p><b class=\"headings\">So... what is \"Caption This\"?</b></p> \r\n        <body>\r\n            <p>\r\n                \"Caption This!\" is a website application that aids hearing impaired students in understanding course materials. The website will be an open-source platform where students can upload videos of lectures and students can contribute close-captioning to these videos, where they will then be utilized by their hearing impaired peers.\r\n            </p>\r\n            <p><b class=\"headings\">How It Works:</b></p> \r\n            <!-- <p> -->\r\n                <ol>\r\n                    <li>Students will be notified through the Disabilities Resource Center (DRC) if there is a student in their class that has a hearing impairment.</li>\r\n                    <li>Once given the professor's permission, students in that class will have the ability to videotape the lecture and upload it onto the web app.</li>\r\n                    <li>Anyone in the community can add closed captions to the video (they can caption the entire 2 hours, or choose to caption only 2 minutes)</li>\r\n                    <li>The closed captions will be flagged for a moderator to review.</li>\r\n                    <li>Once approved, the moderator will indicate that the video has closed captions, and students with disabilities are free to watch the video!</li>\r\n                    <li>After watching the lecture, students will then be able to rate the quality of the closed caption video on a 5-star scale.</li>\r\n                    <li>If a video is rated less than 3 stars, the moderator will flag the video and open the video up for a re-caption.</li>\r\n                    <li>In the event that a lecture does not have closed captioning, a speech-to-text function will be implemented, until it can be replaced with closed captioning.</li>\r\n                </ol>\r\n            <!-- </p> -->\r\n        </body>\r\n        </div>\r\n </html>\r\n>>>>>>> 7595ff96f774b59764ae10a4c80750438ae2aaf4\r\n"

/***/ }),

/***/ "./src/app/howitworks/howitworks.component.ts":
/*!****************************************************!*\
  !*** ./src/app/howitworks/howitworks.component.ts ***!
  \****************************************************/
/*! exports provided: HowitworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowitworksComponent", function() { return HowitworksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowitworksComponent = /** @class */ (function () {
    function HowitworksComponent() {
    }
    HowitworksComponent.prototype.ngOnInit = function () {
    };
    HowitworksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-howitworks',
            template: __webpack_require__(/*! ./howitworks.component.html */ "./src/app/howitworks/howitworks.component.html"),
            styles: [__webpack_require__(/*! ./howitworks.component.css */ "./src/app/howitworks/howitworks.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowitworksComponent);
    return HowitworksComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n.navbar {\r\n    margin-top: 10px;\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n  }\r\n\r\n/* Style the navigation menu */\r\n\r\n.navbar {\r\n    width: 95%;\r\n    background-color: #e05523e9;\r\n    overflow: auto;\r\n  }\r\n\r\n/* Navigation links */\r\n\r\n.navbar a {\r\n    float: left;\r\n    padding: 15px;\r\n    font-weight: bold;\r\n    color: rgb(255, 255, 255);\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    width: 17.8%; \r\n    text-align: center;\r\n\r\n  }\r\n\r\n/* Add a background color on hover */\r\n\r\n.navbar a:hover {\r\n    background-color: rgba(253, 167, 121, 0.982);\r\n  }\r\n\r\n/* Style the current/active link ??? */\r\n\r\n.nav a.active {\r\n    background-color: rgb(240, 120, 120);\r\n    color: #444;\r\n    cursor: default;\r\n  }\r\n\r\n/* Add responsiveness - on screens less than 500px, make the navigation links appear on top of each other, instead of next to each other */\r\n\r\n@media screen and (max-width: 500px) {\r\n    .navbar a {\r\n      float: none;\r\n      display: block;\r\n      width: 100%;\r\n      text-align: left; /* If you want the text to be left-aligned on small screens */\r\n    }\r\n  }\r\n\r\n#myprofile a {\r\n  background-color: grey;\r\n}\r\n\r\n.logo{\r\n  flex: 70%;\r\n  margin-left: 20px;\r\n}\r\n\r\n.right{\r\n  flex: 30%;\r\n}\r\n\r\n.profilepic{\r\n  float:right;\r\n  margin-top: 30px;\r\n  height: 60px;\r\n}\r\n\r\n.dropdown{\r\n  float:right;\r\n  margin-top:50px;\r\n}\r\n\r\n.container{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n#something{\r\n  display: flex;\r\n  float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0dBQ1o7O0FBRUg7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtHQUNwQjs7QUFFSCwrQkFBK0I7O0FBQy9CO0lBQ0ksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixlQUFlO0dBQ2hCOztBQUdILHNCQUFzQjs7QUFDdEI7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1COztHQUVwQjs7QUFFSCxxQ0FBcUM7O0FBQ3JDO0lBQ0ksNkNBQTZDO0dBQzlDOztBQUVELHVDQUF1Qzs7QUFDekM7SUFDSSxxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGdCQUFnQjtHQUNqQjs7QUFFSCwySUFBMkk7O0FBQzNJO0lBQ0k7TUFDRSxZQUFZO01BQ1osZUFBZTtNQUNmLFlBQVk7TUFDWixpQkFBaUIsQ0FBQyw4REFBOEQ7S0FDakY7R0FDRjs7QUFFSDtFQUNFLHVCQUF1QjtDQUN4Qjs7QUFFRDtFQUNFLFVBQVU7RUFDVixrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxVQUFVO0NBQ1g7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgfVxyXG5cclxuLyogU3R5bGUgdGhlIG5hdmlnYXRpb24gbWVudSAqL1xyXG4ubmF2YmFyIHtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA1NTIzZTk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcblxyXG5cclxuLyogTmF2aWdhdGlvbiBsaW5rcyAqL1xyXG4ubmF2YmFyIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgd2lkdGg6IDE3LjglOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfVxyXG5cclxuLyogQWRkIGEgYmFja2dyb3VuZCBjb2xvciBvbiBob3ZlciAqL1xyXG4ubmF2YmFyIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTMsIDE2NywgMTIxLCAwLjk4Mik7XHJcbiAgfVxyXG5cclxuICAvKiBTdHlsZSB0aGUgY3VycmVudC9hY3RpdmUgbGluayA/Pz8gKi9cclxuLm5hdiBhLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxMjAsIDEyMCk7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICB9XHJcbiAgXHJcbi8qIEFkZCByZXNwb25zaXZlbmVzcyAtIG9uIHNjcmVlbnMgbGVzcyB0aGFuIDUwMHB4LCBtYWtlIHRoZSBuYXZpZ2F0aW9uIGxpbmtzIGFwcGVhciBvbiB0b3Agb2YgZWFjaCBvdGhlciwgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAgIC5uYXZiYXIgYSB7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7IC8qIElmIHlvdSB3YW50IHRoZSB0ZXh0IHRvIGJlIGxlZnQtYWxpZ25lZCBvbiBzbWFsbCBzY3JlZW5zICovXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4jbXlwcm9maWxlIGEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gIGZsZXg6IDcwJTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0e1xyXG4gIGZsZXg6IDMwJTtcclxufVxyXG5cclxuLnByb2ZpbGVwaWN7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bntcclxuICBmbG9hdDpyaWdodDtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbiNzb21ldGhpbmd7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <div class=\"container\">\r\n    <div class=\"logo\" style=\"display:flex\">\r\n        <img src=\"https://github.com/ameru/caption-this/blob/master/angular/images%20and%20logos/caption-this-logo.png?raw=true\" width = \"300px\" height = \"100px\" alt=\"Caption This!\" id=\"logo\">\r\n    </div>\r\n\r\n\r\n    <form>\r\n      <div class=\"dropdown\" id = \"something\">\r\n        <label for=\"profile\">Hello, TeamWork</label>\r\n        <select id=\"myprofile\" name=\"myprofile\">\r\n            <option value=\"profile\"> </option>\r\n            <option value=\"profile\">My Profile</option>\r\n            <option value=\"logout\"> Log Out</option>\r\n        </select>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"profilepic\" id = \"something\"> \r\n        <img src=\"https://github.com/ameru/caption-this/blob/master/angular/images%20and%20logos/cph-profile.png?raw=true\" width=\"100px\" height=\"auto\" alt=\"profile\" id=\"profile\">\r\n    </div>\r\n\r\n\r\n  </div>\r\n  \r\n  <div class=\"navbar\">\r\n    <!-- <a routerLink=\"/\" class=\"logo\">{{ appTitle }}</a> -->\r\n    <nav>\r\n      <ul>\r\n        <li><a routerLink=\"/home\">HOME</a></li>\r\n        <li><a routerLink=\"/howitworks\">HOW IT WORKS</a></li>\r\n        <li><a routerLink=\"/watchlectures\">WATCH LECTURES</a></li>\r\n        <li><a routerLink=\"/uploadvids\">UPLOAD VIDEO</a></li>\r\n        <li><a routerLink=\"/contribute\">ADD CAPTIONS</a></li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</header>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = 'Caption This';
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/uploadvids/uploadvids.component.css":
/*!*****************************************************!*\
  !*** ./src/app/uploadvids/uploadvids.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headings {\r\n    padding: 35px;\r\n    color: rgb(0, 156, 252);\r\n    font-size: 25px;\r\n}\r\n\r\n#greybox {\r\n    background-color: rgb(230, 228, 228) ;\r\n    padding-bottom: 200px;\r\n    border-top: 3px solid  rgb(0, 156, 252); \r\n    margin-top: 30px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2Fkdmlkcy91cGxvYWR2aWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtHQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZHZpZHMvdXBsb2Fkdmlkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdzIHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE1NiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuI2dyZXlib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjI4LCAyMjgpIDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAgcmdiKDAsIDE1NiwgMjUyKTsgXHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/uploadvids/uploadvids.component.html":
/*!******************************************************!*\
  !*** ./src/app/uploadvids/uploadvids.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\" dir=\"ltr\">\r\n\r\n    <body>\r\n<<<<<<< HEAD\r\n\r\n        <form (submit)=\"uploadvids()\">\r\n            <h1> Upload a video </h1>\r\n            <label for=\"title\"> Title: </label>\r\n                <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" id=\"title\">\r\n=======\r\n        <div id=\"greybox\">\r\n        <form action=\"/uploadvids\" method=\"POST\">\r\n            <p><b class=\"headings\">UPLOAD A VIDEO</b></p>\r\n            <label for=\"Title\"> Title: </label>\r\n                <input type=\"text\" name=\"Title\" id=\"Title\">\r\n>>>>>>> 7595ff96f774b59764ae10a4c80750438ae2aaf4\r\n            <br>\r\n            <input type=\"file\" name=\"video\">\r\n                \r\n                <br>\r\n                <label for=\"description\">Description:</label>\r\n                <br>\r\n                <textarea id=\"add\" name=\"add\" rows=\"3\" cols=\"40\"></textarea>\r\n                <br>\r\n\r\n            <label for=\"Tags\"> Tags: </label>\r\n                <br>\r\n                <input type=\"text\" name=\"Tags\" id=\"Tags\">\r\n            <section class=\"submission\">\r\n                <input type=\"submit\" value=\"Upload\">\r\n            </section>\r\n        </form>\r\n        </div>\r\n    </body>\r\n</html>"

/***/ }),

/***/ "./src/app/uploadvids/uploadvids.component.ts":
/*!****************************************************!*\
  !*** ./src/app/uploadvids/uploadvids.component.ts ***!
  \****************************************************/
/*! exports provided: UploadvidsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadvidsComponent", function() { return UploadvidsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UploadvidsComponent = /** @class */ (function () {
    function UploadvidsComponent(http, router) {
        this.http = http;
        this.router = router;
        this.title = "";
    }
    UploadvidsComponent.prototype.ngOnInit = function () {
    };
    UploadvidsComponent.prototype.uploadvids = function () {
        var _this = this;
        this.http.post('/uploadvids', { title: this.title }).toPromise().then(function (res) {
            console.log(res);
            _this.router.navigate(['/watchlectures']);
        });
    };
    UploadvidsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uploadvids',
            template: __webpack_require__(/*! ./uploadvids.component.html */ "./src/app/uploadvids/uploadvids.component.html"),
            styles: [__webpack_require__(/*! ./uploadvids.component.css */ "./src/app/uploadvids/uploadvids.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UploadvidsComponent);
    return UploadvidsComponent;
}());



/***/ }),

/***/ "./src/app/watchlectures/watchlectures.component.css":
/*!***********************************************************!*\
  !*** ./src/app/watchlectures/watchlectures.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headings {\r\n    padding: 35px;\r\n    color: rgb(0, 156, 252);\r\n    font-size: 25px;\r\n}\r\n\r\n#greybox {\r\n    background-color: rgb(230, 228, 228) ;\r\n    padding-bottom: 300px;\r\n    border-top: 3px solid  rgb(0, 156, 252); \r\n    margin-top: 30px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2hsZWN0dXJlcy93YXRjaGxlY3R1cmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHNDQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtHQUNsQiIsImZpbGUiOiJzcmMvYXBwL3dhdGNobGVjdHVyZXMvd2F0Y2hsZWN0dXJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdzIHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE1NiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuI2dyZXlib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjI4LCAyMjgpIDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMDBweDtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAgcmdiKDAsIDE1NiwgMjUyKTsgXHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/watchlectures/watchlectures.component.html":
/*!************************************************************!*\
  !*** ./src/app/watchlectures/watchlectures.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\" dir=\"ltr\">\r\n    <head>\r\n        <div style=\"width:300px;height:150px;overflow:hidden;\">\r\n        <img src=\"https://github.com/ameru/caption-this/blob/master/angular/images%20and%20logos/caption-this-logo.png?raw=true\" width=\"300px\" height=\"auto\" alt=\"Caption This!\" id=\"logo\">\r\n        </div>\r\n        <div style=\"width:100px;height:100px;overflow:hidden;\">\r\n            <img src=\"https://github.com/ameru/caption-this/blob/master/angular/images%20and%20logos/cph-profile.png?raw=true\" width=\"100px\" height=\"auto\" alt=\"profile\" id=\"profile\">\r\n        </div>\r\n        <form>\r\n            <label for=\"profile\">Hello, TeamWork</label>\r\n            <select id=\"my profile\" name=\"my profile\">\r\n                <option value=\"blank\"> </option>\r\n                <option value=\"profile\">My Profile</option>\r\n                <option value=\"logout\"> Log Out</option>\r\n            </select>\r\n        </form>\r\n    </head>\r\n    <body>\r\n        <div id=\"greybox\">\r\n        <form action=\"/watchlectures1.html\" method=\"POST\">\r\n            <p><b class=\"headings\">WATCH LECTURES</b></p> \r\n            <label for=\"Search a video\">Search a video </label>\r\n                <input type=\"text\" name=\"Search a video\" id=\"Search a video\">\r\n        </form>\r\n        <section class=\"submission\">\r\n                <input type=\"submit\" value=\"Search\">\r\n            </section>\r\n        <form>\r\n                <label for=\"filter\">Filter By</label>\r\n                <select id=\"filter\" name=\"filter\">\r\n                    <option value=\"blank\"> </option>\r\n                    <option value=\"recent\">Most Recent</option>\r\n                    <option value=\"popular\"> Most Popular</option>\r\n                    <option value=\"professor\"> By Professor</option>\r\n                </select>\r\n            </form>\r\n        </div>\r\n    </body>\r\n</html>"

/***/ }),

/***/ "./src/app/watchlectures/watchlectures.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/watchlectures/watchlectures.component.ts ***!
  \**********************************************************/
/*! exports provided: WatchlecturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlecturesComponent", function() { return WatchlecturesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WatchlecturesComponent = /** @class */ (function () {
    function WatchlecturesComponent() {
    }
    WatchlecturesComponent.prototype.ngOnInit = function () {
    };
    WatchlecturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-watchlectures',
            template: __webpack_require__(/*! ./watchlectures.component.html */ "./src/app/watchlectures/watchlectures.component.html"),
            styles: [__webpack_require__(/*! ./watchlectures.component.css */ "./src/app/watchlectures/watchlectures.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WatchlecturesComponent);
    return WatchlecturesComponent;
}());



/***/ }),

/***/ "./src/app/watchocob/watchocob.component.css":
/*!***************************************************!*\
  !*** ./src/app/watchocob/watchocob.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhdGNob2NvYi93YXRjaG9jb2IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/watchocob/watchocob.component.html":
/*!****************************************************!*\
  !*** ./src/app/watchocob/watchocob.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\" dir=\"ltr\">\r\n\r\n    <body>\r\n\r\n        <form action=\"/watchlectures1.html\" method=\"POST\">\r\n            <h1> Watch Lectures </h1>\r\n            <label for=\"Search a video\">Search a video </label>\r\n                <input type=\"text\" name=\"Search a video\" id=\"Search a video\">\r\n        </form>\r\n        <section class=\"submission\">\r\n                <input type=\"submit\" value=\"Search\">\r\n            </section>\r\n        <form>\r\n                <label for=\"filter\">Filter By</label>\r\n                <select id=\"filter\" name=\"filter\">\r\n                    <option value=\"OCOB\">OCOB</option>\r\n                    <option value=\"recent\">Most Recent</option>\r\n                    <option value=\"popular\"> Most Popular</option>\r\n                    <option value=\"CLA\">CLA</option>\r\n                    <option value=\"CAFES\">CAFES</option>\r\n                    <option value=\"CENG\">CENG</option>\r\n                    <option value=\"COSAM\">COSAM</option>\r\n                    <option value=\"CAED\">CAED</option>\r\n                </select>\r\n            </form>\r\n    </body>\r\n</html>"

/***/ }),

/***/ "./src/app/watchocob/watchocob.component.ts":
/*!**************************************************!*\
  !*** ./src/app/watchocob/watchocob.component.ts ***!
  \**************************************************/
/*! exports provided: WatchocobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchocobComponent", function() { return WatchocobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WatchocobComponent = /** @class */ (function () {
    function WatchocobComponent() {
    }
    WatchocobComponent.prototype.ngOnInit = function () {
    };
    WatchocobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-watchocob',
            template: __webpack_require__(/*! ./watchocob.component.html */ "./src/app/watchocob/watchocob.component.html"),
            styles: [__webpack_require__(/*! ./watchocob.component.css */ "./src/app/watchocob/watchocob.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WatchocobComponent);
    return WatchocobComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SXion\caption-this\caption-this\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map