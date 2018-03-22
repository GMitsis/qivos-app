import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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

    loginStatus = new BehaviorSubject<boolean>(false);

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
                    resolve(this.loginStatus);
                }, 300);
            }
        );
        return promise;
    }

    login(credentials) {
        let authenticatedUser = users.find(user => user.email === credentials.email);
        
        this.currentUser = authenticatedUser;

        if(authenticatedUser && authenticatedUser.password === credentials.password) {
            this.loginStatus.next(true);
            this._router.navigate(["/profile"]);
            return true;
        }
        return false;
    }

    logout() {
        this.loginStatus.next(false);
    }

    status() {
       return this.loginStatus.asObservable();
    }
} 