import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Modules
import { AuthModule } from './auth/auth.module';
import { WallOptionsModule } from './wall-options/wall-options.module';
import {BalanceModule} from './wall-options/pages/balance/balance.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    WallOptionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
