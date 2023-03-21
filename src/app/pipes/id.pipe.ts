import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id'
})
export class IdPipe implements PipeTransform {
  //todavia no tenemos id
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
