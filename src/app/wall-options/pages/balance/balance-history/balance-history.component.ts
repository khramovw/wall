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
      invoice: ['500', 'rub', '10', '410013429418053'],
      comments: '-',
      status: [0, 4],
      date: 1548325460110,
    },
    { id: 2,
      invoice: ['500', 'rub', '10', '410013429418054'],
      comments: `
      Комент, он делается на пару строчек и чутка растяг,
       коротко обычно бывает.
        Обычно бывает, но делается на пару строчек и чутка растяг
        `,
      status: [1, 5],
      date: 1548325460110,
    },
    { id: 3,
      invoice: ['500', 'rub', '10', '410013429418055'],
      comments: 'Короткий комент',
      status: [2, 6],
      date: 1548325460110,
    },
    { id: 3,
      invoice: ['500', 'rub', '10', '410013429418056'],
      comments: 'Комент',
      status: [1, 3],
      date: 1548325460110,
    },
    { id: 4,
      invoice: ['500', 'rub', '10', '410013429418057'],
      comments: '-',
      status: [1, 4],
      date: 1548325460110,
    },
    { id: 5,
      invoice: ['500', 'rub', '10', '410013429418058'],
      comments: '-',
      status: [2, 4],
      date: 1548325460110,
    },
    { id: 6,
      invoice: ['500', 'rub', '10', '410013429418058'],
      comments: '-',
      status: [2, 6],
      date: 1548325460120,
    },
    { id: 7,
      invoice: ['500', 'rub', '10', '410013429418058'],
      comments: '-',
      status: [2, 3],
      date: 1548325460121,
    },
    { id: 8,
      invoice: ['500', 'rub', '10', '410013429418058'],
      comments: '-',
      status: [2, 3],
      date: 1548325460122,
    },
    { id: 9,
      invoice: ['500', 'rub', '10', '410013429418058'],
      comments: '-',
      status: [2, 6],
      date: 1548325460123,
    },
    { id: 10,
      invoice: ['500', 'rub', '10', '410013429418058'],
      comments: '-',
      status: [2, 4],
      date: 1548325460124,
    }
  ];
  configScrolBar = {
    suppressScrollX: true,
  };
  p: number = 1;
  // collection: any[] = someArrayOfThings;


  constructor() { }

  ngOnInit() {
    this.historylist = this.historyTransactions;

    // Add icon type operation
    this.historylist.filter(el => {
      if ( !el ) {
        return;
      } else if ( el.status[1] === 3 ) {
        el.icon = 'reply';
      } else if ( el.status[1] === 4 ) {
        el.icon = 'add_circle';
      } else if (el.status[1] === 5 || 6 ) {
        el.icon = 'group';
      }
    });
    console.log('ekl', this.historylist);
  }

  trackByFn(index, item) {
    return item.id;
  }

}
