import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { AddReactComponent } from './containers/add-react/add-react.component';

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddComponent },
  { path: 'add-react', component: AddReactComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  declarations: []
})
export class ItemsRoutingModule { }
