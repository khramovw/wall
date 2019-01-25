import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'wall-wall-options',
  templateUrl: './wall-options.component.html',
  styleUrls: ['./wall-options.component.scss']
})
export class WallOptionsComponent implements OnInit {

  menuSwitch: boolean;
  menuOpenSwitch: boolean;
  accountSettingsNav = [
    {name: 'Админка', path: '/admin'},
    {name: 'Настройки', path: '/settings'},
    {name: 'Профиль', path: '/profile'},
    {name: 'Аунтификация', path: '/acidification'},
    {name: 'Партнерская программа', path: '/referer'},
    {name: 'VIP аккаунт', path: '/vip-account'},
    {name: 'Выход', path: '/login'}
  ];
  navigationMenu = [
    {name: 'Баланс', path: '/balance', imgPath: 'nav-ico-1.png'},
    {name: 'Курсы валют', path: '/exchange-rate', imgPath: 'nav-ico-2.png'},
    {name: 'Пополнить', path: 'null', imgPath: 'nav-ico-3.png', navIcoPath: 'keyboard_arrow_down', children: [
        {name: 'В рублях', path: '/settings'},
        {name: 'В доллорах', path: '/settings'},
        {name: 'В криптовалюте', path: '/settings'}
      ]},
    {name: 'Отправить', path: 'null', imgPath: 'nav-ico-4.png', navIcoPath: 'keyboard_arrow_down', children: [
        {name: 'В рублях', path: '/settings'},
        {name: 'В доллорах', path: '/settings'},
        {name: 'В криптовалюте', path: '/settings'},
        {name: 'Пользавателю', path: '/settings'},
      ]},
    {name: 'Обмен', path: '/referer', imgPath: 'nav-ico-5.png'},
    {name: 'Support', path: '/vip-account', imgPath: 'nav-ico-6.png'}
  ];
  footerMenu = [
    [
      {title: 'О нас', path: '/about'},
      {title: 'Тарифы и комиссия', path: '/fees'},
      {title: 'Курсы', path: '/exchange-rate'}
    ],
    [
      {title: 'Реферальная программа', path: '/referal'},
      {title: 'Справочный центр', path: '/reference'},
      {title: 'Контакты', path: '/contacts'}
    ],
  ];

  constructor(
    private router: Router,
    private rout: ActivatedRoute
  ) { }


  ngOnInit() {
    this.menuSwitch = false;
  }

  // Toggle mobile menu
  toggleMenu () {
    this.menuOpenSwitch = !this.menuOpenSwitch;
    this.menuSwitch = true;
  }

  routTo(path) {
    if (path === '/login') {
      path = '/login';
    }
    if (path === 'null') {
      return;
    }
    this.router.navigate([path], {relativeTo: this.rout});
  }

  routToMenu (e) {
    event.preventDefault();
    this.router.navigate([e]);
    window.scrollTo(0, 0);
  }
}
