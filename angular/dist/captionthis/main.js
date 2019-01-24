(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../raw_videos/videosDirectory.json":
/*!******************************************!*\
  !*** ../raw_videos/videosDirectory.json ***!
  \******************************************/
/*! exports provided: videos, default */
/***/ (function(module) {

module.exports = {"videos":[{"fileDir":"./raw_videos/Chungus-1548324666855.mp4","title":"Chungus","add":"Description","Tags":"Tags"},{"fileDir":"./raw_videos/Chungus2-1548324682295.mp4","title":"Chungus2","add":"Description","Tags":"Tags"}]};

/***/ }),

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */"

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

module.exports = ".headings {\r\n  padding: 35px;\r\n  color: rgb(0, 156, 252);\r\n  font-size: 25px;\r\n}\r\n\r\n#greybox {\r\n  background-color: rgb(230, 228, 228) ;\r\n  padding-bottom: 10px;\r\n  border-top: 3px solid  rgb(0, 156, 252); \r\n  margin-top: 30px;\r\n}\r\n\r\ninput[type=range] {\r\n  -webkit-appearance: none;\r\n  margin: 10px 0;\r\n  width: 100%;\r\n}\r\n\r\ninput[type=range]:focus {\r\n  outline: none;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n  width: 100%;\r\n  height: 12.8px;\r\n  cursor: pointer;\r\n  animate: 0.2s;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  background: #5ab8e0;\r\n  border-radius: 25px;\r\n  border: 0px solid #000101;\r\n}\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  border: 0px solid #000000;\r\n  height: 20px;\r\n  width: 39px;\r\n  border-radius: 7px;\r\n  background: #360dff;\r\n  cursor: pointer;\r\n  -webkit-appearance: none;\r\n  margin-top: -3.6px;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n  background: #5ab8e0;\r\n}\r\n\r\ninput[type=range]::-moz-range-track {\r\n  width: 100%;\r\n  height: 12.8px;\r\n  cursor: pointer;\r\n  animate: 0.2s;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  background: #5ab8e0;\r\n  border-radius: 25px;\r\n  border: 0px solid #000101;\r\n}\r\n\r\ninput[type=range]::-moz-range-thumb {\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  border: 0px solid #000000;\r\n  height: 20px;\r\n  width: 39px;\r\n  border-radius: 7px;\r\n  background: #360dff;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=range]::-ms-track {\r\n  width: 100%;\r\n  height: 12.8px;\r\n  cursor: pointer;\r\n  animate: 0.2s;\r\n  background: transparent;\r\n  border-color: transparent;\r\n  border-width: 39px 0;\r\n  color: transparent;\r\n}\r\n\r\ninput[type=range]::-ms-fill-lower {\r\n  background: #5ab8e0;\r\n  border: 0px solid #000101;\r\n  border-radius: 50px;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n}\r\n\r\ninput[type=range]::-ms-fill-upper {\r\n  background: #5ab8e0;\r\n  border: 0px solid #000101;\r\n  border-radius: 50px;\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n}\r\n\r\ninput[type=range]::-ms-thumb {\r\n  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\r\n  border: 0px solid #000000;\r\n  height: 20px;\r\n  width: 39px;\r\n  border-radius: 7px;\r\n  background: #360dff;\r\n  cursor: pointer;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-lower {\r\n  background: #5ab8e0;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-upper {\r\n  background: #5ab8e0;\r\n}\r\n\r\nbody {\r\n  padding: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbnRyaWJ1dGUvY29udHJpYnV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxzQ0FBc0M7RUFDdEMscUJBQXFCO0VBQ3JCLHdDQUF3QztFQUN4QyxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLFlBQVk7Q0FDYjs7QUFDRDtFQUNFLGNBQWM7Q0FDZjs7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxREFBcUQ7RUFDckQsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQiwwQkFBMEI7Q0FDM0I7O0FBQ0Q7RUFDRSxxREFBcUQ7RUFDckQsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtDQUNwQjs7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxREFBcUQ7RUFDckQsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQiwwQkFBMEI7Q0FDM0I7O0FBQ0Q7RUFDRSxxREFBcUQ7RUFDckQsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakI7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIscURBQXFEO0NBQ3REOztBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIscURBQXFEO0NBQ3REOztBQUNEO0VBQ0UscURBQXFEO0VBQ3JELDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUNEO0VBQ0Usb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsY0FBYztDQUNmIiwiZmlsZSI6Ii4uL2NvbnRyaWJ1dGUvY29udHJpYnV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdzIHtcclxuICBwYWRkaW5nOiAzNXB4O1xyXG4gIGNvbG9yOiByZ2IoMCwgMTU2LCAyNTIpO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuI2dyZXlib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIyOCwgMjI4KSA7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICByZ2IoMCwgMTU2LCAyNTIpOyBcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXJhbmdlXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMi44cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGFuaW1hdGU6IDAuMnM7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMCwgMHB4IDBweCAwcHggIzBkMGQwZDtcclxuICBiYWNrZ3JvdW5kOiAjNWFiOGUwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwMDEwMTtcclxufVxyXG5pbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDAsIDBweCAwcHggMHB4ICMwZDBkMGQ7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwMDAwMDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDM5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJhY2tncm91bmQ6ICMzNjBkZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW4tdG9wOiAtMy42cHg7XHJcbn1cclxuaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjNWFiOGUwO1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEyLjhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYW5pbWF0ZTogMC4ycztcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwLCAwcHggMHB4IDBweCAjMGQwZDBkO1xyXG4gIGJhY2tncm91bmQ6ICM1YWI4ZTA7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjMDAwMTAxO1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwLCAwcHggMHB4IDBweCAjMGQwZDBkO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICMwMDAwMDA7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAzOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBiYWNrZ3JvdW5kOiAjMzYwZGZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEyLjhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYW5pbWF0ZTogMC4ycztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci13aWR0aDogMzlweCAwO1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5pbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtbG93ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1YWI4ZTA7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwMDEwMTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDAsIDBweCAwcHggMHB4ICMwZDBkMGQ7XHJcbn1cclxuaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLXVwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNWFiOGUwO1xyXG4gIGJvcmRlcjogMHB4IHNvbGlkICMwMDAxMDE7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwLCAwcHggMHB4IDBweCAjMGQwZDBkO1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDAsIDBweCAwcHggMHB4ICMwZDBkMGQ7XHJcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwMDAwMDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDM5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIGJhY2tncm91bmQ6ICMzNjBkZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC1sb3dlciB7XHJcbiAgYmFja2dyb3VuZDogIzVhYjhlMDtcclxufVxyXG5pbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtdXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICM1YWI4ZTA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/contribute/contribute.component.html":
/*!******************************************************!*\
  !*** ./src/app/contribute/contribute.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\" dir=\"ltr\">\r\n    <body>\r\n        <div id=\"greybox\">\r\n            <p><b class=\"headings\">ADD CAPTIONS</b></p> \r\n        <video width=\"480\" height=\"360\" src=\"https://github.com/ameru/caption-this/blob/master/angular/images%20and%20logos/SampleVideo_1280x720_5mb.mp4?raw=True\" type=\"video/mp4\" controls>\r\n            </video>\r\n        <div>\r\n            <input type=\"range\">\r\n        </div>\r\n        </div>\r\n    </body>\r\n        \r\n</html>"

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

module.exports = ".headings {\r\n    padding: 35px;\r\n    color: rgb(0, 156, 252);\r\n    font-size: 25px;\r\n}\r\n\r\n#greybox {\r\n    background-color: rgb(230, 228, 228) ;\r\n    padding-bottom: 100px;\r\n    border-top: 3px solid  rgb(0, 156, 252); \r\n    margin-top: 30px;\r\n  }\r\n\r\n.buttons button,\r\n.buttons a {\r\n  margin-right: 8px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n.searchbycollege {\r\n    margin-top: 100px;\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n  }\r\n\r\n.searchbycollege {\r\n    width: 95%;\r\n    background-color: rgb(0, 156, 252); ;\r\n    overflow: auto;\r\n    margin-top: 25px;\r\n    margin-right: 25px #153ef7e9;\r\n  }\r\n\r\n.searchbycollege a {\r\n    float: left;\r\n    padding: 15px;\r\n    font-weight: bold;\r\n    color: rgb(255, 255, 255);\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    width: 31.13%; \r\n    text-align: center;\r\n  }\r\n\r\n/* Add a background color on hover */\r\n\r\n.searchbycollege a:hover {\r\n    background-color: #153ef7e9;\r\n  }\r\n\r\n.slider {\r\n    width: 800px;\r\n    height: 450px;\r\n    margin-left: 300px;\r\n    display: flex;\r\n    overflow-x: auto;\r\n    -ms-scroll-snap-type: y mandatory;\r\n        scroll-snap-type: y mandatory;\r\n  }\r\n\r\n.slide {\r\n    width: 800px;\r\n    flex-shrink: 0;\r\n    height: 100%;\r\n    background-color: blue;\r\n    scroll-snap-align: center;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxzQ0FBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxpQkFBaUI7R0FDbEI7O0FBRUg7O0VBRUUsa0JBQWtCO0NBQ25COztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixXQUFXO0dBQ1o7O0FBRUg7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtHQUNwQjs7QUFFSDtJQUNJLFdBQVc7SUFDWCxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiw2QkFBNkI7R0FDOUI7O0FBRUg7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0dBQ3BCOztBQUVILHFDQUFxQzs7QUFDckM7SUFDSSw0QkFBNEI7R0FDN0I7O0FBRUQ7SUFDRSxhQUFhO0lBQ2IsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtDQUE4QjtRQUE5Qiw4QkFBOEI7R0FDL0I7O0FBQ0Q7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMEJBQTBCO0dBQzNCIiwiZmlsZSI6Ii4uL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdzIHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE1NiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuI2dyZXlib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjI4LCAyMjgpIDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAgcmdiKDAsIDE1NiwgMjUyKTsgXHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcbi5idXR0b25zIGJ1dHRvbixcclxuLmJ1dHRvbnMgYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuLnNlYXJjaGJ5Y29sbGVnZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbi5zZWFyY2hieWNvbGxlZ2Uge1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNTYsIDI1Mik7IDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjVweCAjMTUzZWY3ZTk7XHJcbiAgfVxyXG5cclxuLnNlYXJjaGJ5Y29sbGVnZSBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHdpZHRoOiAzMS4xMyU7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cclxuLnNlYXJjaGJ5Y29sbGVnZSBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTNlZjdlOTtcclxuICB9XHJcblxyXG4gIC5zbGlkZXIge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeSBtYW5kYXRvcnk7XHJcbiAgfVxyXG4gIC5zbGlkZSB7XHJcbiAgICB3aWR0aDogODAwcHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html> \r\n    <head> \r\n        <title>Home Page</title> \r\n    </head> \r\n    <body> \r\n        <div id=\"greybox\">\r\n            <p><b class=\"headings\">RECOMMENDED VIDEOS</b></p> \r\n\r\n            <div class=\"slide-wrap\">\r\n                  \r\n                    <div class=\"slider\">\r\n                        <div class=\"slide\" id=\"slide-1\"> <img src= \"https://raw.githubusercontent.com/ameru/caption-this/master/angular/images%20and%20logos/frontpage1%20copy.png\"> </div>\r\n                        <div class=\"slide\" id=\"slide-2\"> <img src= \"https://raw.githubusercontent.com/ameru/caption-this/master/angular/images%20and%20logos/frontpage2%20copy.png\" style=\"width:800px;height:450px;\">  </div>\r\n                        <div class=\"slide\" id=\"slide-3\"> <img src= \"https://raw.githubusercontent.com/ameru/caption-this/master/angular/images%20and%20logos/frontpage3%20copy.png\"> </div>\r\n                    </div>\r\n\r\n            </div>\r\n\r\n            <p><b class=\"headings\">BROWSE BY COLLEGE</b></p> \r\n            <header>\r\n                <div class=\"searchbycollege\">\r\n                <nav>\r\n                    <ul>\r\n                    <li><a routerLink=\"/watchlectures\">CLA</a></li>\r\n                    <li><a routerLink=\"/watchlectures\">CAFES</a></li>\r\n                    <li><a routerLink=\"/watchocob\">OCOB</a></li>\r\n                    <li><a routerLink=\"/watchlectures\">CENG</a></li>\r\n                    <li><a routerLink=\"/watchlectures\">COSAM</a></li>\r\n                    <li><a routerLink=\"/watchlectures\">CAED</a></li>\r\n                    </ul>\r\n                </nav>\r\n                </div>\r\n            </header>\r\n        </div> \r\n    </body> \r\n</html> "

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

module.exports = ".headings {\r\n    padding: 35px;\r\n    color: rgb(0, 156, 252);\r\n    font-size: 25px;\r\n}\r\n\r\n#greybox {\r\n    background-color: rgb(230, 228, 228) ;\r\n    padding-bottom: 200;\r\n    border-top: 3px solid  rgb(0, 156, 252); \r\n    margin-top: 30px;\r\n  }\r\n\r\n.hello {\r\n    margin-left: 40px;\r\n    margin-right: 40px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2hvd2l0d29ya3MvaG93aXR3b3Jrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxzQ0FBc0M7SUFDdEMsb0JBQW9CO0lBQ3BCLHdDQUF3QztJQUN4QyxpQkFBaUI7R0FDbEI7O0FBRUg7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0dBQ3BCIiwiZmlsZSI6Ii4uL2hvd2l0d29ya3MvaG93aXR3b3Jrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdzIHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE1NiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuI2dyZXlib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjI4LCAyMjgpIDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMDA7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIHJnYigwLCAxNTYsIDI1Mik7IFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4uaGVsbG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/howitworks/howitworks.component.html":
/*!******************************************************!*\
  !*** ./src/app/howitworks/howitworks.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<html lang=\"en\" dir=\"ltr\">\r\n    <div id=\"greybox\">\r\n        <p><b class=\"headings\">So... what is \"Caption This\"?</b></p> \r\n        <body>\r\n            <div class=\"hello\">\r\n            <p>\r\n                \"Caption This!\" is a website application that aids hearing impaired students in understanding course materials. The website will be an open-source platform where students can upload videos of lectures and students can contribute close-captioning to these videos, where they will then be utilized by their hearing impaired peers.\r\n            </p>\r\n            </div>\r\n            <p><b class=\"headings\">How It Works:</b></p> \r\n\r\n            <div class=\"hello\">\r\n            \r\n                <ol>\r\n                    <li>Students will be notified through the Disabilities Resource Center (DRC) if there is a student in their class that has a hearing impairment.</li>\r\n                    <li>Once given the professor's permission, students in that class will have the ability to videotape the lecture and upload it onto the web app.</li>\r\n                    <li>Anyone in the community can add closed captions to the video (they can caption the entire 2 hours, or choose to caption only 2 minutes)</li>\r\n                    <li>The closed captions will be flagged for a moderator to review.</li>\r\n                    <li>Once approved, the moderator will indicate that the video has closed captions, and students with disabilities are free to watch the video!</li>\r\n                    <li>After watching the lecture, students will then be able to rate the quality of the closed caption video on a 5-star scale.</li>\r\n                    <li>If a video is rated less than 3 stars, the moderator will flag the video and open the video up for a re-caption.</li>\r\n                    <li>In the event that a lecture does not have closed captioning, a speech-to-text function will be implemented, until it can be replaced with closed captioning.</li>\r\n                </ol>\r\n            </div>\r\n        </body>\r\n    </div>\r\n    <head>\r\n        <div style=\"width:300px;height:150px;overflow:hidden;\">\r\n        <img src=\"https://github.com/ameru/caption-this/blob/master/angular/images%20and%20logos/caption-this-logo.png?raw=true\" width=\"300px\" height=\"auto\" alt=\"Caption This!\" id=\"logo\">\r\n        </div>\r\n        <div style=\"width:100px;height:100px;overflow:hidden;\">\r\n            <img src=\"https://github.com/ameru/caption-this/blob/master/angular/images%20and%20logos/cph-profile.png?raw=true\" width=\"100px\" height=\"auto\" alt=\"profile\" id=\"profile\">\r\n        </div>\r\n        <form>\r\n            <label for=\"profile\">Hello, TeamWork</label>\r\n            <select id=\"my profile\" name=\"my profile\">\r\n                <option value=\"profile\"> </option>\r\n                <option value=\"profile\">My Profile</option>\r\n                <option value=\"logout\"> Log Out</option>\r\n            </select>\r\n        </form>\r\n    </head>\r\n    <body>\r\n        <h2>So... what is \"Caption This\"?</h2>\r\n        <p>\r\n            \"Caption This!\" is a website application that aids hearing impaired students in understanding course materials. The website will be an open-source platform where students can upload videos of lectures and students can contribute close-captioning to these videos, where they will then be utilized by their hearing impaired peers.\r\n        </p>\r\n        <h3>How It Works:</h3>\r\n            <ol>\r\n                <li>Students will be notified through the Disabilities Resource Center (DRC) if there is a student in their class that has a hearing impairment.</li>\r\n                <li>Once given the professor's permission, students in that class will have the ability to videotape the lecture and upload it onto the web app.</li>\r\n                <li>Anyone in the community can add closed captions to the video (they can caption the entire 2 hours, or choose to caption only 2 minutes)</li>\r\n                <li>The closed captions will be flagged for a moderator to review.</li>\r\n                <li>Once approved, the moderator will indicate that the video has closed captions, and students with disabilities are free to watch the video!</li>\r\n                <li>After watching the lecture, students will then be able to rate the quality of the closed caption video on a 5-star scale.</li>\r\n                <li>If a video is rated less than 3 stars, the moderator will flag the video and open the video up for a re-caption.</li>\r\n                <li>In the event that a lecture does not have closed captioning, a speech-to-text function will be implemented, until it can be replaced with closed captioning.</li>\r\n            </ol>\r\n    </body>\r\n </html>\r\n"

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

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n.navbar {\r\n    margin-top: 10px;\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n  }\r\n\r\n/* Style the navigation menu */\r\n\r\n.navbar {\r\n    width: 95%;\r\n    background-color: #e05523e9;\r\n    overflow: auto;\r\n  }\r\n\r\n/* Navigation links */\r\n\r\n.navbar a {\r\n    float: left;\r\n    padding: 15px;\r\n    font-weight: bold;\r\n    color: rgb(255, 255, 255);\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    width: 17.8%; \r\n    text-align: center;\r\n\r\n  }\r\n\r\n/* Add a background color on hover */\r\n\r\n.navbar a:hover {\r\n    background-color: rgba(253, 167, 121, 0.982);\r\n  }\r\n\r\n/* Style the current/active link ??? */\r\n\r\n.nav a.active {\r\n    background-color: rgb(240, 120, 120);\r\n    color: #444;\r\n    cursor: default;\r\n  }\r\n\r\n/* Add responsiveness - on screens less than 500px, make the navigation links appear on top of each other, instead of next to each other */\r\n\r\n@media screen and (max-width: 500px) {\r\n    .navbar a {\r\n      float: none;\r\n      display: block;\r\n      width: 100%;\r\n      text-align: left; /* If you want the text to be left-aligned on small screens */\r\n    }\r\n  }\r\n\r\n#myprofile a {\r\n  background-color: grey;\r\n}\r\n\r\n.logo{\r\n  flex: 70%;\r\n  margin-left: 30px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.right{\r\n  flex: 30%;\r\n}\r\n\r\n.profilepic{\r\n  float:right;\r\n  margin-top: 20px;\r\n  height: 80px;\r\n  margin-right: 40px;\r\n}\r\n\r\n.dropdown{\r\n  float:right;\r\n  margin-top:50px;\r\n}\r\n\r\n.container{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n#something{\r\n  display: flex;\r\n  float: right;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsV0FBVztHQUNaOztBQUVIO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7R0FDcEI7O0FBRUgsK0JBQStCOztBQUMvQjtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsZUFBZTtHQUNoQjs7QUFHSCxzQkFBc0I7O0FBQ3RCO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjs7R0FFcEI7O0FBRUgscUNBQXFDOztBQUNyQztJQUNJLDZDQUE2QztHQUM5Qzs7QUFFRCx1Q0FBdUM7O0FBQ3pDO0lBQ0kscUNBQXFDO0lBQ3JDLFlBQVk7SUFDWixnQkFBZ0I7R0FDakI7O0FBRUgsMklBQTJJOztBQUMzSTtJQUNJO01BQ0UsWUFBWTtNQUNaLGVBQWU7TUFDZixZQUFZO01BQ1osaUJBQWlCLENBQUMsOERBQThEO0tBQ2pGO0dBQ0Y7O0FBRUg7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtDQUNsQjs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsY0FBYztFQUNkLGFBQWE7Q0FDZCIsImZpbGUiOiIuLi9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIH1cclxuXHJcbi8qIFN0eWxlIHRoZSBuYXZpZ2F0aW9uIG1lbnUgKi9cclxuLm5hdmJhciB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwNTUyM2U5O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbi8qIE5hdmlnYXRpb24gbGlua3MgKi9cclxuLm5hdmJhciBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHdpZHRoOiAxNy44JTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIH1cclxuXHJcbi8qIEFkZCBhIGJhY2tncm91bmQgY29sb3Igb24gaG92ZXIgKi9cclxuLm5hdmJhciBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAxNjcsIDEyMSwgMC45ODIpO1xyXG4gIH1cclxuXHJcbiAgLyogU3R5bGUgdGhlIGN1cnJlbnQvYWN0aXZlIGxpbmsgPz8/ICovXHJcbi5uYXYgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTIwLCAxMjApO1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgfVxyXG4gIFxyXG4vKiBBZGQgcmVzcG9uc2l2ZW5lc3MgLSBvbiBzY3JlZW5zIGxlc3MgdGhhbiA1MDBweCwgbWFrZSB0aGUgbmF2aWdhdGlvbiBsaW5rcyBhcHBlYXIgb24gdG9wIG9mIGVhY2ggb3RoZXIsIGluc3RlYWQgb2YgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAubmF2YmFyIGEge1xyXG4gICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyAvKiBJZiB5b3Ugd2FudCB0aGUgdGV4dCB0byBiZSBsZWZ0LWFsaWduZWQgb24gc21hbGwgc2NyZWVucyAqL1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuI215cHJvZmlsZSBhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4ubG9nb3tcclxuICBmbGV4OiA3MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0e1xyXG4gIGZsZXg6IDMwJTtcclxufVxyXG5cclxuLnByb2ZpbGVwaWN7XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd257XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDo1MHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4jc29tZXRoaW5ne1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59Il19 */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"

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

module.exports = ".headings {\r\n    padding: 35px;\r\n    color: rgb(0, 156, 252);\r\n    font-size: 25px;\r\n}\r\n\r\n#greybox {\r\n    background-color: rgb(230, 228, 228) ;\r\n    padding-bottom: 200px;\r\n    border-top: 3px solid  rgb(0, 156, 252); \r\n    margin-top: 30px;\r\n  }\r\n\r\n.hello {\r\n    margin-left: 40px;\r\n  }\r\n\r\nlabel {\r\n    color: rgb(0, 0, 0);\r\n    font-weight: bold;\r\n    width: 150px;\r\n    }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZHZpZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksc0NBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsaUJBQWlCO0dBQ2xCOztBQUdIO0lBQ0ksa0JBQWtCO0dBQ25COztBQUVEO0lBQ0Usb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixhQUFhO0tBQ1oiLCJmaWxlIjoidXBsb2Fkdmlkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmdzIHtcclxuICAgIHBhZGRpbmc6IDM1cHg7XHJcbiAgICBjb2xvcjogcmdiKDAsIDE1NiwgMjUyKTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuI2dyZXlib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjI4LCAyMjgpIDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMDBweDtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAgcmdiKDAsIDE1NiwgMjUyKTsgXHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuXHJcblxyXG4uaGVsbG8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICBsYWJlbCB7XHJcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/uploadvids/uploadvids.component.html":
/*!******************************************************!*\
  !*** ./src/app/uploadvids/uploadvids.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\" dir=\"ltr\">\r\n\r\n    <body>\r\n        <div id=\"greybox\">\r\n        <p><b class=\"headings\">UPLOAD A VIDEO</b></p>\r\n            <div class=\"hello\">\r\n                <form method=\"POST\" action=\"/uploadvids\" enctype=\"multipart/form-data\">\r\n                    <h1> Upload a video </h1>\r\n                    <label for=\"title\"> Title: </label>\r\n                    <input type=\"text\" name=\"title\" id=\"title\">\r\n                    <br>\r\n                    <input type=\"file\" name=\"videoUpload\">     \r\n                    <br>\r\n                    <label for=\"description\">Description:</label>\r\n                    <br>\r\n                    <textarea id=\"add\" name=\"add\" rows=\"3\" cols=\"40\"></textarea>\r\n                    <br>\r\n                    <label for=\"Tags\"> Tags: </label>\r\n                    <br>\r\n                    <input type=\"text\" name=\"Tags\" id=\"Tags\">\r\n                    <section class=\"submission\">\r\n                        <input type=\"submit\" value=\"Upload\" onclick=\"submit()\">\r\n                    </section>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </body>\r\n</html>"

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


var UploadvidsComponent = /** @class */ (function () {
    function UploadvidsComponent() {
    }
    /*
    title: String = "";
    constructor(private http: HttpClient, private router: Router) { }
    */
    UploadvidsComponent.prototype.ngOnInit = function () {
    };
    UploadvidsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uploadvids',
            template: __webpack_require__(/*! ./uploadvids.component.html */ "./src/app/uploadvids/uploadvids.component.html"),
            styles: [__webpack_require__(/*! ./uploadvids.component.css */ "./src/app/uploadvids/uploadvids.component.css")]
        })
    ], UploadvidsComponent);
    return UploadvidsComponent;
}());



