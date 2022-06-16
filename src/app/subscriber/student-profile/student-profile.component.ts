import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FileUpload } from 'src/app/shared/models/file-upload';
import { AdminService } from 'src/app/shared/service/admin.service';
import { AuthGuard } from 'src/app/shared/service/auth.guard';
import { AuthService } from 'src/app/shared/service/auth.service';
import { FileUploadService } from 'src/app/shared/service/file-upload.service';
import { LoginService } from 'src/app/shared/service/login.service';
import { UserService } from 'src/app/shared/service/user.service';
import Swal from 'sweetalert2';
import { RessetPasswordComponent } from '../resset-password/resset-password.component';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  user!: any
  courseList!:any
  public profileForm !: FormGroup;
  publisherDetail: any;
  TotalEnrollCourse: any;
  SubscriberDetail: any;
  file: any;
  img: any;
  currentFileUpload: any;
  basepath: any;
  uploadImage: any;
  constructor(private admin:AdminService,
              private snackBar: MatSnackBar,
              private auth:AuthService,
              private login:LoginService,
              private authGurd: AuthGuard,
              private router: Router,
              public userservice:UserService,
              private uploadService: FileUploadService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstname: new FormControl(""),
      lastname:new FormControl(""),
      email: new FormControl(""),
      phoneno:new FormControl(""),
      nationality:new FormControl(""),
      job:new FormControl(""),
    })
    this.auth.usersubject.subscribe(res=>{
      if(res==null){
        this.login.getUserInfo(localStorage.getItem('UID')).subscribe(res=>{
          this.auth.updateUser(res)
        })
      }
      this.user=res
    })
    this.userservice.getCourse(this.user?this.user.data._id:localStorage.getItem('UID')).subscribe(res=>{
      this.courseList=res
      console.log(res);
      
    })
    this.userservice.getTotal_EnrollCourse(this.user?this.user.data._id:localStorage.getItem('UID')).subscribe(res=>{
      this.TotalEnrollCourse=res
    })
     this.userservice.getSubscriberDetail(this.user?this.user.data._id:localStorage.getItem('UID')).subscribe(res=>{
      this.SubscriberDetail=res
      this.img=this.SubscriberDetail.image
    })

  // #Auto logout
  if (this.authGurd.canActivate() == false) this.router.navigate([''])
  }
  OnSubmit(){
    
    const formData = new FormData()
    formData.append('firstname', this.profileForm.get('firstname')?.value)
    formData.append('lastname', this.profileForm.get('lastname')?.value)
    formData.append('email', this.profileForm.get('email')?.value)
    formData.append('phoneno', this.profileForm.get('phoneno')?.value)
    formData.append('nationality', this.profileForm.get('nationality')?.value)
    formData.append('job', this.profileForm.get('job')?.value)

    this.admin.upadateSubscriber(this.user.data._id,formData).subscribe(res=>{
      this.snackBar.open("Profile updated sucessfully", "close", {
        duration: 2000,
        panelClass: ['danger']
      });
      this.profileForm.reset()
    },err=>{
      this.snackBar.open("Somthing want Wrong....!", "close", {
        duration: 2000,
        panelClass: ['danger']
      });
    })

  }
  resetpass(){
    this.dialog.open(RessetPasswordComponent)
  }
  Logout(){
    Swal.fire({
      title: 'Are you sure to Logout ?',
      text: ``,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear()
        this.userservice.user=null
        this.router.navigate([''])
        window.location.href = 'http://localhost:4200/home'  
      }
    })
  }
  // getPublisher(id:any){
  //   this.userservice.getpublisher(id).subscribe(res=>{
  //     this.publisherDetail=res
  //   })
  // }
  detectFiles(event:any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      this.file = event.target.files; 
      reader.readAsDataURL(this.file[0]);
      reader.onload = () => {
        this.img = reader.result as string;
      };
    }
    this.uploadimg()
  }
  uploadimg(){
    this.currentFileUpload = new FileUpload(this.file[0]);
    console.log(this.currentFileUpload);
    
    this.basepath = `Subscriber`
       this.uploadService.pushFileToStorage(this.currentFileUpload,this.basepath).subscribe(async res=>{
       await this.uploadService.getLink().map(res => {
           this.uploadImage= res;
           console.log(this.uploadImage);
         })
       },
       error => {
           console.log(error);
       }); 
 }
}
