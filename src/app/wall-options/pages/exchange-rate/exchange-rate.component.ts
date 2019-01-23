import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wall-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {

  newObjcurrencies: any[];
  rates;
  against: boolean;
  togglBtn;
  togglBtnObj: any[];
  link = 'assets/img/';
  currencies = [
    {id: 0, name: 'Rub', code: 'rub', img: `${this.link}currency-1.png`, rates: [
        {
          curency: 'rub', bay: 0, sell: 0, dinamic: 0
        },
        {
          curency: 'usd', bay: 0.0028, sell: 0.0025, dinamic: -1.84
        }
      ] },
    {id: 1, name: 'Bitcoin', code: 'btn', img: `${this.link}currency-2.png`, rates: [
        {
          curency: 'rub', bay: 352942, sell: 401619, dinamic: 1.84
        },
        {
          curency: 'usd', bay: 6414, sell: 6289, dinamic: 3.14
        }
      ] },
    {id: 2, name: 'Litcoin', code: 'ltc', img: `${this.link}currency-3.png`, rates: [
        {
          curency: 'rub', bay: 5306, sell: 4509, dinamic: -1.84
        },
        {
          curency: 'usd', bay: 0, sell: 0, dinamic: 0
        }
      ] },
    {id: 3, name: 'Ripple', code: 'xrp', img: `${this.link}currency-4.png`, rates: [
        {
          curency: 'rub', bay: 28624, sell: 26002, dinamic: -1.84
        },
        {
          curency: 'usd', bay: 0, sell: 0, dinamic: 0
        }
      ] },
    {id: 4, name: 'Ethereum', code: 'eth', img: `${this.link}currency-5.png`, rates: [
        {
          curency: 'rub', bay: 28624, sell: 27003, dinamic: -1.84
        },
        {
          curency: 'usd', bay: 452, sell: 430, dinamic: 1.84
        }
      ] },
    {id: 5, name: 'Dash', code: 'dsh', img: `${this.link}currency-6.png`, rates: [
        {
          curency: 'rub', bay: 28624, sell: 28004, dinamic: 0.84
        },
        {
          curency: 'usd', bay: 452, sell: 430, dinamic: 1.84
        }
      ] },
    {id: 6, name: 'BitcoinCash', code: 'bcc', img: `${this.link}currency-1.png`, rates: [
        {
          curency: 'rub', bay: 28624, sell: 30202, dinamic: 1.84
        },
        {
          curency: 'usd', bay: 0, sell: 0, dinamic: 0
        }
      ] },
    {id: 7, name: 'Peercoin', code: 'ppc', img: `${this.link}currency-2.png`, rates: [
        {
          curency: 'rub', bay: 28624, sell: 32005, dinamic: 1.84
        },
        {
          curency: 'usd', bay: 0, sell: 0, dinamic: 0
        }
      ] },
    {id: 8, name: 'Usd', code: 'usd', img: `${this.link}currency-3.png`, rates: [
        {
          curency: 'rub', bay: 28624, sell: 21006, dinamic: -1.84
        },
        {
          curency: 'usd', bay: 0, sell: 0, dinamic: 0
        }
      ] }
  ];


  constructor() { }

  ngOnInit() {
    // get list all curencies
    // this.currencies = this.currenciesService.getCuurrencies();

    // create new list curencies
    this.createNewList ();

    // finde btn toggle rate
    this.togglBtn = document.getElementsByClassName('toggle-curr-btn');
    this.against = true;
  }
  togleCurency (e) {
    // create obj togglBtn
    this.togglBtnObj = [].slice.call(this.togglBtn);

    // set active btn & toggle rate
    if ( !e.target.classList[1] ) {
      const newobj = this.togglBtnObj.filter( btn => {
        btn.classList.remove('active-btn');
      });
      this.against = !this.against;
      e.target.classList.add('active-btn');
    }
  }

  // create new list curencies
  createNewList () {
    this.newObjcurrencies = this.currencies.filter( item => item.name !== 'Rub' && item.name !== 'Usd' );
  }

}
