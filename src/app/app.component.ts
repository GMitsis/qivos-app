import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private _authService: AuthService,
    private _router: Router) {
  }

  isLoggedIn = this._authService.loggedIn;

  onLogout() {
    this._authService.logout();
    this._router.navigate(["/login"]);
  }
}
