import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class AddressService {

    constructor(private _apiService : ApiService) {

    }

    showAddress(params) {
      return this._apiService.get(params)
          .map(data => data.results[0].geometry.location);
    }
} 