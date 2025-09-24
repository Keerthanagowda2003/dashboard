import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentDetailsComponent } from './dashboard/student-details/student-details.component';
import { AboutUsComponent } from './dashboard/about-us/about-us.component';
import { ContactUsComponent } from './dashboard/contact-us/contact-us.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  { path: 'dashboard', component: DashboardComponent ,
    children: [
      { path: 'student-details', component: StudentDetailsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: '', redirectTo: '', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
