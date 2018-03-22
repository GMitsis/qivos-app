import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  
  profileForm: FormGroup;
  
  user: any;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.user = this._authService.getCurrentUser();

    this.createProfileForm();
    this.patchProfileValues();
  }

  createProfileForm() {
    this.profileForm = this._formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mobileNumber: ['', [Validators.required]],
      gender: ['']
    })
  }

  patchProfileValues() { 
    this.profileForm.patchValue(this.user);
  }

  onKeyPress(event) {
    let char = event.which ? event.which : event.keyCode;

    if (!(char == 8) && (char < 48 || char > 57)) {
      return false;
    }
  }

  goBack() {
    this._location.back();
  }

}
