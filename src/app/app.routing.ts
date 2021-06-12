import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { KnownVisitorComponent } from './known-visitor/known-visitor.component';
import { UnknownVisitorComponent } from './unknown-visitor/unknown-visitor.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';

const routes: Routes = [
  {
    path: '',
    component: AuthentificationComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  {
    path: 'kown-visitors',
    component: KnownVisitorComponent,
  },
  {
    path: 'unkown-visitors',
    component: UnknownVisitorComponent,
  },
  {
    path: 'add-visitor',
    component: AddVisitorComponent,
  },
  {
    path: 'edit-visitor',
    component: EditVisitorComponent,
  }, {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
