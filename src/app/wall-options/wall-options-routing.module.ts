import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { WallOptionsComponent } from './wall-options/wall-options.component';
import { BalanceComponent } from './pages/balance/balance/balance.component';
import { CurrencyBalanceComponent } from './pages/balance/currency-balance/currency-balance.component';
import { BalanceHistoryComponent } from './pages/balance/balance-history/balance-history.component';


const routes: Routes = [
  {path: '', component: WallOptionsComponent, children: [
      {path: 'balance', component: BalanceComponent, children: [
          {path: 'info', component: CurrencyBalanceComponent},
          {path: 'history', component: BalanceHistoryComponent},
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WallOptionsRoutingModule { }
