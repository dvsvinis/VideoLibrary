(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <li></li>\n<!--    <div class=\"col-md-12\">-->\n<!--      <div class=\"card bg-dark my-5\">-->\n<!--        <div class=\"card-body\">-->\n<!--          <h3 class=\"card-title text-center text-white py-3\">{{ title }}</h3>-->\n<!--          <ul class=\"text-center list-inline py-3\">-->\n<!--            <li class=\"list-inline-item\"><a routerLink=\"/videos\" class=\"btn btn-info\">Video Play List</a></li>-->\n<!--            <li class=\"list-inline-item\"><a routerLink=\"/comments\" class=\"btn btn-info\">Video Comments</a></li>-->\n<!--            <li class=\"list-inline-item\"><a routerLink=\"/adduser\" class=\"btn btn-info\">Add User</a></li>-->\n<!--          </ul>-->\n<!--        </div>-->\n      </div>\n      <div> <router-outlet></router-outlet></div>\n    </div>\n<!--  </div>-->\n<!--  <div> <app-footer></app-footer></div>-->\n<!--</div>-->\n\n<!--<h1>Environment</h1>-->\n<!--<pre>{{env | json}}</pre>-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-user/add-user.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-user/add-user.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <h2 class=\"text-center\">Add User</h2>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">UserName:</label>\n      <input type=\"name\" [(ngModel)]=\"user.username\" placeholder=\"UserName\" name=\"username\" class=\"form-control\" id=\"username\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"email\">Designation:</label>\n      <input [(ngModel)]=\"user.email\" placeholder=\"Email\" name=\"email\" class=\"form-control\" id=\"email\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input [(ngModel)]=\"user.password\" placeholder=\"Password\" name=\"Password\" class=\"form-control\" id=\"password\">\n    </div>\n\n    <button class=\"btn btn-success\" (click)=\"adduser()\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/comment-form/comment-form.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/comment-form/comment-form.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-5\">\n  <div class=\"card-body\">\n    <form (ngSubmit)=\"onSubmit()\" #commentForm=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"videoid\">Video Id</label>\n        <input type=\"text\" [(ngModel)]=\"comment.videoid\"\n               class=\"form-control\" id=\"videoid\" name=\"videoid\" placeholder=\"Enter Video Id\"\n               required #videoid=\"ngModel\">\n      </div>\n      <div [hidden]=\"!videoid.pristine\" class=\"alert alert-danger\">Video Id is required</div>\n\n      <label for=\"comment\">Comment</label>\n      <input type=\"text\" [(ngModel)]=\"comment.comment\"\n             class=\"form-control\" id=\"comment\" name=\"comment\" placeholder=\"Enter your Comment\"\n             required #videoid=\"ngModel\">\n      <div [hidden]=\"!videoid.pristine\" class=\"alert alert-danger\">Comment is required</div>\n\n      <button type=\"submit\" [disabled]=\"!commentForm.form.valid\" class=\"btn btn-info\">Submit</button>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/comment-list/comment-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/comment-list/comment-list.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-5\">\n  <div class=\"card-body\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">id</th>\n        <th scope=\"col\">videoid</th>\n        <th scope=\"col\">comment</th>\n      </tr>\n      </thead>\n\n      <tbody>\n      <tr *ngFor=\"let comment of comments\">\n        <td>{{ comment.id }}</td>\n        <td>{{ comment.videoid }}</td>\n        <td>{{ comment.comment }}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <span class=\"text-muted\">Created by Zip Code Wilmington Students July 2019</span>\n  </div>\n\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class =\"navbar navbar-expand-md navbar-dark bg-info\">\n    <div><a href=\"https://www.javainuse.com\" class=\"navbar-brand\">Showboat Video Library</a></div>\n\n    <ul class=\"navbar-nav\">\n\n      <li><a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/addcomments\" class=\"nav-link\">Add Comment</a></li>\n      <li><a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/addvideo\" class=\"nav-link\">Add New Video</a></li>\n      <li><a *ngIf=\"!loginService.isUserLoggedIn()\" routerLink=\"/login\" class=\"nav-link\">Login</a></li>\n      <li><a *ngIf=\"loginService.isUserLoggedIn()\" routerLink=\"/logout\" class=\"nav-link\">LogOut</a></li>\n\n      <li class=\"list-inline-item\"><a routerLink=\"/videos\" class=\"btn btn-info\">Video Playlist</a></li>\n      <li class=\"list-inline-item\"><a routerLink=\"/comments\" class=\"btn btn-info\">Video Comments</a></li>\n      <li class=\"list-inline-item\"><a routerLink=\"/adduser\" class=\"btn btn-info\">Add User</a></li>\n\n    </ul>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    User Name : <input type=\"text\" name=\"username\" [(ngModel)]=\"username\">\n    Password : <input type=\"password\" name=\"password\" [(ngModel)]=\"password\">\n  </div>\n  <button (click)=checkLogin() class=\"btn btn-success\">\n    Login\n  </button>\n  <br>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/logout/logout.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/logout/logout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>logout works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-form/user-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-form/user-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card my-5\">\n  <div class=\"card-body\">\n    <form (ngSubmit)=\"onSubmit()\" #userForm=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" [(ngModel)]=\"user.username\"\n               class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter your name\"\n               required #name=\"ngModel\">\n      </div>\n      <div [hidden]=\"!name.pristine\" class=\"alert alert-danger\">Name is required</div>\n\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" [(ngModel)]=\"user.email\"\n               class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"Enter your email address\"\n               required #email=\"ngModel\">\n        <div [hidden]=\"!email.pristine\" class=\"alert alert-danger\">Email is required</div>\n\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"text\" [(ngModel)]=\"user.password\"\n                 class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Enter your password\"\n                 required #password=\"ngModel\">\n        </div>\n        <div [hidden]=\"!password.pristine\" class=\"alert alert-danger\">Password is required</div>\n\n      </div>\n      <button type=\"submit\" [disabled]=\"!userForm.form.valid\" class=\"btn btn-info\">Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-list/user-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-list/user-list.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-5\">\n  <div class=\"card-body\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-dark\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Email</th>\n        <th scope=\"col\">Password</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let user of users\">\n        <td>{{ user.id }}</td>\n        <td>{{ user.username }}</td>\n        <td><a href=\"mailto:{{ user.email }}\">{{ user.email }}</a></td>\n        <td>{{ user.password }}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user/user.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\">\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>Id</th>\n      <th>Name</th>\n      <th>Email</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let user of users\">\n      <td>{{user.id}}</td>\n      <td>{{user.username}}</td>\n      <td>{{user.email}}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"deleteUser(user)\"> Delete User</button></td>\n    </tr>\n    </tbody>\n  </table>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/video-form/video-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/video-form/video-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card my-5\">\n  <div class=\"card-body\">\n    <form (ngSubmit)=\"onSubmit()\" #videoForm=\"ngForm\">\n\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" [(ngModel)]=\"video.name\"\n               class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Enter your name\"\n               required #name=\"ngModel\">\n      </div>\n      <div [hidden]=\"!name.pristine\" class=\"alert alert-danger\">Name is required</div>\n\n      <label for=\"filepath\">Filepath</label>\n      <input type=\"text\" [(ngModel)]=\"video.filepath\"\n             class=\"form-control\" id=\"filepath\" name=\"filepath\" placeholder=\"Enter the path for your file\"\n             required #filepath=\"ngModel\">\n      <div [hidden]=\"!filepath.pristine\" class=\"alert alert-danger\">Filepath is required</div>\n\n      <label for=\"dateCreated\">dateCreated</label>\n      <input type=\"text\" [(ngModel)]=\"video.datecreated\"\n             class=\"form-control\" id=\"dateCreated\" name=\"dateCreated\" placeholder=\"Enter the date\"\n             required #dateCreated=\"ngModel\">\n      <div [hidden]=\"!dateCreated.pristine\" class=\"alert alert-danger\">dateCreated is required</div>\n\n      <label for=\"description\">description</label>\n      <input type=\"text\" [(ngModel)]=\"video.description\"\n             class=\"form-control\" id=\"description\" name=\"description\" placeholder=\"Enter the description\"\n             required #description=\"ngModel\">\n      <div [hidden]=\"!description.pristine\" class=\"alert alert-danger\">description is required</div>\n\n      <label for=\"description\">Upload Video</label> <br>\n      <input (change)=\"onFileChange($event)\" type=\"file\" name=\"fileUpload\" id=\"fileUpload\">\n\n      <button type=\"submit\" [disabled]=\"!videoForm.form.valid\" class=\"btn btn-info\">Submit</button>\n\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/video-list/video-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/video-list/video-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n    <div class=\"videoFrame\">\n      <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/CUVmT6_okyI\" frameborder=\"0\" allowfullscreen></iframe>\n    </div>\n  </section>\n\n<div class=\"card my-5\">\n  <div class=\"card-body\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class=\"thead-light\">\n      <tr>\n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">FilePath</th>\n        <th scope=\"col\">DateCreated</th>\n        <th scope=\"col\">Description</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let video of videos\">\n        <td>{{ video.id }}</td>\n        <td>{{ video.name }}</td>\n        <td>{{ video.filepath }}</td>\n        <td>{{ video.datecreated }}</td>\n        <td>{{ video.description }}</td>\n      </tr>\n      </tbody>\n    </table>\n\n  </div>\n\n</div>\n\n\n"

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
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/user-form/user-form.component */ "./src/app/components/user-form/user-form.component.ts");
/* harmony import */ var _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/video-list/video-list.component */ "./src/app/components/video-list/video-list.component.ts");
/* harmony import */ var _components_video_form_video_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/video-form/video-form.component */ "./src/app/components/video-form/video-form.component.ts");
/* harmony import */ var _components_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/comment-list/comment-list.component */ "./src/app/components/comment-list/comment-list.component.ts");
/* harmony import */ var _components_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/comment-form/comment-form.component */ "./src/app/components/comment-form/comment-form.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _services_auth_good_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth-good.service */ "./src/app/services/auth-good.service.ts");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-user/add-user.component */ "./src/app/components/add-user/add-user.component.ts");














