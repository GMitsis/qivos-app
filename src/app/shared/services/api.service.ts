import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class ApiService {

    constructor(private _http: Http) {

    }

    private handleErrors(error: any) {
        return Observable.throw(error.json());
    }

    get(params) {       
        return this._http.get(`${environment.google_api_url}`, { search: params })
            .catch(this.handleErrors)
            .map((res: Response) => res.json())
    }

}