import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';

// Components
import { BalanceComponent } from './balance/balance.component';
import { CurrencyBalanceComponent } from './currency-balance/currency-balance.component';
import { BalanceHistoryComponent } from './balance-history/balance-history.component';


@NgModule({
  declarations: [
    BalanceComponent,
    CurrencyBalanceComponent,
    BalanceHistoryComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule
  ]
})
export class BalanceModule { }
