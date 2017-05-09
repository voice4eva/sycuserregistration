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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../services/user.service");
var UsersComponent = (function () {
    function UsersComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.users = [];
        this.firstName = '';
        this.lastName = '';
        this.id = '';
        this.foundUsers = [];
        this.userService.getUsers().subscribe(function (users) { _this.users = users; });
    }
    // add user (register)
    UsersComponent.prototype.addUser = function () {
        var _this = this;
        var newUser = {
            firstName: this.firstName,
            lastName: this.lastName
        };
        this.userService.addUser(newUser).subscribe(function (user) { _this.users.push(user); });
    };
    // remove user (unregister)
    UsersComponent.prototype.removeUser = function (id) {
        var users = this.users;
        var foundUsers = this.foundUsers;
        this.userService.removeUser(id).subscribe(function (obj) {
            if (obj.n == 1) {
                // iterate through list of all users and match id
                for (var i = 0; i < users.length; i++) {
                    if (users[i]._id == id) {
                        users.splice(i, 1);
                    }
                }
                // iterate through list of found users and match id
                for (var i = 0; i < foundUsers.length; i++) {
                    if (foundUsers[i]._id == id) {
                        foundUsers.splice(i, 1);
                    }
                }
            }
        });
    };
    // find user
    UsersComponent.prototype.findUsers = function (key) {
        var _this = this;
        this.userService.findUsers(key).subscribe(function (foundUsers) { _this.foundUsers = foundUsers; });
        console.log(this.foundUsers);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'users',
        templateUrl: 'users.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map