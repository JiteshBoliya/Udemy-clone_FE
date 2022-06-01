import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public RegistrationForm !: FormGroup;
  constructor(private router: Router,
              private login:LoginService) { }
  ngOnInit(): void {    
    this.RegistrationForm = new FormGroup({
      username: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", Validators.required),
      repassword: new FormControl("",[Validators.required]),
      type: new FormControl("",[Validators.required]),
    })
  }
  OnRegister() {
    const formData = new FormData()
      const password = this.RegistrationForm.get('password')?.value
      const repassword = this.RegistrationForm.get('repassword')?.value
      console.log(password);
      console.log(repassword);
      if(repassword!=password){
        this.RegistrationForm.get('repassword')?.reset()
        return
      }
    formData.append('name', this.RegistrationForm.get('username')?.value)
    formData.append('email', this.RegistrationForm.get('email')?.value)
    formData.append('password', this.RegistrationForm.get('password')?.value)
    formData.append('type', this.RegistrationForm.get('type')?.value)
    this.login.register(formData).subscribe(res=>{
          this.RegistrationForm.reset()
          this.router.navigate(["/verify-email"])
    })
  }
}
