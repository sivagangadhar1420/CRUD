import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ContentBuilderComponent } from './content-builder/content-builder.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';


const routes: Routes = [
  {path:'r1', component:Route1Component},
  {path:'r2', component:Route2Component}
 ,{path:'cb', component:ContentBuilderComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
  
constructor(private route:Router){ }
 }
 export const routingComponents=[Route1Component, Route2Component]


  
