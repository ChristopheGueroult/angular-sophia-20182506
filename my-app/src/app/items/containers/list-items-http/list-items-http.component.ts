import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ItemHttp } from '../../../shared/interfaces/item-http.model';
import { CollectionHttpService } from '../../../core/services/collection-http.service';

@Component({
  selector: 'app-list-items-http',
  templateUrl: './list-items-http.component.html',
  styleUrls: ['./list-items-http.component.css']
})
export class ListItemsHttpComponent implements OnInit, OnDestroy {
  // private sub: Subscription;
  public collection: Observable<ItemHttp[]>;
  // public collection: Item[];
  constructor(
    private collectionHttpService: CollectionHttpService
  ) { }

  ngOnInit() {
    this.collection = this.collectionHttpService.collection;
    // this.sub = this.collectionService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

}
