import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private fb: FormBuilder
  ) { }


  ngOnInit() {
    this.createForm();
  }

  public process(): void {
    this.form.get('birthday').setValue( new Date(this.ngbDateParserFormatter.format(this.form.get('birthday').value)) ) ;
    this.nItem.emit(this.form.value);
    this.form.reset(); // ici facultatif car redirection
    this.form.get('state').setValue(State.ALIVRER); // facultatif car redirection
  }

  private createForm() {
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
        '',
        Validators.compose([Validators.required, Validators.minLength(10)])
      ],
    });
  }

}
