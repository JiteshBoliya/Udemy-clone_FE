import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public LoginForm !: FormGroup;
  constructor(private router: Router,
              private login:LoginService,
              private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
    })
  }
  
  OnLogin() {
    const formData = new FormData()
    formData.append('email', this.LoginForm.get('email')?.value)
    formData.append('password', this.LoginForm.get('password')?.value)
    this.login.login(formData).subscribe(res=>{
      localStorage.setItem('UID',res._id)
      localStorage.setItem('UToken',res.token)
      if(res.type=="publisher") this.router.navigate(["/publisher-dashboard"])
      else if(res.type=="admin") this.router.navigate(["/Admin-dashboard"])
      else this.router.navigate(["/home"])
      this.LoginForm.reset()
    },err=>{
      this.snackBar.open("Wrong Email Id or password....!", "close", {
        duration: 2000,
        panelClass: ['danger']
      });
    })
  }
}
