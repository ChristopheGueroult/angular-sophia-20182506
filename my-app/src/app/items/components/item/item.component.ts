import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Item } from '../../../shared/interfaces/item.model';
import { State } from '../../../shared/enums/state.enum';
import { ItemHttp } from '../../../shared/interfaces/item-http.model';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  public state = State;
  constructor(
    private collectionService: CollectionService
  ) { }

  ngOnInit() {
  }

  public changeState(state: State) {
    this.item.state = state;
    this.collectionService.update(this.item);
  }

  public delete(): void {
    this.collectionService.delete(this.item);
  }

}
