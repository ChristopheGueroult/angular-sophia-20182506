import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StateDirective } from './directives/state.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { RefPipe } from './pipes/ref.pipe';
import { RouterModule } from '@angular/router';
import { CollapseDirective } from './directives/collapse.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  declarations: [NavComponent, StateDirective, FilterPipe, RefPipe, CollapseDirective],
  exports: [NavComponent, StateDirective, FilterPipe, RefPipe]
})
export class SharedModule { }
