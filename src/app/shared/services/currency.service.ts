import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {filter, map} from 'rxjs/operators';


// Models
import { Currency } from '../Model/currency.model';
import { Bill } from '../Model/bill.model';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getCurrency(): Observable <Currency[]> {
    return this.http.get(`http://localhost:4400/currencyList`)
      .pipe(map((el: Currency[]) => el));
  }
  getBill(): Observable <Bill[]> {
    return this.http.get(`http://localhost:4400/billUser`)
      .pipe(map((el: Bill[]) => el));
  }
}
