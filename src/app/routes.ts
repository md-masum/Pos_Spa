import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WarehouseComponent } from './warehouse/warehouse/warehouse.component';
import { ShopComponent } from './shop/shop/shop.component';
import { AuthGuard } from './_guards/auth.guard';
import { CategoryComponent } from './warehouse/setup/category/category.component';
import { SubCategoryComponent } from './warehouse/setup/sub-category/sub-category.component';
import { HomeComponent } from './warehouse/home/home.component';
import { DashboardComponent } from './warehouse/dashboard/dashboard.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    {
        path: '',
        canActivate: [AuthGuard],
        component: WarehouseComponent,
        children: [
            { path: 'warehouse/home', component: HomeComponent},
            { path: 'warehouse/dashboard', component: DashboardComponent},
            { path: 'warehouse/setup/category', component: CategoryComponent},
            { path: 'warehouse/setup/sub-category', component: SubCategoryComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
