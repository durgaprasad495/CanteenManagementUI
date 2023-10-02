import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenets/login/login.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './componenets/register/register.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { authGuard } from './guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent,canActivate:[authGuard]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
