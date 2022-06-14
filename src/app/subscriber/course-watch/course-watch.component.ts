import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  public RatingReviewForm !: FormGroup;
  rating = Array()
  commentList: any;
  SubScriber: any;
  AllcommentList=new Array();
  totalAvg: any;
  avg: any;
  fakeArray = new Array();
  star = new Array(5);
  avgStar= new Array(5);

  constructor(private authGurd: AuthGuard,
              private router: Router,
              private route: ActivatedRoute,
              private user:UserService,
              private snackBar: MatSnackBar,) { }

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
    this.RatingReviewForm = new FormGroup({
      rate: new FormControl(""),
      comment: new FormControl(""),
    })
    this.user.getSubscriberDetail(localStorage.getItem('UID')).subscribe(res=>{
      this.SubScriber=res
    })
    this.refresh()
  }
  refresh() {
    this.user.getcommentCourse(this.route.snapshot.paramMap.get('id')).subscribe(res=>{
      this.commentList=res
    })
    this.user.getcommentCourseAll(this.route.snapshot.paramMap.get('id')).subscribe(res=>{
      this.AllcommentList=res
      this.ratingAvg()
      this.ratingAvgList()
      this.fakeArray = new Array(this.avg);    
    })
  }
  loadAll(){
    this.commentList=this.AllcommentList
  }
  showVideo(video:any){
      this.videoToPlay=video.link
      this.VideoTitle=video.title
  }
  addReview() {
    if (!localStorage.getItem('UID')) {
      this.router.navigate(['/signin'])
    }
    else {
      const formData = new FormData()
      formData.append('rate', this.RatingReviewForm.get('rate')?.value)
      formData.append('comment', this.RatingReviewForm.get('comment')?.value)
      console.log();
      
      this.user.setComment({ "rating": formData.get('rate'), "review": formData.get('comment'), "course": this.route.snapshot.paramMap.get('id'), "user":this.SubScriber._id }).subscribe(res => {
        this.snackBar.open("Thank you for Rating....!", "close", {
          duration: 2000,
          panelClass: ['danger']
        });
        this.refresh()
        this.RatingReviewForm.reset()
      }, err => {
        console.log(err);

        this.snackBar.open("Some Problems accures ,try again  ....!", "close", {
          duration: 2000,
          panelClass: ['danger']
        });
      })

    }
  }
  change(e: any) {
    this.rating = []
    console.log(this.RatingReviewForm.get('rate')?.value);
    console.log(this.RatingReviewForm.get('comment')?.value);

    for (let index = 1; index <= parseInt(this.RatingReviewForm.get('rate')?.value); index++) {
      this.rating.push(index)
    }
    // console.log(this.rating);

  }
  ratingAvg(){
    let total=0
    this.AllcommentList.map(res=>{
     total+=res.rating;
    })
    if(total==0 || this.AllcommentList.length ==0) this.avg = 0
    else this.avg=Math.round(total/this.AllcommentList.length)
  }
  ratingAvgList(){
    this.star=[0,0,0,0,0]
    this.AllcommentList.map(res=>{
      if(res.rating==5) this.star[4]++ 
      if(res.rating==4) this.star[3]++
      if(res.rating==3) this.star[2]++
      if(res.rating==2) this.star[1]++
      if(res.rating==1) this.star[0]++
    })
    console.log(this.star);
    
    for(let i=0;i<5;i++){
      if(this.star[i]==0 || this.AllcommentList.length==0) this.avgStar[i] = 0
      else this.avgStar[i]=Math.round(this.star[i]/this.AllcommentList.length*100)
    }
  }
  starData(data:any){
    let ratData=new Array()
    for(let i=0;i<data;i++){
      ratData[i]=data
    }
    return ratData
  }
}