/***/ }),

/***/ "./src/app/watchlectures/urls.ts":
/*!***************************************!*\
  !*** ./src/app/watchlectures/urls.ts ***!
  \***************************************/
/*! exports provided: urls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urls", function() { return urls; });
var urls = /** @class */ (function () {
    function urls() {
    }
    return urls;
}());



/***/ }),

/***/ "./src/app/watchlectures/watchlectures.component.css":
/*!***********************************************************!*\
  !*** ./src/app/watchlectures/watchlectures.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headings {\r\n    padding: 35px;\r\n    color: rgb(0, 156, 252);\r\n    font-size: 25px;\r\n}\r\n\r\n#greybox {\r\n    background-color: rgb(230, 228, 228) ;\r\n    padding-bottom: 10px;\r\n    border-top: 3px solid  rgb(0, 156, 252); \r\n    margin-top: 30px;\r\n  }\r\n\r\n.searchbar {\r\n      margin-left: 35px;\r\n  }\r\n\r\n/* Three image containers (use 25% for four, and 50% for two, etc) */\r\n\r\n.column {\r\n    float: left;\r\n    width: 45%;\r\n    padding: 15px;\r\n  }\r\n\r\n/* Clear floats after image containers */\r\n\r\n.row::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dhdGNobGVjdHVyZXMvd2F0Y2hsZWN0dXJlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxzQ0FBc0M7SUFDdEMscUJBQXFCO0lBQ3JCLHdDQUF3QztJQUN4QyxpQkFBaUI7R0FDbEI7O0FBRUQ7TUFDSSxrQkFBa0I7R0FDckI7O0FBR0QscUVBQXFFOztBQUN2RTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztHQUNmOztBQUVELHlDQUF5Qzs7QUFDekM7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7R0FDaEIiLCJmaWxlIjoiLi4vd2F0Y2hsZWN0dXJlcy93YXRjaGxlY3R1cmVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGluZ3Mge1xyXG4gICAgcGFkZGluZzogMzVweDtcclxuICAgIGNvbG9yOiByZ2IoMCwgMTU2LCAyNTIpO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4jZ3JleWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMjgsIDIyOCkgO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgIHJnYigwLCAxNTYsIDI1Mik7IFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gIC5zZWFyY2hiYXIge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMzVweDtcclxuICB9XHJcblxyXG5cclxuICAvKiBUaHJlZSBpbWFnZSBjb250YWluZXJzICh1c2UgMjUlIGZvciBmb3VyLCBhbmQgNTAlIGZvciB0d28sIGV0YykgKi9cclxuLmNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAvKiBDbGVhciBmbG9hdHMgYWZ0ZXIgaW1hZ2UgY29udGFpbmVycyAqL1xyXG4gIC5yb3c6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/watchlectures/watchlectures.component.html":
