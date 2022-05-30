import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  public VerifyForm !: FormGroup;
  constructor(private router: Router,
              private login:LoginService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.VerifyForm = new FormGroup({
      code: new FormControl("", [Validators.required,Validators.minLength(6),Validators.maxLength(6)])
    })
  }
  OnVerify() {
    const formData = new FormData()
    formData.append('code', this.VerifyForm.get('code')?.value)
    this.login.varifyEmail(formData).subscribe(res=>{
      this.VerifyForm.reset()
      this.snackBar.open("Register successfully", "close", {
        duration: 2000,
        panelClass:['sucessalert']
      });
      this.router.navigate(["/signin"])
    },err=>{
      this.snackBar.open(err.error.error, "close", {
        duration: 2000,
        panelClass:['erroralert']
      });
    })
  }
}
