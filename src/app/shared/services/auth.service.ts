import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

export class User {
    constructor (
        public firstName: string,
        public lastName: string,
        public cardNumber: number,
        public email: string,
        public password: string,
        public mobileNumber: number,
        public gender: string) {

    }
}

let users = [
    new User(
        'Grigorios',
        'Mitsis',
        123456789,
        'test@test.com',
        'test',
        6976455180,
        'male'
    )
]

@Injectable()
export class AuthService {
    
    loggedIn = false;

    private currentUser: any;

    constructor(private _router: Router) {

    }

    getCurrentUser() {
        return this.currentUser;
    }
    

    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 300);
            }
        );
        return promise;
    }

    login(credentials) {
        let authenticatedUser = users.find(user => user.email === credentials.email);
        
        this.currentUser = authenticatedUser;

        if(authenticatedUser && authenticatedUser.password === credentials.password) {
            this.loggedIn = true;
            this._router.navigate(["/profile"]);
            return true;
        }
        return false;
    }

    logout() {
        this.loggedIn = false;
    }
}