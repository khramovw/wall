import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {
  result: string;

  transform(value: number, args?: any): string {
    if ( value === 0) {
      this.result = 'Откланено';
    } else if ( value === 1 ) {
      this.result = 'Исполнено';
    } else if ( value === 2 ) {
      this.result = 'Получен';
    } else if ( value === 3 ) {
      this.result = 'Вывод';
    } else if ( value === 4 ) {
      this.result = 'Пополнение';
    } else if ( value === 5 ) {
      this.result = 'Перевод Пользавателю';
    } else if ( value === 6 ) {
      this.result = 'Перевод от Пользавателя';
    }
    return this.result;
  }

}
