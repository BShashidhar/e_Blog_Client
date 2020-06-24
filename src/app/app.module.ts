import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { NotifierModule } from "angular-notifier";

import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { UserHomeComponent } from './user/user-home/user-home.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserChangePasswordComponent } from './user/user-change-password/user-change-password.component';
import { CategoryComponent } from './user/core/category/category.component';
import { ArticleComponent } from './user/core/article/article.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserRegisterComponent } from './user/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNavbarComponent,
    UserHomeComponent,
    UserLoginComponent,
    UserChangePasswordComponent,
    CategoryComponent,
    ArticleComponent,
    UserRegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    LayoutModule,
    NotifierModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
