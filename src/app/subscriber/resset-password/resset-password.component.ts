import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/service/auth.service';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-resset-password',
  templateUrl: './resset-password.component.html',
  styleUrls: ['./resset-password.component.css']
})
export class RessetPasswordComponent implements OnInit {
  public resetform !: FormGroup;
  user: any;
  constructor(private login: LoginService,
              private auth: AuthService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<RessetPasswordComponent>) { }

  ngOnInit(): void {
    this.resetform = new FormGroup({
      password: new FormControl("", [Validators.required]),
      repassword: new FormControl("", [Validators.required])
    })
    this.subjectdata()
  }
  onReset() {
    const formData = new FormData()
    const password = this.resetform.get('password')?.value
    const repassword = this.resetform.get('repassword')?.value

    if (repassword != password) {
      this.resetform.get('repassword')?.reset()
      return
    }
    else {

      formData.append('password', password)
      this.login.resetPassword(this.user.data._id, formData).subscribe(res => {
        this.snackBar.open("Password updated", "close", {
          duration: 2000,
          panelClass: ['sucess']
        });
        this.resetform.reset()
        this.dialogRef.close();
      })
    }
  }

  subjectdata() {
    this.auth.usersubject.subscribe(res => {
      if (res == null) {
        this.login.getUserInfo(localStorage.getItem('UID')).subscribe(res => {
          this.auth.updateUser(res)
        })
      }
      this.user = res
    })
  }
}