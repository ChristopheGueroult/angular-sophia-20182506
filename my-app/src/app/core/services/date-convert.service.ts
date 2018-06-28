import { Injectable } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class DateConvertService {

  constructor(
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) { }

  public dateToIso(arg: any): string {
    arg = new Date(this.ngbDateParserFormatter.format(arg));
    return arg.toISOString();
  }

}
