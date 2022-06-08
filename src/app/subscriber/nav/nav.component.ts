import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth.guard';
import { AuthService } from 'src/app/shared/service/auth.service';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  manuopen!:Boolean
  user!: any;
  constructor(private auth:AuthService,
              private login:LoginService,) { }

  ngOnInit(): void {
    this.manuopen=false
    this.auth.usersubject.subscribe(res=>{
      if(res==null){
        this.login.getUserInfo(localStorage.getItem('UID')).subscribe(res=>{
          this.auth.updateUser(res)
        })
      }
      this.user=res
      console.log(this.user);
      
    })
   
  }
  manuop(){
    this.manuopen=!this.manuopen
    console.log(this.manuopen);
  }

}
