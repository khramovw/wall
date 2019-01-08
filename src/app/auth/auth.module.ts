import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Vodules
import { SharedModule } from '../shared/shared.module';

// Components
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetComponent } from './reset/reset.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    ResetComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
