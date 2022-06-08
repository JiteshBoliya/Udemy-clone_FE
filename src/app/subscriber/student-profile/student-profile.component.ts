import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { LoginService } from 'src/app/shared/service/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  user!: any
  public profileForm !: FormGroup;
  constructor(private admin:AdminService,
              private snackBar: MatSnackBar,
              private auth:AuthService,
              private login:LoginService,
              private router: Router) { }

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
  }
  OnSubmit(){
    console.log("hiii");
    
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
        this.router.navigate([''])  
      }
    })
  }

}
