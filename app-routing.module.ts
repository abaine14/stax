import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { HomepageComponent } from './components/homepage/homepage.component';


const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'invoice', component:AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
