import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';
import { NewAppointeComponent } from './new-appointe/new-appointe.component';

const routes: Routes = [
  {path:'',redirectTo:'dash',pathMatch:'full'},
  {path:'dash',component:DashboardComponent},
  {path:'list',component:ListComponent},
  {path:'news',component:NewAppointeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
