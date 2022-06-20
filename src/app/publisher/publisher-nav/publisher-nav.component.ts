import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth.guard';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DeshboardService } from 'src/app/shared/service/deshboard.service';
import { LoginService } from 'src/app/shared/service/login.service';
import { RessetPasswordComponent } from 'src/app/subscriber/resset-password/resset-password.component';
import { DialogPublisherprofileComponent } from 'src/app/shared/dailogs/dialog-publisherprofile/dialog-publisherprofile.component';
import Swal from 'sweetalert2';
import { PublisherService } from 'src/app/shared/service/publisher.service';
@Component({
  selector: 'app-publisher-nav',
  templateUrl: './publisher-nav.component.html',
  styleUrls: ['./publisher-nav.component.css']
})
export class PublisherNavComponent implements OnInit {
  user!:any
  uid!:any
  UserData: any;
  constructor(private router: Router,
              private deshboard: DeshboardService,
              private authGurd: AuthGuard,
              private login:LoginService,
              private auth:AuthService,
              private dialog: MatDialog,
              private publisher:PublisherService) { }

  ngOnInit(): void {
    this.auth.usersubject.subscribe(res=>{
      if(res==null){
        this.user=this.login.getUserInfo(localStorage.getItem('UID')).subscribe(res=>{
          this.auth.updateUser(res)
          this.publisher.getPublisherDetail(res?.data._id).subscribe(res=>{
            this.UserData=res
            console.log(res);
            
          })
        })
      }
      
    })
  // #Auto logout
  if (this.authGurd.canActivate() == false) this.router.navigate([''])
  }
  onLogout() {
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
        // this.router.navigate([''])  
        window.location.href = 'http://localhost:4200/home' 
      }
    })
  }
  open(){
    this.dialog.open(RessetPasswordComponent)
  }
  profile(){
    this.dialog.open(DialogPublisherprofileComponent)
  }
}
