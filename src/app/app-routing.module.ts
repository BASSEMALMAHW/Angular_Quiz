import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardInformationComponent } from './components/card-information/card-information.component';
import { HeaderComponent } from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path:  'user/:id' , component: CardInformationComponent},
  { path: ''           , component: HomeComponent},
  { path: ''           , component: HeaderComponent},
  { path: '**'         , component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
