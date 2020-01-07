import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AuthGuard } from '../auth/auth.guard';





const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: 'admin-home', component: AdminHomeComponent

            
        }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
