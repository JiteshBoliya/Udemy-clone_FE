import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css']
})
export class InstructorProfileComponent implements OnInit {
  PublisherId: any;
  PublisherDetail:any
  cousreList=new Array();
  students: any;
  constructor(private route: ActivatedRoute,
              private user:UserService) { }

  ngOnInit(): void {
    // this.PublisherId = this.route.snapshot.paramMap.get('id');
    this.user.getPublisherDetail(this.route.snapshot.paramMap.get('id')).subscribe(res=>{
      this.PublisherDetail=res
    })
    this.user.getCourseList(this.route.snapshot.paramMap.get('id')).subscribe(res=>{
      this.cousreList=res
    })

    this.user.getCourseUserList(this.route.snapshot.paramMap.get('id')).subscribe(res=>{
      // console.log(res);
      this.students=res
      
    })
    // this.user.getCourseUserList
  }
  // get
}
