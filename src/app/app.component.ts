import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthService } from "./shared/services/auth.service";

import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  status: Observable<boolean>;

  constructor(private _authService: AuthService, private _router: Router) {
    this.status = _authService.status();
  }

  onLogout() {
    this._authService.logout();
    this._router.navigate(["/login"]);
  }
}
