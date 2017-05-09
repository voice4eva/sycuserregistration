import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: 'users.component.html'
})

export class UsersComponent {
    users = [];
    firstName = '';
    lastName = '';
    id = '';
    foundUsers = [];



    constructor(private userService: UserService) {
        this.userService.getUsers().subscribe(users => { this.users = users; });
    }
    // add user (register)
    addUser() {
        var newUser = {
            firstName: this.firstName,
            lastName: this.lastName
            }
        this.userService.addUser(newUser).subscribe(user => { this.users.push(user) });
    }

    // remove user (unregister)
    removeUser(id) {
        var users = this.users;
        var foundUsers = this.foundUsers;
        this.userService.removeUser(id).subscribe(obj => {
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
    }
    // find user
    findUsers(key) {
        this.userService.findUsers(key).subscribe(foundUsers => { this.foundUsers = foundUsers; });
        console.log(this.foundUsers);
    }
}
