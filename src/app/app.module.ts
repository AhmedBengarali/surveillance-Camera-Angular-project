import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileMenuComponent } from './components/profile-menu/profile-menu.component';
import { TeamComponent } from './team/team.component';
import { KnownVisitorComponent } from './known-visitor/known-visitor.component';
import { UnknownVisitorComponent } from './unknown-visitor/unknown-visitor.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { EditVisitorComponent } from './edit-visitor/edit-visitor.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AuthentificationComponent,
    HomeComponent,
    MenuComponent,
    ProfileMenuComponent,
    TeamComponent,
    KnownVisitorComponent,
    UnknownVisitorComponent,
    AddVisitorComponent,
    EditVisitorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
