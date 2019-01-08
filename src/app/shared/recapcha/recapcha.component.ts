import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wall-recapcha',
  templateUrl: './recapcha.component.html',
  styleUrls: ['./recapcha.component.scss']
})
export class RecapchaComponent implements OnInit {

  msgs = [];

  constructor() { }

  ngOnInit() {
  }

  showResponse(event) {
    this.msgs.push({severity: 'info', summary: 'Succees', detail: 'User Responded'});
  }

}
