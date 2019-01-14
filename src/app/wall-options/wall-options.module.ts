import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { WallOptionsRoutingModule } from './wall-options-routing.module';
import { BalanceModule } from './pages/balance/balance.module';
import { SharedModule } from '../shared/shared.module';

// Componets
import { WallOptionsComponent } from './wall-options/wall-options.component';


@NgModule({
  declarations: [
    WallOptionsComponent
  ],
  imports: [
    CommonModule,
    WallOptionsRoutingModule,
    SharedModule,
    BalanceModule
  ]
})
export class WallOptionsModule { }
