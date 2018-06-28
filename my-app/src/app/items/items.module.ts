import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './components/item/item.component';
import { ItemsRoutingModule } from './items-routing.module';
import { AddComponent } from './containers/add/add.component';
import { AddReactComponent } from './containers/add-react/add-react.component';
import { ListItemsHttpComponent } from './containers/list-items-http/list-items-http.component';
import { AddHttpComponent } from './containers/add-http/add-http.component';
import { EditComponent } from './containers/edit/edit.component';
import { ItemHttpComponent } from './components/item-http/item-http.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ItemsRoutingModule
  ],
  declarations: [ListItemsComponent, ItemComponent, AddComponent, AddReactComponent, ListItemsHttpComponent, AddHttpComponent, EditComponent, ItemHttpComponent]
})
export class ItemsModule { }
