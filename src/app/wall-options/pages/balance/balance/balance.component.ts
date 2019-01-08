import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'wall-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  constructor(
    private router: Router,
    private rout: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.router.navigate(['info'], {relativeTo: this.rout});
  }

}
