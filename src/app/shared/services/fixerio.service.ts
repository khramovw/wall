import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixerioService {

  constructor(private  http: HttpClient) { }

  getCurrency (): Observable <any> {
    return this.http.get(`http://data.fixer.io/api/latest?access_key=bb4bf023ece4c0b718f3bfa106027e62`);
  }
}
