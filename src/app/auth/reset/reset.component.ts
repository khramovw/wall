import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'wall-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  form: FormGroup;
  formHeader: string;
  formBtn: string;

  constructor(
    private router: Router,
    private rout: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
    });
    this.rout.queryParams.subscribe((params: Params) => {
      if ( params.request === 'password-reset' ) {
        this.formHeader = 'Запросить сброс пароля';
        this.formBtn = 'Получить новый пароль';
      }
      if ( params.request === 'repeat-mail' ) {
        this.formHeader = 'Повторная отправка письма активации';
        this.formBtn = 'Отправить письмо';
      }
    });
  }

  onSubmit() {}

}
