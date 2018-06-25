import { Item } from "../shared/interfaces/item.model";
import { State } from "../shared/enums/state.enum";

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Sylvain',
    reference: '1245',
    state: State.ALIVRER
  },
  {
    id: 'b1',
    name: 'Franck',
    reference: '2255',
    state: State.ENCOURS
  },
  {
    id: 'c1',
    name: 'Stephanie',
    reference: '8855',
    state: State.LIVREE
  }
]
