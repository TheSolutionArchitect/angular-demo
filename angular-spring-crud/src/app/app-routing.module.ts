import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddUserComponent } from '../app/components/user/add-user/add-user.component';
import {ManageUserComponent} from '../app/components/user/manage-user/manage-user.component';
import {ListUserComponent} from '../app/components/user/list-user/list-user.component'; 

const routes: Routes = [
  { path: '', redirectTo: 'listuser', pathMatch: 'full' },
  { path: 'adduser', component: AddUserComponent },
  { path: 'manageuser/:id', component: ManageUserComponent },
  { path: 'listuser', component: ListUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
