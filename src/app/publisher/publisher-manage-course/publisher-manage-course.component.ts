import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { DialogCourseComponent } from 'src/app/shared/dailogs/dialog-course/dialog-course.component';
import { PublisherService } from 'src/app/shared/service/publisher.service';
import { DialogCourseViewComponent } from 'src/app/shared/dailogs/dialog-course-view/dialog-course-view.component';
@Component({
  selector: 'app-publisher-manage-course',
  templateUrl: './publisher-manage-course.component.html',
  styleUrls: ['./publisher-manage-course.component.css']
})
export class PublisherManageCourseComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons!: any[];

  @ViewChild('fileInput') fileInput!: ElementRef;
  public userForm !: FormGroup;
  public filterForm !: FormGroup;
  // public slidetoggle!: FormGroup
  AllCourse!:any
  block!:boolean
  userData!: any
  user!: any
  rowsLength!:any
  image!: any;
  text!: any;
  path!: any
  imageSrc!: any;
  courselist!: any;
  isUpdate: boolean = false;
  lenth!:any
  paggerno!:any
  fakearray!:any
  isSelected!:any
  panelOpenState=false
  constructor(private router: Router,
    private authGurd: AuthGuard,
    private dialog: MatDialog,
    private deshboard: DeshboardService,
    private snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private admin:AdminService,
    private excelService:ExcelService,
    private publisher:PublisherService) { }

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
    // this.slidetoggle=new FormGroup({
    //   block:new FormControl('')
    // })
    this.publisher.getCourseLimit().subscribe(res=>{
      this.courselist=res
    })

    this.refreash()

    this.userData = ''
  }

  uploadFileEvt(imgFile: any) {
    this.text = imgFile.target.files[0].name
    this.image = imgFile.target.files[0]
    console.log(imgFile.target.files[0]);

    const file = imgFile.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imageSrc = reader.result;
    reader.readAsDataURL(file);
  }
  onApply(){
    const value = this.filterForm.value
    this.publisher.getsort(value['sortwith'],value['sortby']).subscribe(res=>{
        this.courselist=res
      })
    // this.refreash()
  }
  getpagedata(pagerdata:any){
    this.isSelected=pagerdata
    this.publisher.getpage(pagerdata*3).subscribe(res=>{
        this.courselist=res
      })
  }
  pageActive(item:any){
    return this.isSelected==item
  }
  refreash(){
    this.publisher.getCourse().subscribe(res=>{
      var list=res
      this.AllCourse=res
      this.rowsLength=[...list].length
      this.paggerno=Math.ceil([...list].length/3)
      this.fakearray=new Array(this.paggerno)
    })
  }
  onLogout() {
    localStorage.clear()
    this.router.navigate([''])
  }
  
  open(user: any) {
    this.dialog.open(DialogAdduserComponent).afterClosed().subscribe(res=>{
    })
  }
  viewCourse(course: any) {
    this.dialog.open(DialogCourseViewComponent).componentInstance.obj = course;
    
  }
  onStatuschnage(id:any,status:any){
    var state="active"
    if(status=="active") state="Deactive"
    else state="active"
    Swal.fire({
      title: 'Are you sure ?',
      text: `${state} this account`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.publisher.getstatus(id,state).subscribe(res=>{
          this.publisher.getCourseLimit().subscribe(res=>{
            this.courselist=res
          })
        })
        this.snackBar.open(`${state}`,"close", {
          duration: 2000,
          panelClass: ['sucess']
        });
      }
    })
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.AllCourse, 'sample');
  }
  onAdd(){
    this.dialog.open(DialogCourseComponent)
  }
}

