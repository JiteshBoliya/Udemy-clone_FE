import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-instructor-profile',
  templateUrl: './instructor-profile.component.html',
  styleUrls: ['./instructor-profile.component.css']
})
export class InstructorProfileComponent implements OnInit {
  PublisherId: any;
  PublisherDetail: any
  cousreList = new Array();
  students: any;
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
  constructor(private route: ActivatedRoute,
    private user: UserService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    // this.PublisherId = this.route.snapshot.paramMap.get('id');
    this.user.getPublisherDetail(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.PublisherDetail = res
    })
    this.user.getCourseList(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.cousreList = res
    })
    this.user.getCourseUserList(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      let arr=[]= res
      const result = arr.reduce((accumulator:any, current:any) => {
        return accumulator + current;
      }, 0);
      this.students=result?result:0
    })
    this.user.getSubscriberDetail(localStorage.getItem('UID')).subscribe(res=>{
      this.SubScriber=res
    })
    this.refresh()

    this.RatingReviewForm = new FormGroup({
      rate: new FormControl(""),
      comment: new FormControl(""),
    })
  }
  addReview() {
    if (!localStorage.getItem('UID')) {
      this.router.navigate(['/signin'])
    }
    else {
      const formData = new FormData()
      formData.append('rate', this.RatingReviewForm.get('rate')?.value)
      formData.append('comment', this.RatingReviewForm.get('comment')?.value)
     
      this.user.setComment({ "rating": formData.get('rate'), "review": formData.get('comment'), "publisher": this.route.snapshot.paramMap.get('id'), "user": this.SubScriber._id }).subscribe(res => {
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
      this.ratingAvg()
    }
  }
  change(e: any) {
    this.rating = []
    for (let index = 1; index <= parseInt(this.RatingReviewForm.get('rate')?.value); index++) {
      this.rating.push(index)
    }
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
  refresh(){
    this.user.getcommentPublisher(this.route.snapshot.paramMap.get('id')).subscribe(res=>{
      this.commentList=res
    })
    this.user.getcommentPublisherAll(this.route.snapshot.paramMap.get('id')).subscribe(res=>{
      this.AllcommentList=res
      this.ratingAvg()
      this.ratingAvgList()
      this.fakeArray = new Array(this.avg);    
    })
  }
  loadAll(){
    this.commentList=this.AllcommentList
  }
  starData(data:any){
    let ratData=new Array()
    for(let i=0;i<data;i++){
      ratData[i]=data
    }
    return ratData
  }

}
