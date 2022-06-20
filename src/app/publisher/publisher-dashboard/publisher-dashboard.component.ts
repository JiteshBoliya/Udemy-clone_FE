import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAdduserComponent } from 'src/app/shared/dailogs/dialog-adduser/dialog-adduser.component';
import { AuthGuard } from 'src/app/shared/service/auth.guard';
import Swal from 'sweetalert2';
import { DeshboardService } from 'src/app/shared/service/deshboard.service';
import { LoginService } from 'src/app/shared/service/login.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { PublisherService } from 'src/app/shared/service/publisher.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-publisher-dashboard',
  templateUrl: './publisher-dashboard.component.html',
  styleUrls: ['./publisher-dashboard.component.css']
})
export class PublisherDashboardComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  public userForm !: FormGroup;
  public filterForm !: FormGroup;
  userId!: any
  userData!: any
  user!: any
  image!: any;
  text!: any;
  path!: any
  imageSrc!: any;
  userlist!: any;
  isUpdate: boolean = false;
  lenth!: any
  paggerno!: any
  fakearray!: any
  isSelected!: any
  countPublisher!: any
  countSubscriber!: any
  countGIT!: any
  countCourse!: any
  countSales: any;
  cousreList = new Array()
  // graphData=new Array()
  graphData = [10, 20]
  AllcommentList = new Array();
  avg!: number;
  // AvrageArray=new Array();
  AvrageArray=[1,2]
  AvarageStarRating=new Array()
  AvarageList=new Array()
  star=new Array();
  avgStar: any;
  publisherDetail: any;
  CourseList: any;


  constructor(private router: Router,
    private authGurd: AuthGuard,
    private dialog: MatDialog,
    private deshboard: DeshboardService,
    private login: LoginService,
    private snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private publisher: PublisherService,
    private User: UserService) {
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  //Chart 1
  public barChartLabels = new Array();
  public barChartLegend = true;
  public barChartData = [
    { data: this.graphData, label: 'Subscriber' }
  ];

  //Chart 2
  public donatChartLabels = this.barChartLabels;
  public donatChartData = [
    { data: this.AvrageArray, label: 'Rating' }
  ];

    //Chart 3
    public pieChartLabels = ['1 Star','2 Star','3 Star','4 Star','5 Star'];
    public pieChartData = [
      { data: this.AvarageList, label: 'Rating' }
    ];
  
  ngOnInit(): void {
    this.Refresh()
    this.isSelected = 0
    this.userData = ''
    this.graphdata()
    this.graphData = [10, 20]
  }
  graphdata() {
    this.publisher.getPublisherDetail(localStorage.getItem('UID')).subscribe(data => {
      let result = data

      this.User.getCourseUserList(result._id).subscribe(res => {
        let arr = [] = res
        const results = arr.reduce((accumulator: any, current: any) => {
          return accumulator + current;
        }, 0);
        this.countSubscriber = results ? results : 0
      })
      this.User.getCourseUserList(result._id).subscribe((res: any) => {
        this.graphData = res
      })
    })

  }
  Refresh() {
    this.barChartData = [
      { data: this.graphData, label: 'Subscriber' }]

    this.donatChartData = [
        { data: this.AvrageArray, label: 'Rating' }
    ];
    // this.pieChartData = [
    //   { data: this.AvarageList, label: 'Rating' }
    // ];
    this.deshboard.Count_publisher().subscribe(res => {
      this.countPublisher = res.data
    })
    this.deshboard.Count_subscriber().subscribe(res => {
      this.countSubscriber = res.data
    })
    this.deshboard.Count_GIT().subscribe(res => {
      this.countGIT = res.data
    })
    this.publisher.getCoursebyPublisher(localStorage.getItem('UID')).subscribe(res => {
      let array = new Array()
      array = res
      this.countCourse = array.length
      this.barChartLabels=[]
      for (const data of array) {
        this.barChartLabels.push(data.title.slice(0, 30))
      }
    })
    this.deshboard.count_sales().subscribe(res => {
      let arr: [] = res.data
      arr.forEach((data: any) => {
        if (data.course.price != '') this.countSales += data.course.price;
      })
    })

    this.publisher.getPublisherDetail(localStorage.getItem('UID')).subscribe(data => {
      let result = data
      //----------------------------
      this.User.getCourseUserList(result._id).subscribe(res => {
        let arr = [] = res
        const results = arr.reduce((accumulator: any, current: any) => {
          return accumulator + current;
        }, 0);
        this.countSubscriber = results ? results : 0
      })
      //-------------------------------
      this.User.getcommentPublisherAll(result._id).subscribe(res => {
        this.AllcommentList = res
        this.ratingAvg()
      })
      this.User.getdeshboardcommentPublisherAll(result._id).subscribe(res => {this.ratingAllcourse(res)})
      this.publisher.getCourseList_ById(result._id).subscribe(res=>{this.CourseList=res})
    })
    this.onSelect(1)

  }
  ratingAvg() {
    let total = 0
    this.AllcommentList.map(res => {total += res.rating})
    if (total == 0 || this.AllcommentList.length == 0) this.avg = 0
    else this.avg = Math.round(total / this.AllcommentList.length)
  }

  ratingAllcourse(list: []) {
    let result=new Array()
    list.map(data => {
      let arr: [] = data
      let total = 0
      let avg=0
      arr?.map((rate: any) => { if (rate.rating > 0) total += rate.rating})
      if (total == 0 || arr.length == 0) avg = 0
      else avg = Math.round(total / arr.length)
      result.push(avg)
    })
    this.AvrageArray=result
  }
  ratingAvgList(){
    this.star=[0,0,0,0,0]
    this.AvarageStarRating.map(res=>{
      if(res.rating==5) this.star[4]++ 
      if(res.rating==4) this.star[3]++
      if(res.rating==3) this.star[2]++
      if(res.rating==2) this.star[1]++
      if(res.rating==1) this.star[0]++
    })
    for(let i=0;i<5;i++){
      if(this.star[i]==0 || this.AvarageStarRating.length==0) this.AvarageList[i] = 0
      else this.AvarageList[i]=Math.round(this.star[i]/this.AvarageStarRating.length*100)
    }
  }
  onSelect(event:any){
    this.User.getcommentCourseAll(event).subscribe(res=>{
      this.AvarageStarRating=res
      this.ratingAvgList()
    })
    this.pieChartData = [
      { data: this.AvarageList, label: 'Rating' }
    ];
  }
  
}