var routes = [
    { path: '', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"], canActivate: [_services_auth_good_service__WEBPACK_IMPORTED_MODULE_12__["AuthGoodService"]] },
    { path: 'adduser', component: _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"] },
    { path: 'users', component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_3__["UserListComponent"] },
    { path: 'logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_11__["LogoutComponent"], canActivate: [_services_auth_good_service__WEBPACK_IMPORTED_MODULE_12__["AuthGoodService"]] },
    { path: 'adduser', component: _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_13__["AddUserComponent"], canActivate: [_services_auth_good_service__WEBPACK_IMPORTED_MODULE_12__["AuthGoodService"]] },
    { path: 'videos', component: _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_5__["VideoListComponent"] },
    { path: 'addvideo', component: _components_video_form_video_form_component__WEBPACK_IMPORTED_MODULE_6__["VideoFormComponent"] },
    { path: 'comments', component: _components_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_7__["commentListComponent"] },
    { path: 'addcomments', component: _components_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_8__["CommentFormComponent"], canActivate: [_services_auth_good_service__WEBPACK_IMPORTED_MODULE_12__["AuthGoodService"]] },
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.title = 'Video Library Group Project';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-form/user-form.component */ "./src/app/components/user-form/user-form.component.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/user-service.service */ "./src/app/services/user-service.service.ts");
/* harmony import */ var _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/video-list/video-list.component */ "./src/app/components/video-list/video-list.component.ts");
/* harmony import */ var _components_video_form_video_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/video-form/video-form.component */ "./src/app/components/video-form/video-form.component.ts");
/* harmony import */ var _services_video_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/video-service.service */ "./src/app/services/video-service.service.ts");
/* harmony import */ var _components_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/comment-list/comment-list.component */ "./src/app/components/comment-list/comment-list.component.ts");
/* harmony import */ var _components_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/comment-form/comment-form.component */ "./src/app/components/comment-form/comment-form.component.ts");
/* harmony import */ var _services_comment_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/comment-service.service */ "./src/app/services/comment-service.service.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/add-user/add-user.component */ "./src/app/components/add-user/add-user.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"],
                _components_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_8__["UserFormComponent"],
                _components_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_10__["VideoListComponent"],
                _components_video_form_video_form_component__WEBPACK_IMPORTED_MODULE_11__["VideoFormComponent"],
                _components_comment_list_comment_list_component__WEBPACK_IMPORTED_MODULE_13__["commentListComponent"],
                _components_comment_form_comment_form_component__WEBPACK_IMPORTED_MODULE_14__["CommentFormComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_17__["LogoutComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_19__["UserComponent"],
                _components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_20__["AddUserComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            ],
            providers: [_services_user_service_service__WEBPACK_IMPORTED_MODULE_9__["UserService"], _services_video_service_service__WEBPACK_IMPORTED_MODULE_12__["VideoService"], _services_comment_service_service__WEBPACK_IMPORTED_MODULE_15__["CommentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-user/add-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-user/add-user.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-user/add-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-user/add-user.component.ts ***!
  \***********************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddUserComponent = /** @class */ (function () {
    function AddUserComponent() {
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/components/add-user/add-user.component.css")]
        })
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/components/comment-form/comment-form.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/comment-form/comment-form.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC1mb3JtL2NvbW1lbnQtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/comment-form/comment-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/comment-form/comment-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: CommentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentFormComponent", function() { return CommentFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/comment */ "./src/app/model/comment.ts");
/* harmony import */ var _services_comment_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/comment-service.service */ "./src/app/services/comment-service.service.ts");





var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent(route, router, commentService) {
        this.route = route;
        this.router = router;
        this.commentService = commentService;
        this.comment = new _model_comment__WEBPACK_IMPORTED_MODULE_3__["Comment"]();
    }
    CommentFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.commentService.save(this.comment).subscribe(function (result) { return _this.gotoCommentList(); });
    };
    CommentFormComponent.prototype.gotoCommentList = function () {
        this.router.navigate(['/comments']);
    };
    CommentFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_comment_service_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] }
    ]; };
    CommentFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment-form',
            template: __webpack_require__(/*! raw-loader!./comment-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/comment-form/comment-form.component.html"),
            styles: [__webpack_require__(/*! ./comment-form.component.css */ "./src/app/components/comment-form/comment-form.component.css")]
        })
    ], CommentFormComponent);
    return CommentFormComponent;
}());



