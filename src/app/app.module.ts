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
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { DialogUserComponent } from './shared/dailogs/dialog-user/dialog-user.component';
import { DialogAdduserComponent } from './shared/dailogs/dialog-adduser/dialog-adduser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Chart } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
// import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { HttpModule } from 'http';
import { AuthInterceptorServiceService } from './shared/service/auth-interceptor.service.service';
import { ReactiveFormsModule } from '@angular/forms';
import {MaterialExampleModule } from './material.module';
import { AdminNavComponent } from './Admin/admin-nav/admin-nav.component';
import { AdminPublisherManageComponent } from './Admin/admin-publisher-manage/admin-publisher-manage.component';
import { PublisherNavComponent } from './publisher/publisher-nav/publisher-nav.component';
import { PublisherDashboardComponent } from './publisher/publisher-dashboard/publisher-dashboard.component';
import { PublisherManageUserComponent } from './publisher/publisher-manage-user/publisher-manage-user.component';
import { PublisherManageCourseComponent } from './publisher/publisher-manage-course/publisher-manage-course.component';
import { PublisherManageProfileComponent } from './publisher/publisher-manage-profile/publisher-manage-profile.component';
import { PublisherManageDoubtsComponent } from './publisher/publisher-manage-doubts/publisher-manage-doubts.component'
import { DataTablesModule } from 'angular-datatables';
import * as XLSX from 'xlsx';
import { AdminSubscriberManageComponent } from './Admin/admin-subscriber-manage/admin-subscriber-manage.component';
import { AdminGetInTouchManageComponent } from './Admin/admin-get-in-touch-manage/admin-get-in-touch-manage.component';
import { DialogPublisherprofileComponent } from './shared/dailogs/dialog-publisherprofile/dialog-publisherprofile.component';
import { DialogCourseComponent } from './shared/dailogs/dialog-course/dialog-course.component';
import { NgxEditorModule } from 'ngx-editor';
import { PublisherSalesComponent } from './publisher/publisher-sales/publisher-sales.component';
import { PublisherManageTutorialComponent } from './publisher/publisher-manage-tutorial/publisher-manage-tutorial.component';
import { DialogTutorialComponent } from './shared/dailogs/dialog-tutorial/dialog-tutorial.component';
import { PublisherRatingComponent } from './publisher/publisher-rating/publisher-rating.component';
import { NgxPrintModule } from "ngx-print";
import { AngularFireModule } from "@angular/fire/compat";
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
  AngularFireUploadTask
} from "@angular/fire/compat/storage";
import { environment } from '../environments/environment';
import { UploadDetailsComponent } from './shared/file-upload/upload-details/upload-details.component';
import { UploadListComponent } from './shared/file-upload/upload-list/upload-list.component';
import { DialogCourseViewComponent } from './shared/dailogs/dialog-course-view/dialog-course-view.component';
@NgModule({
  declarations: [
    //Subscriber
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
    AdminDashboardComponent,
    //Admin
    DialogUserComponent,
    DialogAdduserComponent,
    AdminDashboardComponent,
    AdminNavComponent,
    AdminPublisherManageComponent,
    AdminSubscriberManageComponent,
    AdminGetInTouchManageComponent,
    //Publisher
    PublisherNavComponent,
    PublisherDashboardComponent,
    PublisherManageUserComponent,
    PublisherManageCourseComponent,
    PublisherManageProfileComponent,
    PublisherManageDoubtsComponent,
    DialogPublisherprofileComponent,
    DialogCourseComponent,
    PublisherSalesComponent,
    PublisherManageTutorialComponent,
    DialogTutorialComponent,
    PublisherRatingComponent,
    UploadDetailsComponent,
    UploadListComponent,
    DialogCourseViewComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DataTablesModule,
    NgxEditorModule,
    NgxPrintModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    NgChartsModule,
    // FileUpload
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
