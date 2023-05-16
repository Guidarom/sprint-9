import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWords'
})
export class LimitWordsPipe implements PipeTransform {
  transform(value: string, limit: number): string {
    if (!value) return '';

    const words = value.split(' ');
    if (words.length <= limit) return value;

    const limitedWords = words.slice(0, limit).join(' ');
    return limitedWords + '...';
  }
}
