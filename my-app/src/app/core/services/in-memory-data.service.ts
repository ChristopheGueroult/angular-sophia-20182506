import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { State } from '../../shared/enums/state.enum';
import { ItemHttp } from '../../shared/interfaces/item-http.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const collection: ItemHttp[] = [
      {
        id: 0,
        name: 'Sylvain',
        reference: '1245',
        state: State.ALIVRER,
        birthday: '2018-06-30T00:00:00.000Z'
      },
      {
        id: 1,
        name: 'Franck',
        reference: '2255',
        state: State.ENCOURS,
        birthday: '2018-06-30T00:00:00.000Z'
      },
      {
        id: 2,
        name: 'Stephanie',
        reference: '8855',
        state: State.LIVREE,
        birthday: '2018-06-30T00:00:00.000Z'
      }
    ];
    return {collection};
  }
}
