"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'LoginApp';
        this.user = {
            name: 'John Snow',
            password: ''
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'login',
<<<<<<< 17167064ee3a97eb48a58ea5be5ea03660195891:src/app/app.component.js
            moduleId: module.id,
            templateUrl: './user.component.html',
            directives: [common_1.FORM_DIRECTIVES]
=======
            template: "\n  <div class=\"all\">\n    <section class=\"section__content\">\n     <h1>{{title}}</h1>\n     <h2>Welcome back, {{user.name}}</h2>\n    </section>\n    <section class=\"section__form\">\n      <div>\n        <label>email: </label>\n        <input class=\"login__input\" placeholder=\"yourname@email.net\">\n      </div>\n      <div>\n        <label>password: </label>\n        <input class=\"login__input\" type=\"password\" value=\"{{user.password}}\">\n      </div>\n      <button [disabled]=\"loading\" class=\"login__btn\">Login</button>\n    </section>\n  </div>\n\n  "
>>>>>>> adding some love to this page:app/app.component.js
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map