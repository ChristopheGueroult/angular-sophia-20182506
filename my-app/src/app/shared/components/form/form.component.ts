import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item.model';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public birthday: NgbDateStruct;
  public intitules = Object.values(State);
  public newItem: Item;
  @Output() nItem: EventEmitter<Item> = new EventEmitter<Item>();
  constructor(
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.newItem = {
      id: '',
      name: '',
      reference: '',
      state: State.ALIVRER,
      birthday: new Date()
    }
  }

  public process(): void {
    this.newItem.birthday = new Date(this.ngbDateParserFormatter.format(this.birthday));
    this.nItem.emit(this.newItem);
    this.init();
  }

}
