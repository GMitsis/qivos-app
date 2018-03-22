import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

import { AddressService } from '../shared/services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  addressForm: FormGroup;

  latitude = 38.0144808;
  longitude = 23.8183516;
  
  userAddress: string[];
  addressEntered = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _location: Location,
    private _addressService: AddressService
  ) { }

  ngOnInit() {
    this.showAddressForm();
  }

  showAddressForm() {
    this.addressForm = this._formBuilder.group({
      address: [''],
      city: [''],
      country: [''],
      postCode: ['']
    })
  }

  showAddress() {
    let formValues = this.addressForm.value;
    
    this.userAddress = [];

    for(const key of Object.keys(formValues)) {  
      if(formValues[key]) {
        this.userAddress.push(encodeURIComponent(formValues[key]).replace(/%20/g,'+')); 
      }
    } 
   
    if(this.userAddress.length > 0) { 
      let address = this. userAddress.join("+").replace(/%20/g,'+').replace(/%2C/g,'');

      let params = { 
        address: address,
        key: 'AIzaSyAk8tJ6od1nghi699P3a7SV6418CLMSp0k'
      } 
  
      this._addressService.showAddress(params)
        .subscribe(
          data => {
            this.latitude = data.lat;
            this.longitude = data.lng;
          }
        )
  
      this.addressEntered = true;

    }



  }

  goBack() {
    this._location.back();
  }


}
