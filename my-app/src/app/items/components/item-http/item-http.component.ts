import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ItemHttp } from '../../../shared/interfaces/item-http.model';
import { State } from '../../../shared/enums/state.enum';
import { CollectionHttpService } from '../../../core/services/collection-http.service';


@Component({
  selector: 'app-item-http',
  templateUrl: './item-http.component.html',
  styleUrls: ['./item-http.component.css']
})
export class ItemHttpComponent implements OnInit {
  @Input() item: ItemHttp;
  public state = State;
  constructor(
    private collectionHttpService: CollectionHttpService
  ) { }

  ngOnInit() {
  }

  public changeState(state: State) {
    this.item.state = state;
    this.collectionHttpService.update(this.item, state).subscribe((data) => {

    });
  }

  public delete(): void {
    this.collectionHttpService.delete(this.item);
  }

}