/***/ }),

/***/ "./src/app/components/comment-list/comment-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/comment-list/comment-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbWVudC1saXN0L2NvbW1lbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/comment-list/comment-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/comment-list/comment-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: commentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentListComponent", function() { return commentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_comment_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/comment-service.service */ "./src/app/services/comment-service.service.ts");



var commentListComponent = /** @class */ (function () {
    function commentListComponent(commentServices) {
        this.commentServices = commentServices;
    }
    commentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commentServices.findAll().subscribe(function (data) {
            _this.comments = data;
        });
    };
    commentListComponent.ctorParameters = function () { return [
        { type: _services_comment_service_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"] }
    ]; };
    commentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comment-list',
            template: __webpack_require__(/*! raw-loader!./comment-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/comment-list/comment-list.component.html"),
            styles: [__webpack_require__(/*! ./comment-list.component.css */ "./src/app/components/comment-list/comment-list.component.css")]
        })
    ], commentListComponent);
    return commentListComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0;\n  width:100%;\n  height: 40px;\n  background-color: #222222;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1oseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(loginService) {
        this.loginService = loginService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, loginservice) {
        this.router = router;
        this.loginservice = loginservice;
        this.username = '';
        this.password = '';
        this.invalidLogin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.checkLogin = function () {
        if (this.loginservice.authenticate(this.username, this.password)) {
            this.router.navigate(['']);
            this.invalidLogin = false;
        }
        else
            this.invalidLogin = true;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/logout/logout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nb3V0L2xvZ291dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authenticationService.logOut();
        this.router.navigate(['login']);
    };
    LogoutComponent.ctorParameters = function () { return [
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/logout/logout.component.css")]
        })
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/user-form/user-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-form/user-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-form/user-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-form/user-form.component.ts ***!
  \*************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/user */ "./src/app/model/user.ts");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");





