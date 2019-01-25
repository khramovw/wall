import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaptchaModule } from 'primeng/captcha';


// Components
import { RecapchaComponent } from './recapcha/recapcha.component';
import { SelectDirective } from './directive/select.directive';
import { AcardionDirective } from './directive/acardion.directive';
import { StatusPipe } from './pipes/status.pipe';

@NgModule({
  declarations: [
    RecapchaComponent,
    SelectDirective,
    AcardionDirective,
    StatusPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CaptchaModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RecapchaComponent,
    CaptchaModule,
    SelectDirective,
    AcardionDirective,
    StatusPipe
  ]
})
export class SharedModule { }
