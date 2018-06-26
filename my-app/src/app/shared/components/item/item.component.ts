import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Item } from '../../interfaces/item.model';
import { State } from '../../enums/state.enum';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public state = State;
  public dateJour = new Date(1988, 3, 15);
  constructor() { }

  ngOnInit() {
  }

  public changeState(state: State) {
    this.item.state = state;
    // par la suite on appelera la methode update de collectionService pour persister en bdd
  }

}
