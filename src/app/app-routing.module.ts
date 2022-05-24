import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RessetPasswordComponent } from './subscriber/resset-password/resset-password.component';
import { AboutComponent } from './subscriber/about/about.component';
import { CartComponent } from './subscriber/cart/cart.component';
import { CheckoutComponent } from './subscriber/checkout/checkout.component';
import { ContactComponent } from './subscriber/contact/contact.component';
import { CourseDetailsComponent } from './subscriber/course-details/course-details.component';
import { CourseSearchComponent } from './subscriber/course-search/course-search.component';
import { CourseWatchComponent } from './subscriber/course-watch/course-watch.component';
import { HomeComponent } from './subscriber/home/home.component';
import { InstructorProfileComponent } from './subscriber/instructor-profile/instructor-profile.component';
import { SigninComponent } from './subscriber/signin/signin.component';
import { SignupComponent } from './subscriber/signup/signup.component';
import { StudentProfileComponent } from './subscriber/student-profile/student-profile.component';
import { VerifyEmailComponent } from './subscriber/verify-email/verify-email.component';
import { ForgetPasswordComponent } from './subscriber/forget-password/forget-password.component';
import { PageNotfoundComponent } from './subscriber/page-notfound/page-notfound.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'course-search', component: CourseSearchComponent },
  { path: 'course-details', component: CourseDetailsComponent },
  { path: 'course-watches', component: CourseWatchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'student-profile', component: StudentProfileComponent },
  { path: 'instructor-profile', component: InstructorProfileComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  { path: 'resset-password', component: RessetPasswordComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'page-notfound', component: PageNotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
