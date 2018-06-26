import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  declarations: [NavComponent, ItemComponent, StateDirective],
  exports: [NavComponent, ItemComponent]
})
export class SharedModule { }
