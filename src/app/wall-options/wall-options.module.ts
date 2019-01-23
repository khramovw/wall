import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { WallOptionsRoutingModule } from './wall-options-routing.module';
import { BalanceModule } from './pages/balance/balance.module';
import { SharedModule } from '../shared/shared.module';

// Componets
import { WallOptionsComponent } from './wall-options/wall-options.component';
import { ExchangeRateComponent } from './pages/exchange-rate/exchange-rate.component';


@NgModule({
  declarations: [
    WallOptionsComponent,
    ExchangeRateComponent
  ],
  imports: [
    CommonModule,
    WallOptionsRoutingModule,
    SharedModule,
    BalanceModule
  ]
})
export class WallOptionsModule { }
