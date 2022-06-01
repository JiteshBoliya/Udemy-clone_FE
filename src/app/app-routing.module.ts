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
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component'
import { AdminPublisherManageComponent } from './Admin/admin-publisher-manage/admin-publisher-manage.component';
import { PublisherDashboardComponent } from './publisher/publisher-dashboard/publisher-dashboard.component';
import { PublisherManageCourseComponent } from './publisher/publisher-manage-course/publisher-manage-course.component';
import { PublisherManageUserComponent } from './publisher/publisher-manage-user/publisher-manage-user.component';
import { PublisherManageDoubtsComponent } from './publisher/publisher-manage-doubts/publisher-manage-doubts.component';
import { PublisherManageProfileComponent } from './publisher/publisher-manage-profile/publisher-manage-profile.component';
import { AdminSubscriberManageComponent } from './Admin/admin-subscriber-manage/admin-subscriber-manage.component';
import { AdminGetInTouchManageComponent } from './Admin/admin-get-in-touch-manage/admin-get-in-touch-manage.component';
const routes: Routes = [
  //Subscriber
  {
    path:'', 
    redirectTo:'/home', 
    pathMatch:'full'
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
  //Admin
  { path: 'Admin-dashboard', component: AdminDashboardComponent },
  { path: 'Admin-publisher', component: AdminPublisherManageComponent },
  { path: 'Admin-subscriber', component: AdminSubscriberManageComponent },
  { path: 'Admin-getInTouch', component: AdminGetInTouchManageComponent },
  //publisher
  { path: 'publisher-dashboard', component: PublisherDashboardComponent },
  { path: 'publisher-course', component: PublisherManageCourseComponent},
  { path: 'publisher-user', component: PublisherManageUserComponent },
  { path: 'publisher-doubts', component: PublisherManageDoubtsComponent },
  { path: 'publisher-profile', component: PublisherManageProfileComponent },

  {
    path:'page-notfound',
    component: PageNotfoundComponent
  },
  // {path:'**',redirectTo:'/page-notfound'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
