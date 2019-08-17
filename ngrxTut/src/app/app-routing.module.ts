import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { AppComponent } from './app.component';
import { NgrxComponent } from './ngrx/ngrx.component';


const routes: Routes = [
{path:"promise", component:PromiseComponent},
{path:"ngrx",component:NgrxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }