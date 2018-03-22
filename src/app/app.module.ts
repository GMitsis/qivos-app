import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddressComponent } from './address/address.component';

import { ApiService } from './shared/services/api.service';
import { AddressService } from './shared/services/address.service';

import { AgmCoreModule } from '@agm/core';

import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth-guard.service';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: MyProfileComponent
      },
      {
        path: 'edit',
        component: EditProfileComponent
      },
      {
        path: 'address',
        component: AddressComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    PageNotFoundComponent,
    MyProfileComponent,
    AddressComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB0dqUR4iWzaFj7--Quuai6BN9tLR6yoyg'
    }),
    HttpModule,

  ],
  providers: [ApiService, AddressService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
