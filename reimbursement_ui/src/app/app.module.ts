import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { SlickCarouselModule } from 'ngx-slick-carousel'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { ApplyReimbursementComponent } from './apply-reimbursement/apply-reimbursement.component';
import { ViewReimbursementComponent } from './view-reimbursement/view-reimbursement.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { MgrHomeComponent } from './mgr-home/mgr-home.component';
import { ResolveReimbursementsComponent } from './resolve-reimbursements/resolve-reimbursements.component';
import { ViewAllReimbursementsComponent } from './view-all-reimbursements/view-all-reimbursements.component';

import { RestApiService } from './rest-api.service';
import { UserService } from './user.service';


const routes: Routes = [
   
   {
       path:'', pathMatch: 'full', redirectTo: 'login'
   },
   {
       path:'*', pathMatch: 'full', redirectTo: 'login'
   },
   {
       path:'login', component: LoginComponent
   },
   {
       path:'base', 
       component:BaseComponent,
       children: [
        { path: 'empHome', component: HomeComponent},
        { path: 'applyReim', component: ApplyReimbursementComponent },
        { path: 'viewReim', component: ViewReimbursementComponent},
        { path: 'viewProfile', component: ViewProfileComponent},
        { path: 'logout', component: LogoutComponent},
        { path: 'mgrHome', component: MgrHomeComponent},
        { path: 'resolve', component: ResolveReimbursementsComponent},
        { path: 'viewAll', component: ViewAllReimbursementsComponent}
    ]
   }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BaseComponent,
    ApplyReimbursementComponent,
    ViewReimbursementComponent,
    ViewProfileComponent,
    LogoutComponent,
    HomeComponent,
    MgrHomeComponent,
    ResolveReimbursementsComponent,
    ViewAllReimbursementsComponent
  ],
  imports: [
    BrowserModule, SlickCarouselModule, FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [RestApiService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
