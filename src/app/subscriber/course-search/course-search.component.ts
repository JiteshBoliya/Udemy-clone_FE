import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public SearchForm !: FormGroup;
  courseList=new Array();

  constructor(private user:UserService,
              private authGurd: AuthGuard,
              private router: Router,) { }

  ngOnInit(): void {
    this.user.getCatagory().subscribe(res=>{
      this.catagoryList=res
    })
    this.refresh()
    this.SearchForm = new FormGroup({
      search: new FormControl("")
    })
  }
  onSearch(){
    this.user.Search(this.SearchForm.get('search')?.value).subscribe(res=>{
      // console.log(res);
      
      if(res.data==0) this.courseList=[]
      else this.courseList= res.data
    })

  }
  refresh(){
    this.user.getAll_Course().subscribe(res=>{
      this.courseList=res
    })
  }

}
