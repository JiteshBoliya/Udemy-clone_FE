import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth.guard';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.css']
})
export class CourseSearchComponent implements OnInit {
  catagoryList: any;
  courseList: any;

  constructor(private user:UserService,
              private authGurd: AuthGuard,
              private router: Router,) { }

  ngOnInit(): void {
    this.user.getCatagory().subscribe(res=>{
      this.catagoryList=res
    })
    this.user.getAll_Course().subscribe(res=>{
      this.courseList=res
    })
  }

}
