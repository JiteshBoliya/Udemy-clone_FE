import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  public EmailForm !: FormGroup;
  constructor(private router: Router,
              private login:LoginService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.EmailForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
    })
  }
  OnSend() {
    const formData = new FormData()
    formData.append('email', this.EmailForm.get('email')?.value)
    this.login.forgetPassword(formData).subscribe(res=>{
      this.snackBar.open("Email sent successfully", "close", {
        duration: 2000,
        panelClass:['sucessalert']
      });
      this.router.navigate(["/signin"])
    })
  }

}
