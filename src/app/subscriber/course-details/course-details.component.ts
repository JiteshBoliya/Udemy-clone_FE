import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth.guard';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  CourseId: any;
  courseDetails: any;
  curriculam: any;
  cartArray=new Array()
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
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let data:any=localStorage.getItem('cartarray')?localStorage.getItem('cartarray'):'[]'
    this.cartArray=JSON.parse(data)
    this.CourseId = this.route.snapshot.paramMap.get('id');
    this.user.get_courseDetails(this.CourseId).subscribe(res=>{
      this.courseDetails=res
    })
    this.user.get_tutorial(this.CourseId).subscribe(res=>{
      this.curriculam=res
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
  addToCart(course:any){
    let Coursedetail={
      image:course.image,
      title:course.title,
      price:course.price,
      name:course.publisher.name
    }
    let data=0
    this.cartArray.find(res=>{
      if(res.title==Coursedetail.title){
        data=1
      }
    })
    if(data==0){
        this.cartArray.push(Coursedetail)  
        localStorage.setItem('cartarray',JSON.stringify(this.cartArray))  
        this.snackBar.open("Course added in cart....!", "close", {
          duration: 2000,
          panelClass: ['danger']
        });
    }
    else{
      this.snackBar.open("Course already availabe in cart....!", "close", {
        duration: 2000,
        panelClass: ['danger']
      });
    }
    console.log(this.cartArray);
    
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
