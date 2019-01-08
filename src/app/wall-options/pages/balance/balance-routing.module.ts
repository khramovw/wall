import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// Components
import { BalanceComponent } from './balance/balance.component';
import { CurrencyBalanceComponent } from './currency-balance/currency-balance.component';
import { BalanceHistoryComponent } from './balance-history/balance-history.component';

const routes: Routes = [
  {path: '', component: BalanceComponent, children: [
      {path: 'info', component: CurrencyBalanceComponent},
      {path: 'history', component: BalanceHistoryComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BalanceRoutingModule { }
