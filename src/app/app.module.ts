import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './subscriber/home/home.component';
import { ContactComponent } from './subscriber/contact/contact.component';
import { NavComponent } from './subscriber/nav/nav.component';
import { CourseSearchComponent } from './subscriber/course-search/course-search.component';
import { CourseDetailsComponent } from './subscriber/course-details/course-details.component';
import { FooterComponent } from './subscriber/footer/footer.component';
import { CourseWatchComponent } from './subscriber/course-watch/course-watch.component';
import { AboutComponent } from './subscriber/about/about.component';
import { StudentProfileComponent } from './subscriber/student-profile/student-profile.component';
import { InstructorProfileComponent } from './subscriber/instructor-profile/instructor-profile.component';
import { CartComponent } from './subscriber/cart/cart.component';
import { CheckoutComponent } from './subscriber/checkout/checkout.component';
import { SigninComponent } from './subscriber/signin/signin.component';
import { SignupComponent } from './subscriber/signup/signup.component';
import { VerifyEmailComponent } from './subscriber/verify-email/verify-email.component';
import { RessetPasswordComponent } from './subscriber/resset-password/resset-password.component';
import { ForgetPasswordComponent } from './subscriber/forget-password/forget-password.component';
import { PageNotfoundComponent } from './subscriber/page-notfound/page-notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavComponent,
    CourseSearchComponent,
    CourseDetailsComponent,
    FooterComponent,
    CourseWatchComponent,
    AboutComponent,
    StudentProfileComponent,
    InstructorProfileComponent,
    CartComponent,
    CheckoutComponent,
    SigninComponent,
    SignupComponent,
    VerifyEmailComponent,
    RessetPasswordComponent,
    ForgetPasswordComponent,
    PageNotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
