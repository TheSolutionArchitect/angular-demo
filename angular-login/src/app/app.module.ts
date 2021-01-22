import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './navigation/toolbar/toolbar.component';
import { UserprofileComponent } from './user/userprofile/userprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CandidateprofileComponent } from './applyonline/candidateprofile/candidateprofile.component';
import { AcademicprofileComponent } from './applyonline/academicprofile/academicprofile.component';
import { UploadDocumentComponent } from './applyonline/upload-document/upload-document.component';
import { PaymentComponent } from './applyonline/payment/payment.component';
import { ApplicationreviewComponent } from './applyonline/applicationreview/applicationreview.component';
import { GroupComponent } from './user/group/group.component';
import { UniversityprofileComponent } from './organization/university/universityprofile/universityprofile.component';
import { InstitutionprofileComponent } from './organization/institution/institutionprofile/institutionprofile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidenavComponent,
    ToolbarComponent,
    UserprofileComponent,
    DashboardComponent,
    CandidateprofileComponent,
    AcademicprofileComponent,
    UploadDocumentComponent,
    PaymentComponent,
    ApplicationreviewComponent,
    GroupComponent,
    UniversityprofileComponent,
    InstitutionprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
