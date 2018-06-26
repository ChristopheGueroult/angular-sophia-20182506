import { Directive, OnChanges, Input, HostBinding } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: State;
  @HostBinding('class') cssName: string;
  constructor() {
  }

  ngOnChanges(): void {
    this.cssName = this.formatClass(this.appState);
  }

  private formatClass(etat: State): string {
    return `state-${etat.normalize('NFD').replace(/[\u0300-\u036f|\s]/g, '').toLowerCase()}`;
  }

}
