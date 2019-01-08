import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'wall-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  topNavigation = [
    {
      name: 'новости',
      path: '/info'
    },
    {
      name: 'курсы',
      path: '#'
    },
    {
      name: 'faq',
      path: '#'
    }
  ];
  bottomNavigation = [
    {
      name: 'О нас',
      path: '/aboutus'
    },
    {
      name: 'Тарифы',
      path: '#'
    },
    {
      name: 'Рефиральная программа',
      path: '#'
    },
    {
      name: 'Контакты',
      path: '#'
    },
    {
      name: 'Документация',
      path: '#'
    },
    {
      name: 'Калькулятор',
      path: '#'
    }
  ];

  constructor(
    private router: Router,
    private rout: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  routTo(path) {
    this.router.navigate([path], {relativeTo: this.rout});
  }

}
