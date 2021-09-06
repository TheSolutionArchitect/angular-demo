import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { ManageUserComponent } from './components/user/manage-user/manage-user.component';
import { ListUserComponent } from './components/user/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ManageUserComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
