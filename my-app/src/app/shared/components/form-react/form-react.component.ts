import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateConvertService } from '../../../core/services/date-convert.service';

@Component({
  selector: 'app-form-react',
  templateUrl: './form-react.component.html',
  styleUrls: ['./form-react.component.css']
})
export class FormReactComponent implements OnInit {
  public intitules = Object.values(State);
  @Output() nItem: EventEmitter<Item> = new EventEmitter<Item>();
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dateConvertService: DateConvertService
  ) { }


  ngOnInit() {
    this.createForm();
  }

  public process(): void {
    this.form.get('birthday').setValue( this.dateConvertService.dateToIso(this.form.get('birthday').value) ) ;
    this.nItem.emit(this.form.value);
    this.form.reset(); // ici facultatif car redirection
    this.form.get('state').setValue(State.ALIVRER); // facultatif car redirection
  }


  private createForm() {
    // const date: Date = new Date('Wed Jun 27 2018 02:00:00 GMT+0200');
    this.form = this.fb.group({

      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      reference: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)])
      ],
      state: State.ALIVRER,
      birthday: [
        // {
        //   year: date.getFullYear(),
        //   month: date.getMonth(),
        //   day: date.getDay()
        // },
        '',
        Validators.compose([Validators.required, Validators.minLength(10)])
      ],
    });
  }

}
