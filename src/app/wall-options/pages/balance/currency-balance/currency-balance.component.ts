import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {filter, map, mergeAll, combineAll} from 'rxjs/operators';

// Models
import {Bill} from '../../../../shared/Model/bill.model';
import {Currency} from '../../../../shared/Model/currency.model';

// Services
import { CurrencyService } from '../../../../shared/services/currency.service';
import {FixerioService} from '../../../../shared/services/fixerio.service';
import index from '@angular/cli/lib/cli';


@Component({
  selector: 'wall-currency-balance',
  templateUrl: './currency-balance.component.html',
  styleUrls: ['./currency-balance.component.scss']
})
export class CurrencyBalanceComponent implements OnInit {

  balanceList = [
    {id: 0, name: 'bitcoin', count: 0.00002323, imgPath: 'currency-1.png'},
    {id: 0, name: 'bitcoin', count: 0, imgPath: 'currency-4.png'},
    {id: 0, name: 'bitcoin', count: '0.00002323', imgPath: 'currency-5.png'},
  ];
  currencyList;

  constructor(
    private currencyService: CurrencyService,
    private fixerioService: FixerioService
    ) { }

  ngOnInit() {
    this.currencyService.getCurrency().subscribe((cl: Currency[]) => this.currencyList = cl);
    this.currencyService.getBill().subscribe((bills: Bill[]) => {
      console.log('BiLL$: ', this.balanceList);
      bills.filter( (bill, i) => {
        // this.balanceList[i] = bill;
        // this.balanceList[i].name = this.currencyList[i].name;
      });


      // console.log('LIST: ', this.balanceList);
    }, error => error, () => console.log('complete'));

    // of(this.currencyService.getCurrency(), this.currencyService.getBill(), this.balanceList)
    //   .pipe(
    //     mergeAll(),
    //     map((...all) => {
    //       // console.log('---ELS[0]', all[0]);
    //       all.filter((el, i) => console.log('---ELS[0]', el, i));
    //     })
    //   )
    //   .subscribe((i) => {
    //     // console.log(i);
    //   }, error => console.log(error), () => console.log('complite'));
    // this.fixerioService.getCurrency().subscribe(list => console.log(list));
  }

}
