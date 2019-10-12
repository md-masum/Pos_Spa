import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule, TabsModule, BsDatepickerModule, PaginationModule, ButtonsModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AlertifyService } from './_services/alertify.service';
import { LoginComponent } from './login/login.component';
import { from } from 'rxjs';
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
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      BsDatepickerModule.forRoot(),
      PaginationModule.forRoot(),
      TabsModule.forRoot(),
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
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