/*!************************************************************!*\
  !*** ./src/app/watchlectures/watchlectures.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\" dir=\"ltr\">\r\n\r\n    <body>\r\n        <div id=\"greybox\">\r\n            <p><b class=\"headings\">WATCH LECTURES</b></p> \r\n            \r\n            <div class=\"searchbar\">\r\n                <form action=\"/watchlectures1.html\" method=\"POST\">\r\n                    <label for=\"Search a video\">Search a video </label>\r\n                    <input type=\"text\" name=\"Search a video\" id=\"Search a video\">\r\n                    <section class=\"submission\">\r\n                        <input type=\"submit\" value=\"Search\">\r\n                    </section>\r\n                </form>\r\n            \r\n                <form>\r\n                    <label for=\"filter\">Filter By</label>\r\n                    <select id=\"filter\" name=\"filter\">\r\n                        <option value=\"blank\"> </option>\r\n                        <option value=\"recent\">Most Recent</option>\r\n                        <option value=\"popular\"> Most Popular</option>\r\n                        <option value=\"professor\"> By Professor</option>\r\n                    </select>\r\n                </form>\r\n                \r\n                <div class=\"row\">\r\n                    <div class=\"column\" *ngFor=\"let url of directories\">\r\n                        <video width=\"480\" height=\"360\" src=\"../../../.{{url.fileDir}}?raw=True\" type=\"video/mp4\" controls></video>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"column\">\r\n                        <img src=\"https://raw.githubusercontent.com/ameru/caption-this/master/angular/images%20and%20logos/frontpage1%20copy.png\" style=\"width:100%\">\r\n                    </div>\r\n                    <div class=\"column\">\r\n                        <img src=\"https://raw.githubusercontent.com/ameru/caption-this/master/angular/images%20and%20logos/frontpage2%20copy.png\" style=\"width:100%\">\r\n                    </div>\r\n                    <div class=\"column\">\r\n                        <img src=\"https://raw.githubusercontent.com/ameru/caption-this/master/angular/images%20and%20logos/frontpage3%20copy.png\" style=\"width:100%\">\r\n                    </div>\r\n                    <div class=\"column\">\r\n                        <img src=\"https://raw.githubusercontent.com/ameru/caption-this/master/angular/images%20and%20logos/frontpage4%20copy.png\" style=\"width:100%\">\r\n                    </div>\r\n                    <div class=\"column\">\r\n                        <img src=\"https://raw.githubusercontent.com/ameru/caption-this/master/angular/images%20and%20logos/fontpage5%20copy.png\" style=\"width:100%\">\r\n                    </div>\r\n                    <div class=\"column\">\r\n                        <img src=\"https://raw.githubusercontent.com/ameru/caption-this/master/angular/images%20and%20logos/frontpage6%20copy.png\" style=\"width:100%\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </body>  \r\n</html>"

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
/* harmony import */ var _urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urls */ "./src/app/watchlectures/urls.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _raw_videos_videosDirectory_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../raw_videos/videosDirectory.json */ "../raw_videos/videosDirectory.json");
var _raw_videos_videosDirectory_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../raw_videos/videosDirectory.json */ "../raw_videos/videosDirectory.json", 1);




var WatchlecturesComponent = /** @class */ (function () {
    function WatchlecturesComponent() {
        this.directories = _raw_videos_videosDirectory_json__WEBPACK_IMPORTED_MODULE_3__.videos;
    }
    WatchlecturesComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _urls__WEBPACK_IMPORTED_MODULE_1__["urls"])
    ], WatchlecturesComponent.prototype, "fileDir", void 0);
    WatchlecturesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi93YXRjaG9jb2Ivd2F0Y2hvY29iLmNvbXBvbmVudC5jc3MifQ== */"

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