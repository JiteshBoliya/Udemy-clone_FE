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
  courseList: any;
  constructor(private user:UserService,
              private authGurd: AuthGuard,
              private router: Router,
              public userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.user=null
    // console.log('call');
    
    this.user.getCatagory().subscribe(res=>{
      this.catagoryList=res
    })
    this.user.getSome_Course().subscribe(res=>{
      this.courseList=res
    })
    if (this.authGurd.canActivate() == false) this.router.navigate([''])
  }

}
