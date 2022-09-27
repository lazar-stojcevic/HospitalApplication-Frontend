import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderModule } from './header/header.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { CustomInterceptor } from './services/interceptor';
import { AppointmentsModule } from './appointments/appointments.module';
import { ProfilesModule } from './profiles/profiles.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderModule,
    LoginModule,
    HttpClientModule,
    AppointmentsModule,
    ProfilesModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
