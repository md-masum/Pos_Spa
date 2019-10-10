import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

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

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      WarehouseComponent,
      ShopComponent,
      CategoryComponent,
      SubCategoryComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRoutes),
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
