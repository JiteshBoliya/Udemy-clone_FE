import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth.guard';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-course-watch',
  templateUrl: './course-watch.component.html',
  styleUrls: ['./course-watch.component.css']
})
export class CourseWatchComponent implements OnInit {
  CourseId: any;
  courseDetails: any;
  curriculam: any;
  videoToPlay:any
  VideoTitle:any
  constructor(private authGurd: AuthGuard,
              private router: Router,
              private route: ActivatedRoute,
              private user:UserService) { }

  ngOnInit(): void {
    this.CourseId = this.route.snapshot.paramMap.get('id');
    this.user.get_courseDetails(this.CourseId).subscribe(res=>{
      this.courseDetails=res
    })
    this.user.get_tutorial(this.CourseId).subscribe(res=>{
      this.curriculam=res
      this.videoToPlay=this.curriculam[0].videos[0].link
      this.VideoTitle=this.curriculam[0].videos[0].title
    })
  }
  showVideo(video:any){
      this.videoToPlay=video.link
      this.VideoTitle=video.title
  }
}
