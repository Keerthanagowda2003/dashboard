import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailsComponent } from './dashboard/student-details/student-details.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDetailsComponent,
    AboutUsComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
