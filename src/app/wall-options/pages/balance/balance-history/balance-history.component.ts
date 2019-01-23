import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wall-balance-history',
  templateUrl: './balance-history.component.html',
  styleUrls: ['./balance-history.component.scss']
})
export class BalanceHistoryComponent implements OnInit {
  historylist;
  historyTransactions = [
    { id: 1,
      operation: 'Пополнение',
      amount: '500',
      curency: 'rub',
      percent: '10',
      requisites: '410013429418058',
      comments: '-',
      status: 'Исполнено',
      date: '11.05.18 / 08:08:08',
    },
    { id: 2,
      operation: 'Вывод',
      amount: '500',
      curency: 'rub',
      percent: '10',
      requisites: '410013429418058',
      comments: 'Комент, он делается на пару строчек и чутка растяг, коротко обычно бывает.',
      status: 'Откланено',
      date: '11.05.18 / 08:08:08',
    },
    { id: 3,
      operation: 'Перевод от Пользавателя',
      amount: '500',
      curency: 'rub',
      percent: '10',
      requisites: '410013429418058',
      comments: 'Комент, он делается на пару строчек.',
      status: 'Получен',
      date: '11.05.18 / 08:08:08',
    },
    { id: 4,
      operation: 'Перевод Пользавателю',
      amount: '500',
      curency: 'rub',
      percent: '10',
      requisites: '410013429418058',
      comments: 'Комент.',
      status: 'Исполнено',
      date: '11.05.18 / 08:08:08',
    },
    { id: 5,
      operation: 'Пополнение',
      amount: '500',
      curency: 'usd',
      percent: '10',
      requisites: '410013429418058',
      comments: '-',
      status: 'Исполнено',
      date: '11.05.18 / 08:08:08',
    },
    { id: 6,
      operation: 'Перевод Пользавателю',
      amount: '500',
      curency: 'rub',
      percent: '10',
      requisites: '410013429418058',
      comments: '-',
      status: 'Получен',
      date: '11.05.18 / 08:08:08',
    },
    { id: 7,
      operation: 'Вывод',
      amount: '500',
      curency: 'usd',
      percent: '10',
      requisites: '410013429418058',
      comments: `
        Комент, он делается на пару строчек и чутка растяг,
        коротко обычно бывает. Комент, он делается на пару строчек и чутка растяг,
        коротко обычно бывает. Комент, он делается на пару строчек и чутка растяг,
        коротко обычно бывает.
        `,
      status: 'Получен',
      date: '11.05.18 / 08:08:08',
    }
  ];


  constructor() { }

  ngOnInit() {
    this.historylist = this.historyTransactions;
  }

}
