import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) { }

  user: any;

  ngOnInit() {
    this.user = this._authService.getCurrentUser();
  }

  editProfile() {
    this._router.navigate(["profile/edit"]);
  }

  
}
 