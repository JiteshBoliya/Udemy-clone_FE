import { Component, ElementRef, OnInit, SecurityContext, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogAdduserComponent } from 'src/app/shared/dailogs/dialog-adduser/dialog-adduser.component';
import { AuthGuard } from 'src/app/shared/service/auth.guard';
import Swal from 'sweetalert2';
import { DeshboardService } from 'src/app/shared/service/deshboard.service';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/shared/service/admin.service';
import * as XLSX from 'xlsx'
import { ExcelService } from 'src/app/shared/service/excel.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PublisherService } from 'src/app/shared/service/publisher.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-publisher-rating',
  templateUrl: './publisher-rating.component.html',
  styleUrls: ['./publisher-rating.component.css']
})
export class PublisherRatingComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons!: any[];

  @ViewChild('fileInput') fileInput!: ElementRef;
  public userForm !: FormGroup;
  public filterForm !: FormGroup;
  // public slidetoggle!: FormGroup
  AllList!:any
  block!:boolean
  userData!: any
  user!: any
  rowsLength!:any
  image!: any;
  text!: any;
  path!: any
  imageSrc!: any;
  Limitlist!: any;
  isUpdate: boolean = false;
  lenth!:any
  paggerno!:any
  fakearray!:any
  isSelected!:any
  courseList=new Array();
  publisherDetail: any;
  ratings: any;


  CourseAllList:any
  CourseLimitlist:any
  constructor(private router: Router,
    private authGurd: AuthGuard,
    private dialog: MatDialog,
    private deshboard: DeshboardService,
    private snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private admin:AdminService,
    private publisher:PublisherService,
    private User:UserService,
    private excelService:ExcelService,
    protected sanitizer: DomSanitizer) { }

  ngOnInit(): void {

    this.isSelected=0

    this.userForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      mobileno: new FormControl("", Validators.required),
      dob: new FormControl("", Validators.required),
      file: new FormControl("", Validators.required)
    })

    this.filterForm=new FormGroup({
      sortwith:new FormControl(''),
      sortby:new FormControl('')
    })
    this.publisher.getCoursebyPublisher(localStorage.getItem('UID')).subscribe(res=>{
      this.courseList=res
    })
    this.refreash()

    this.userData = ''
  }

  uploadFileEvt(imgFile: any) {
    this.text = imgFile.target.files[0].name
    this.image = imgFile.target.files[0]
    const file = imgFile.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;
    reader.readAsDataURL(file);
  }
  onApply(){
    const value = this.filterForm.value
    this.publisher.getRatingsort(this.publisherDetail._id,value['sortwith'],value['sortby']).subscribe(res=>{
        this.Limitlist=res
      })
  }
  getpagedata(pagerdata:any){
    this.isSelected=pagerdata
    this.publisher.getRatingPagger(this.publisherDetail._id,pagerdata*5).subscribe(res=>{
        this.Limitlist=res
      })
  }
  pageActive(item:any){
    return this.isSelected==item
  }
  refreash(){
    this.publisher.getPublisherDetail(localStorage.getItem('UID')).subscribe(res=>{
      this.publisherDetail=res
      this.User.getcommentPublisher(this.publisherDetail._id).subscribe(res=>{
        this.Limitlist=res
        console.log(res);
        
      })
      this.publisher.getAllRating(this.publisherDetail._id).subscribe(res=>{
        var list=res
        this.AllList=res
        this.rowsLength=[...list].length
        this.paggerno=Math.ceil([...list].length/5)
        this.fakearray=new Array(this.paggerno)
      })
    })
  }
  starData(data:any){
    let ratData=new Array()
    for(let i=0;i<data;i++){
      ratData[i]=data
    }
    return ratData
  }
}
