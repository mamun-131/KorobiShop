import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/shop/home/home.component';
import { PagesModule } from './components/pages/pages.module';
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
    //    component: HomeComponent
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
            //,
            //{
            //    path: 'blog',
            //    loadChildren: './components/blog/blog.module#BlogModule'
            //}
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
