import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/shared/service/admin.service';
import { AuthGuard } from 'src/app/shared/service/auth.guard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactForm !: FormGroup;
  constructor(private admin:AdminService,
              private snackBar: MatSnackBar,
              private authGurd: AuthGuard,
              private router: Router,) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(""),
      subject: new FormControl(""),
      massage: new FormControl("")
    })
  }
  OnSubmit(){
    const formData = new FormData()
    formData.append('name', this.contactForm.get('name')?.value)
    formData.append('email', this.contactForm.get('email')?.value)
    formData.append('Subject', this.contactForm.get('subject')?.value)
    formData.append('massage', this.contactForm.get('massage')?.value)

    this.admin.addGIT(formData).subscribe(res=>{
      this.snackBar.open("Massage sent sucessfully", "close", {
        duration: 2000,
        panelClass: ['danger']
      });
      this.contactForm.reset()
    },err=>{
      this.snackBar.open("Somthing want Wrong....!", "close", {
        duration: 2000,
        panelClass: ['danger']
      });
    })
  }

  }
