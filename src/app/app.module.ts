import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {UserManagmentService} from './services/user-managment.service';
import { CardInformationComponent } from './components/card-information/card-information.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { NgxSpinnerModule } from "ngx-spinner";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { RequestCacheService } from './services/request-cache.service';
import { CachingInterceptorService } from './services/caching-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    CardInformationComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginationModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers:
  [UserManagmentService,
    RequestCacheService,
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
