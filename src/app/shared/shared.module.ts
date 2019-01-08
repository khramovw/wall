import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaptchaModule } from 'primeng/captcha';


// Components
import { RecapchaComponent } from './recapcha/recapcha.component';
import { SelectDirective } from './directive/select.directive';
import { AcardionDirective } from './directive/acardion.directive';

@NgModule({
  declarations: [
    RecapchaComponent,
    SelectDirective,
    AcardionDirective
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
    AcardionDirective
  ]
})
export class SharedModule { }
