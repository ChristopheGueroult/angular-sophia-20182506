import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../interfaces/item.model';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { DateConvertService } from '../../../core/services/date-convert.service';

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
    private dateConvertService: DateConvertService
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
      birthday: ''
    }
  }

  public process(): void {
    this.newItem.birthday = this.dateConvertService.dateToIso(this.birthday);
    this.nItem.emit(this.newItem);
    this.init();
  }

}
