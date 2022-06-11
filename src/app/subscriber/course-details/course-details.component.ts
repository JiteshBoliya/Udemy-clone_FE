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
}
