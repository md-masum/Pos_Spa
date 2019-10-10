import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WarehouseComponent } from './warehouse/warehouse/warehouse.component';
import { ShopComponent } from './shop/shop/shop.component';
import { AuthGuard } from './_guards/auth.guard';
import { CategoryComponent } from './warehouse/setup/category/category.component';
import { SubCategoryComponent } from './warehouse/setup/sub-category/sub-category.component';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'warehouse', component: WarehouseComponent},
            { path: 'shop', component: ShopComponent},
            { path: 'warehouse/setup/category', component: CategoryComponent},
            { path: 'warehouse/setup/sub-category', component: SubCategoryComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
