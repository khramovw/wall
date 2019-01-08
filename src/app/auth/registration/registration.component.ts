import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'wall-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  onPartner: boolean;

  constructor(
    private router: Router,
    private rout: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onPartner = false;
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'name': new FormControl(null, [Validators.minLength(6)]),
      'partner': new FormControl(null, [Validators.minLength(6)]),
      'termsofuseagree': new FormControl(null, [Validators.requiredTrue]),
      'moneybackpolicy': new FormControl(null, [Validators.requiredTrue])
    });
  }

  addPartner() {
    this.onPartner = !this.onPartner;
  }

  routTo(link) {
    this.router.navigate(
      [link],
      {
        relativeTo: this.rout,
        queryParams: {request: 'repeat-mail'}
      }
    );
  }

  onSubmit() {
  }
}

