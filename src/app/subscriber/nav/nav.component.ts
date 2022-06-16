import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth.guard';
import { AuthService } from 'src/app/shared/service/auth.service';
import { LoginService } from 'src/app/shared/service/login.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  manuopen!:Boolean
  cartArray=new Array();
  simsInCartLength!: number;
  // user!: any;
  constructor(private auth:AuthService,
              private login:LoginService,
              private authGurd: AuthGuard,
              private router: Router,
              public userservice:UserService) { }

  ngOnInit(): void {
    this.manuopen=false
    // this.userservice.user=null
    this.auth.usersubject.subscribe(res=>{
      if(res==null){
        this.login.getUserInfo(localStorage.getItem('UID')).subscribe(res=>{
          this.auth.updateUser(res)
        })
      }
      this.userservice.user=res
      // console.log(this.user);
    })
    this.userservice.getCartItemCount().subscribe(len => {
      console.log(len) // your new cart length here
      this.simsInCartLength  = len;
      console.log(len);
      
   })

    let data: any = localStorage.getItem('cartarray') ? localStorage.getItem('cartarray') : '[]'
    this.cartArray = JSON.parse(data)
   this.userservice.cartItemCount.next(this.cartArray.length)
    
  }
  manuop(){
    this.manuopen=!this.manuopen
    console.log(this.manuopen);
  }

}
