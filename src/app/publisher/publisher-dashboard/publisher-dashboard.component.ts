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
import { Subject } from 'rxjs';
import { PublisherService } from 'src/app/shared/service/publisher.service';

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

  constructor(private router: Router,
    private authGurd: AuthGuard,
    private dialog: MatDialog,
    private deshboard: DeshboardService,
    private login: LoginService,
    private snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private publisher: PublisherService) {
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = new Array();
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Subscriber' }
  ];
  ngOnInit(): void {
    // this.login.UserId.subscribe(res=>{
    //   console.log(res);
    //   this.userId=res
    // })
    // this.authGurd.canActivate()

    this.Refresh()

    // this.login.getUserInfo(this.userId).subscribe(res=>{
    //   console.log(res);
    // })
    this.isSelected = 0

    this.userForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      mobileno: new FormControl("", Validators.required),
      dob: new FormControl("", Validators.required),
      file: new FormControl("", Validators.required)
    })

    this.filterForm = new FormGroup({
      sortwith: new FormControl(''),
      sortby: new FormControl('')
    })
    this.userData = ''
    this.graphdata()
  }
  graphdata() {
  }
  Refresh() {
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
      for (const data of array) {
        this.barChartLabels.push(data.title.slice(0, 30))
      }

    })
    this.deshboard.count_sales().subscribe(res => {
      this.countSales = 0
      this.deshboard.count_sales().subscribe(res => {
        this.countSales = res.data
        this.countSales.forEach((data: any) => {
          if (data.course.price != '') this.countSales += data.course.price;
        })
      })
      // console.log(this.countSales);

    })


  }
}
