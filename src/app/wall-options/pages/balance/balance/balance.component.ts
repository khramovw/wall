import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'wall-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  balanceNav = [
    {name: 'Баланс криптовалют', path: 'info', imgPath: ''},
    {name: 'История транзакций', path: 'history', imgPath: ''}
  ];

  constructor(
    private router: Router,
    private rout: ActivatedRoute
  ) { }

  ngOnInit() {
    this.routTo('info');
  }
  routTo(path) {
    this.router.navigate([path], {relativeTo: this.rout});
  }

}
