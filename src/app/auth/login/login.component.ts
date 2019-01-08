import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'wall-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private rout: ActivatedRoute
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
  }

  routTo(link, query) {
    this.router.navigate(
      [link],
      {
        relativeTo: this.rout,
        queryParams: {request: query}
      }
     );
  }

}
