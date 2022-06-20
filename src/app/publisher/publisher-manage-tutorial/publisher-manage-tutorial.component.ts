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
import { DialogTutorialComponent } from 'src/app/shared/dailogs/dialog-tutorial/dialog-tutorial.component';
import { PublisherService } from 'src/app/shared/service/publisher.service';
@Component({
  selector: 'app-publisher-manage-tutorial',
  templateUrl: './publisher-manage-tutorial.component.html',
  styleUrls: ['./publisher-manage-tutorial.component.css']
})
export class PublisherManageTutorialComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons!: any[];
  panelOpenState = false;

  @ViewChild('fileInput') fileInput!: ElementRef;
  public userForm !: FormGroup;
  public filterForm !: FormGroup;

  // AllsubscriberList!:any
  block!:boolean
  userData!: any
  user!: any
  rowsLength!:any
  image!: any;
  text!: any;
  path!: any
  imageSrc!: any;
  Tutoriallist!: any;
  isUpdate: boolean = false;
  lenth!:any
  paggerno!:any
  fakearray!:any
  isSelected!:any
  CourseList: any;
  constructor(private router: Router,
    private authGurd: AuthGuard,
    private dialog: MatDialog,
    private deshboard: DeshboardService,
    private snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private admin:AdminService,
    private excelService:ExcelService,
    private publisher:PublisherService,
    private publisherService: PublisherService,) { }

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
    this.publisherService.getCourseList_ById(localStorage.getItem('UID')).subscribe(res=>{
      this.CourseList=res
    })
    this.filterForm=new FormGroup({
      sortwith:new FormControl(''),
      sortby:new FormControl('')
    })
    this.publisher.getTutorialList_ById(localStorage.getItem('UID')).subscribe(res=>{
        this.Tutoriallist=res  
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
        this.Tutoriallist=res
      })
    // this.refreash()
  }
  getpagedata(pagerdata:any){
    this.isSelected=pagerdata
    this.publisher.getpage(pagerdata*5).subscribe(res=>{
        this.Tutoriallist=res
      })
  }
  pageActive(item:any){
    return this.isSelected==item
  }
  refreash(){
    this.publisher.getTutorialList_ById(localStorage.getItem('UID')).subscribe(res=>{
      var list=res
      this.rowsLength=[...list].length
      this.paggerno=Math.ceil([...list].length/5)
      this.fakearray=new Array(this.paggerno)
    })
  }
  onLogout() {
    localStorage.clear()
    this.router.navigate([''])
  }
  
  open(user: any) {
    this.dialog.open(DialogAdduserComponent).afterClosed().subscribe(res=>{
      this.publisher.getTutorialList_ById(localStorage.getItem('UID')).subscribe(res=>{
          this.Tutoriallist=res
      })
    })
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
        this.admin.getstatus(id,state).subscribe(res=>{
          this.admin.getsubscriberlimit().subscribe(res=>{
            this.Tutoriallist=res
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
    this.excelService.exportAsExcelFile(this.Tutoriallist, 'sample');
  }
  onAdd(){
    this.dialog.open(DialogTutorialComponent)
  }
  updateLock(id:any,lock:any){
    this.publisherService.updateLock(id,lock).subscribe(res=>{  
    this.publisher.getTutorialList_ById(localStorage.getItem('UID')).subscribe(res=>{
      this.Tutoriallist=res  
      console.log("updated");
      
      })
    })

  }
}

