import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth.guard';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
catagoryList:any
  constructor(private user:UserService,
              private authGurd: AuthGuard,
              private router: Router,) { }

  ngOnInit(): void {
    this.user.getCatagory().subscribe(res=>{
      this.catagoryList=res
    })
    if (this.authGurd.canActivate() == false) this.router.navigate([''])
  }

}
