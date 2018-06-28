import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { ListItemsComponent } from './containers/list-items/list-items.component';
import { AddComponent } from './containers/add/add.component';
import { AddReactComponent } from './containers/add-react/add-react.component';
import { ListItemsHttpComponent } from './containers/list-items-http/list-items-http.component';
import { AddHttpComponent } from './containers/add-http/add-http.component';
import { EditComponent } from './containers/edit/edit.component';

const appRoutes: Routes = [
  { path: 'list', component: ListItemsComponent },
  { path: 'add', component: AddComponent },
  { path: 'add-react', component: AddReactComponent },
  { path: 'list-http', component: ListItemsHttpComponent },
  { path: 'add-http', component: AddHttpComponent },
  { path: 'edit/:id', component: EditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
