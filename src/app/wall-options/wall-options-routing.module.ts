import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { WallOptionsComponent } from './wall-options/wall-options.component';
import { BalanceComponent } from './pages/balance/balance/balance.component';


const routes: Routes = [
  {path: '', component: WallOptionsComponent, children: [
      // {path: 'balance', loadChildren: './pages/balance/balance.module#BalanceModule'}
      // {path: '', redirectTo: 'balance', pathMatch: 'full'},
      {path: 'balance', component: BalanceComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WallOptionsRoutingModule { }
