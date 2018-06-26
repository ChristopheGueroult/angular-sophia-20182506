import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ref'
})
export class RefPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(value);
    // console.log(args);
    return `${this.formatRef(args.state)}-${value}`;
  }

  private formatRef(ref: string): string {
    return ref.toUpperCase().replace(/ /g, '').substr(0, 2);
  }

}
