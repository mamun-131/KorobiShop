import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/shop/home/home.component';
import { PagesModule } from './components/pages/pages.module';
import { AuthGuard } from './components/auth/auth.guard';
import { HomeFourComponent } from './components/shop/home-four/home-four.component';
import { CounterComponent } from './counter/counter.component';
//import { DemoComponent } from './components/demo/demo.component';


const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home/four'
        ,
        pathMatch: 'full'
    },
    //{
    //    path: '',
    //    component: HomeFourComponent
    //},
    {
        path: '',
        component: MainComponent,
        children: [

            {
                path: 'home',
                loadChildren: './components/shop/shop.module#ShopModule'
            }
            ,
            {
                path: 'pages',
                loadChildren: './components/pages/pages.module#PagesModule'
            }

            ,
            {
                path: 'user',
                loadChildren: './components/user/user.module#UserModule'

            }            
            ,
            {
                path: 'admin',
                loadChildren: './components/admin/admin.module#AdminModule'
                , canActivate: [AuthGuard],

                data: {
                    permittedRoles: ['Admin']

                }
            }
        ]
    },

    {
        path: '**',
        redirectTo: 'home/four'
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
