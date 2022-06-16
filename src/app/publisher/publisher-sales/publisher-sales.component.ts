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
import { UserService } from 'src/app/shared/service/user.service';
import { PublisherService } from 'src/app/shared/service/publisher.service';

@Component({
  selector: 'app-publisher-sales',
  templateUrl: './publisher-sales.component.html',
  styleUrls: ['./publisher-sales.component.css']
})
export class PublisherSalesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons!: any[];

  @ViewChild('fileInput') fileInput!: ElementRef;
  public userForm !: FormGroup;
  public filterForm !: FormGroup;
  // public slidetoggle!: FormGroup
  AllsubscriberList!:any
  block!:boolean
  userData!: any
  user!: any
  rowsLength!:any
  image!: any;
  text!: any;
  path!: any
  imageSrc!: any;
  subscriberlist!: any;
  isUpdate: boolean = false;
  lenth!:any
  paggerno!:any
  fakearray!:any
  isSelected!:any
  publisherDetail: any;
  Limitlist: any;
  constructor(private router: Router,
    private authGurd: AuthGuard,
    private dialog: MatDialog,
    private deshboard: DeshboardService,
    private snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private admin:AdminService,
    private excelService:ExcelService,
    private userService:UserService,
    private publisher:PublisherService) { }

  ngOnInit(): void {

    this.isSelected=0

    this.filterForm=new FormGroup({
      sortwith:new FormControl(''),
      sortby:new FormControl('')
    })
    // this.admin.getsubscriberlimit().subscribe(res=>{
    //   console.log(res);
      
    //   this.subscriberlist=res
    // })
    this.publisher.getPublisherDetail(localStorage.getItem('UID')).subscribe(res=>{
      this.publisherDetail=res
      this.userService.getCoursePurchaseList(this.publisherDetail._id).subscribe(res=>{
        this.Limitlist=res
        console.log(res);
      })
      // this.publisher.getAllRating(this.publisherDetail._id).subscribe(res=>{
      //   var list=res
      //   this.AllList=res
      //   this.rowsLength=[...list].length
      //   this.paggerno=Math.ceil([...list].length/5)
      //   this.fakearray=new Array(this.paggerno)
      // })
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
    this.admin.getsort(value['sortwith'],value['sortby']).subscribe(res=>{
        this.subscriberlist=res
      })
    // this.refreash()
  }
  getpagedata(pagerdata:any){
    this.isSelected=pagerdata
    this.admin.getpage(pagerdata*3).subscribe(res=>{
        this.subscriberlist=res
      })
  }
  pageActive(item:any){
    return this.isSelected==item
  }
  refreash(){
    this.admin.getsubscriber().subscribe(res=>{
      var list=res
      this.AllsubscriberList=res
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
    // this.deshboard.userData = user
    this.dialog.open(DialogAdduserComponent).afterClosed().subscribe(res=>{
      // this.deshboard.getUserlist().subscribe(res => {
      //   this.userlist = res
      // })
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
            this.subscriberlist=res
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
    this.excelService.exportAsExcelFile(this.AllsubscriberList, 'sample');
  }
}
