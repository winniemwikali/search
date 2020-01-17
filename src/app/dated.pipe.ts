import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dated'
})
export class DatedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
