import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.showLoginForm();
  }

  showLoginForm() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['',  [Validators.required]]
    })
  }


  onLogin() {
    this._authService.login(this.loginForm.value);
  }

}
