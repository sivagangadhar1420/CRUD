import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos/todos.component';
import { TodoItemsComponent } from './Components/todo-items/todo-items.component';
import { AddTodosComponent } from './Components/add-todos/add-todos.component';
import { BluePrint1Service } from './Services/blue-print1.service';
import { HttpClientModule } from '@angular/common/http';
import { BSComponent } from './Components1/bs/bs.component';
import { GetServiceService } from './Components1/get-service.service';
import { ShowDataComponent } from './Components1/show-data/show-data.component';
import { AddComponent } from './Components1/add/add.component';
import { ItemsComponent } from './Components2/items/items.component';
import { SecondSService } from './Components2/second-s.service';
import { AddingAssetsComponent } from './Components2/adding-assets/adding-assets.component';
import { TodosAddComponent } from './Components3/todos-add/todos-add.component';
import { DeleteComponent } from './Components3/delete/delete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { ContentBuilderComponent } from './content-builder/content-builder.component';


@NgModule({
  declarations: [
    AppComponent,
  
    TodosComponent,
    TodoItemsComponent,
    AddTodosComponent,
    BSComponent,
    ShowDataComponent,
    AddComponent,
    ItemsComponent,
    AddingAssetsComponent,
    TodosAddComponent,
    DeleteComponent,
    routingComponents,
    ContentBuilderComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,MaterialModule],

  providers: [BluePrint1Service, GetServiceService, SecondSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
