import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from '../auth/auth.guard';





const routes: Routes = [
  {
    path: '',
    children: [
        {
            path: 'profile', component: UserProfileComponent

            , canActivate: [AuthGuard],

            data: {
                permittedRoles: ['Customer', 'Admin']

            }
        }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