var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.user = new _model_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.save(this.user).subscribe(function (result) { return _this.gotoUserList(); });
    };
    UserFormComponent.prototype.gotoUserList = function () {
        this.router.navigate(['/users']);
    };
    UserFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/components/user-form/user-form.component.css")]
        })
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-service.service */ "./src/app/services/user-service.service.ts");



'';
var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findAll().subscribe(function (data) {
            _this.users = data;
        });
    };
    UserListComponent.ctorParameters = function () { return [
        { type: _services_user_service_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/components/user-list/user-list.component.css")]
        })
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http-client.service */ "./src/app/services/http-client.service.ts");



var UserComponent = /** @class */ (function () {
    function UserComponent(httpClientService) {
        this.httpClientService = httpClientService;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpClientService.getUsers().subscribe(function (response) { _this.users = response; });
    };
    UserComponent.prototype.deleteUser = function (user) {
        var _this = this;
        this.httpClientService.deleteUser(user)
            .subscribe(function (data) {
            _this.users = _this.users.filter(function (u) { return u !== user; });
        });
    };
    ;
    UserComponent.ctorParameters = function () { return [
        { type: _services_http_client_service__WEBPACK_IMPORTED_MODULE_2__["HttpClientService"] }
    ]; };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/video-form/video-form.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/video-form/video-form.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW8tZm9ybS92aWRlby1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/video-form/video-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/video-form/video-form.component.ts ***!
  \***************************************************************/
/*! exports provided: VideoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoFormComponent", function() { return VideoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_video_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/video-service.service */ "./src/app/services/video-service.service.ts");
/* harmony import */ var _model_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/video */ "./src/app/model/video.ts");





