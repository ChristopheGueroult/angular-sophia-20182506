import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/Operators';
import { ItemHttp } from '../../shared/interfaces/item-http.model';
import { State } from '../../shared/enums/state.enum';

@Injectable({
  providedIn: 'root'
})
export class CollectionHttpService {
  private _collection: Observable<ItemHttp[]>;
  private url = 'api/collection';
  constructor(
    private http: HttpClient
  ) {
    this.collection = this.http.get<ItemHttp[]>(this.url);
  }

  /**
   * getter collection
   */
  public get collection(): Observable<ItemHttp[]> {
    return this._collection;
  }

  /**
   * setter collection
   */
  public set collection(col: Observable<ItemHttp[]>) {
    this._collection = col;
  }

  /**
   * add item in collection
   */
  add(item: ItemHttp): Observable<ItemHttp> {
    return this.http.post<ItemHttp>(this.url, item);
  }

  /**
   * update item in collection
   */
  update(item: ItemHttp, state: State): Observable<ItemHttp> {
    let copy: ItemHttp = Object.assign({}, item);
    copy.state = state;
    return this.http.put<ItemHttp>(`${this.url}/${item.id}`, copy).pipe(
      tap((res) => {
        console.log(res)
      })
    );
  }

  /**
   * delete item in collection
   */
  delete(item: ItemHttp): Observable<ItemHttp> {
    return this.http.delete<ItemHttp>(`${this.url}/${item.id}`);
  }


}
