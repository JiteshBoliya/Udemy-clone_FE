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

@Component({
  selector: 'app-admin-get-in-touch-manage',
  templateUrl: './admin-get-in-touch-manage.component.html',
  styleUrls: ['./admin-get-in-touch-manage.component.css']
})
export class AdminGetInTouchManageComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  persons!: any[];

  @ViewChild('fileInput') fileInput!: ElementRef;
  public userForm !: FormGroup;
  public filterForm !: FormGroup;
  // public slidetoggle!: FormGroup
  AllGITList!:any
  block!:boolean
  userData!: any
  user!: any
  rowsLength!:any
  image!: any;
  text!: any;
  path!: any
  imageSrc!: any;
  GITlist!: any;
  isUpdate: boolean = false;
  lenth!:any
  paggerno!:any
  fakearray!:any
  isSelected!:any
  constructor(private router: Router,
    private authGurd: AuthGuard,
    private dialog: MatDialog,
    private deshboard: DeshboardService,
    private snackBar: MatSnackBar,
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private admin:AdminService,
    private excelService:ExcelService) { }

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
    
    this.admin.getGITLimit().subscribe(res=>{
      this.GITlist=res
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
    this.admin.getGITsort(value['sortwith'],value['sortby']).subscribe(res=>{
        this.GITlist=res
      })
    // this.refreash()
  }
  getpagedata(pagerdata:any){
    this.isSelected=pagerdata
    this.admin.getGITpage(pagerdata*3).subscribe(res=>{
        this.GITlist=res
      })
  }
  pageActive(item:any){
    return this.isSelected==item
  }
  refreash(){
    this.admin.getGIT().subscribe(res=>{
      var list=res
      this.AllGITList=res
      this.rowsLength=[...list].length
      this.paggerno=Math.ceil([...list].length/10)
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
  
  onStatuschnage(id:any,status:any){
    var state="Not seen"
    if(status=="Not seen") state="seen"
    else state="Not seen"
    Swal.fire({
      title: 'Are you sure to?',
      text: `Change status to ${state}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.admin.changeStatusGIT(id,state).subscribe(res=>{
          this.admin.getGITLimit().subscribe(res=>{
            this.GITlist=res
          })
        })
        this.snackBar.open(`Status updated to ${state}`,"close", {
          duration: 2000,
          panelClass: ['sucess']
        });
      }
    })
  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.AllGITList, 'sample');
  }
  onDelete(id:any){
    Swal.fire({
      title: 'Are you sure to Delete ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.admin.deleteGIT(id).subscribe(res=>{
          this.admin.getGITLimit().subscribe(res=>{
            this.GITlist=res
          })
        })
        this.snackBar.open(`Record deleted..`,"close", {
          duration: 2000,
          panelClass: ['sucess']
        });
      }
    })
  }
}