var VideoFormComponent = /** @class */ (function () {
    function VideoFormComponent(route, router, videoService) {
        this.route = route;
        this.router = router;
        this.videoService = videoService;
        this.video = new _model_video__WEBPACK_IMPORTED_MODULE_4__["Video"]();
    }
    VideoFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.videoService.save(this.video).subscribe(function (result) { return _this.gotoVideoList(); });
    };
    VideoFormComponent.prototype.gotoVideoList = function () {
        this.router.navigate(['/video']);
    };
    VideoFormComponent.prototype.onFileChange = function (event) {
        this.video.file = event.target.files.item(0);
        console.log(event);
    };
    VideoFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_video_service_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"] }
    ]; };
    VideoFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-form',
            template: __webpack_require__(/*! raw-loader!./video-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/video-form/video-form.component.html"),
            styles: [__webpack_require__(/*! ./video-form.component.css */ "./src/app/components/video-form/video-form.component.css")]
        })
    ], VideoFormComponent);
    return VideoFormComponent;
}());



/***/ }),

/***/ "./src/app/components/video-list/video-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/video-list/video-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".videoFrame{\n    width:100%\n  }\n  \n  .videoFrame iframe{\n     margin: 0 auto;\n     display: block;\n     width: 560px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWRlby1saXN0L3ZpZGVvLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0VBQ0Y7O0VBRUE7S0FDRyxjQUFjO0tBQ2QsY0FBYztLQUNkLFlBQVk7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlkZW8tbGlzdC92aWRlby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlkZW9GcmFtZXtcbiAgICB3aWR0aDoxMDAlXG4gIH1cbiAgXG4gIC52aWRlb0ZyYW1lIGlmcmFtZXtcbiAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICB3aWR0aDogNTYwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/video-list/video-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/video-list/video-list.component.ts ***!
  \***************************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_video_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/video-service.service */ "./src/app/services/video-service.service.ts");



