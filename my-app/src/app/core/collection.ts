import { Item } from "../shared/interfaces/item.model";
import { State } from "../shared/enums/state.enum";

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Sylvain',
    reference: '1245',
    state: State.ALIVRER,
    birthday: new Date(1988, 3, 15)
  },
  {
    id: 'b1',
    name: 'Franck',
    reference: '2255',
    state: State.ENCOURS,
    birthday: new Date(1998, 3, 22)
  },
  {
    id: 'c1',
    name: 'Stephanie',
    reference: '8855',
    state: State.LIVREE,
    birthday: new Date(1973, 4, 23)
  }
]
