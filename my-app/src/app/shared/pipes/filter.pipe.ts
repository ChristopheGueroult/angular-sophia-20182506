import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(value);
    // console.log(args);
    args = args.toLowerCase();
    return args ? value.filter( item => item.name.toLowerCase().indexOf(args) !== -1 ) : value;
  }

}
