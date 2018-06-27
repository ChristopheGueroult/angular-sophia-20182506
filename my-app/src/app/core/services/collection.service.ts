import { Injectable } from '@angular/core';
import { Item } from '../../shared/interfaces/item.model';
import { COLLECTION } from '../collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  private _collection: Item[];
  constructor() {
    this.collection = COLLECTION;
  }

  /**
   * getter collection
   */
  public get collection(): Item[] {
    return this._collection;
  }

  /**
   * setter collection
   */
  public set collection(col: Item[]) {
    this._collection = col;
  }

  /**
   * get one item from collection
   */

  /**
   * add item in collection
   */
  add(item: Item): void {
    this.collection.push(item);
  }

  /**
   * update item in collection
   */

  /**
   * delete item in collection
   */


}
