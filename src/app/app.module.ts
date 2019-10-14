import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule, TabsModule, CollapseModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
   suppressScrollX: true
 };

import { from } from 'rxjs';

import {
   AppAsideModule,
   AppBreadcrumbModule,
   AppHeaderModule,
   AppFooterModule,
   AppSidebarModule,
 } from '@coreui/angular';

import { AppComponent } from './app.component';
import { AlertifyService } from './_services/alertify.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { appRoutes } from './routes';
import { WarehouseComponent } from './warehouse/warehouse/warehouse.component';
import { ShopComponent } from './shop/shop/shop.component';
import { CategoryComponent } from './warehouse/setup/category/category.component';
import { SubCategoryComponent } from './warehouse/setup/sub-category/sub-category.component';
import { AuthGuard } from './_guards/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './warehouse/home/home.component';
import { DashboardComponent } from './warehouse/dashboard/dashboard.component';
import { TopNavComponent } from './warehouse/top-nav/top-nav.component';
import { SetupService } from './_services/setup.service';
import { CategorysListResolver } from './_resolvers/category-list.resolver';

export function tokenGetters() {
   return localStorage.getItem('token');
}

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      WarehouseComponent,
      TopNavComponent,
      ShopComponent,
      HomeComponent,
      DashboardComponent,
      CategoryComponent,
      SubCategoryComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      AppAsideModule,
      AppBreadcrumbModule.forRoot(),
      AppFooterModule,
      AppHeaderModule,
      AppSidebarModule,
      PerfectScrollbarModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      TabsModule.forRoot(),
      CollapseModule.forRoot(),
      ButtonsModule.forRoot(),
      JwtModule.forRoot({
         config: {
            tokenGetter: tokenGetters,
            whitelistedDomains: ['localhost:57847'],
            blacklistedRoutes: ['localhost:57847/api/auth/login']
         }
      })
   ],
   providers: [
      AuthService,
      SetupService,
      AlertifyService,
      AuthGuard,
      CategorysListResolver
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