var VideoListComponent = /** @class */ (function () {
    function VideoListComponent(userService) {
        this.userService = userService;
    }
    VideoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findAll().subscribe(function (data) {
            _this.videos = data;
        });
    };
    VideoListComponent.ctorParameters = function () { return [
        { type: _services_video_service_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] }
    ]; };
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-list',
            template: __webpack_require__(/*! raw-loader!./video-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/video-list/video-list.component.html"),
            styles: [__webpack_require__(/*! ./video-list.component.css */ "./src/app/components/video-list/video-list.component.css")]
        })
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ }),

/***/ "./src/app/model/comment.ts":
/*!**********************************!*\
  !*** ./src/app/model/comment.ts ***!
  \**********************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/model/user.ts":
/*!*******************************!*\
  !*** ./src/app/model/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/model/video.ts":
/*!********************************!*\
  !*** ./src/app/model/video.ts ***!
  \********************************/
/*! exports provided: Video */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Video", function() { return Video; });
var Video = /** @class */ (function () {
    function Video() {
    }
    return Video;
}());



/***/ }),

/***/ "./src/app/services/auth-good.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth-good.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGoodService", function() { return AuthGoodService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");




var AuthGoodService = /** @class */ (function () {
    function AuthGoodService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGoodService.prototype.canActivate = function (route, state) {
        if (this.authService.isUserLoggedIn())
            return true;
        this.router.navigate(['login']);
        return false;
    };
    AuthGoodService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGoodService);
    return AuthGoodService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService() {
    }
    AuthenticationService.prototype.authenticate = function (username, password) {
        if (username === "zipcoder" && password === "password") {
            sessionStorage.setItem('username', username);
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isUserLoggedIn = function () {
        var user = sessionStorage.getItem('username');
        console.log(!(user === null));
        return !(user === null);
    };
    AuthenticationService.prototype.logOut = function () {
        sessionStorage.removeItem('username');
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/comment-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/comment-service.service.ts ***!
  \*****************************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var CommentService = /** @class */ (function () {
    function CommentService(http) {
        this.http = http;
        this.commentsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + '/comments';
    }
    CommentService.prototype.findAll = function () {
        return this.http.get(this.commentsUrl);
    };
    CommentService.prototype.save = function (comments) {
        return this.http.post(this.commentsUrl, comments);
    };
    CommentService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CommentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/services/http-client.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/http-client.service.ts ***!
  \*************************************************/
/*! exports provided: User, HttpClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientService", function() { return HttpClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var User = /** @class */ (function () {
    function User(id, username, email, password) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    User.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return User;
}());

var HttpClientService = /** @class */ (function () {
    function HttpClientService(httpClient) {
        this.httpClient = httpClient;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + '/users';
    }
    HttpClientService.prototype.getUsers = function () {
        console.log("test call");
        return this.httpClient.get(this.url);
    };
    HttpClientService.prototype.deleteUser = function (user) {
        return this.httpClient.delete(this.url + '/' + user.id);
    };
    HttpClientService.prototype.addUser = function (user) {
        return this.httpClient.post(this.url, user);
    };
    HttpClientService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    HttpClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HttpClientService);
    return HttpClientService;
}());



/***/ }),

/***/ "./src/app/services/user-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-service.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.usersUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + '/users';
    }
    UserService.prototype.findAll = function () {
        return this.http.get(this.usersUrl);
    };
    UserService.prototype.save = function (user) {
        return this.http.post(this.usersUrl, user);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/video-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/video-service.service.ts ***!
  \***************************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var VideoService = /** @class */ (function () {
    function VideoService(http) {
        this.http = http;
        this.videoUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].serverURL + '/video';
    }
    VideoService.prototype.findAll = function () {
        return this.http.get(this.videoUrl);
    };
    VideoService.prototype.save = function (video) {
        var formdata = new FormData();
        formdata.append('file', video.file);
        formdata.append('name', video.name);
        formdata.append('description', video.description);
        formdata.append('datecreated', video.datecreated);
        formdata.append('filepath', video.filepath);
        return this.http.post(this.videoUrl, formdata);
    };
    VideoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], VideoService);
    return VideoService;
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
    production: false,
    serverURL: 'http://localhost:8080'
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

module.exports = __webpack_require__(/*! /Users/donnasvinis/Desktop/fromGIT/VideoLibrary/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map