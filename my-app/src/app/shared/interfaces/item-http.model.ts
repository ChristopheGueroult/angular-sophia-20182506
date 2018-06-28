import { State } from "../enums/state.enum";

export interface ItemHttp {
  id: number;
  name: string;
  reference: string;
  state: State;
  birthday: string;
}
