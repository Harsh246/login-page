import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
 
import {LoginService} from './login.service';
import { PopUpComponent } from './pop-up/pop-up.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginBoxComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
