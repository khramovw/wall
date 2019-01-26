import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaptchaModule } from 'primeng/captcha';

// Perfect Scrollbar
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Pagination
import { NgxPaginationModule } from 'ngx-pagination';

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
    CaptchaModule,
    PerfectScrollbarModule,
    NgxPaginationModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RecapchaComponent,
    CaptchaModule,
    SelectDirective,
    AcardionDirective,
    StatusPipe,
    PerfectScrollbarModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
