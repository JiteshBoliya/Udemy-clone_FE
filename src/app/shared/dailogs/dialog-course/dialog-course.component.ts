import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Editor } from 'ngx-editor';
import { FileUpload } from '../../models/file-upload';
import { FileUploadService } from '../../service/file-upload.service';
import { PublisherService } from '../../service/publisher.service';

@Component({
  selector: 'app-dialog-course',
  templateUrl: './dialog-course.component.html',
  styleUrls: ['./dialog-course.component.css']
})
export class DialogCourseComponent implements OnInit {
  public courseForm !: FormGroup;
  editor!: Editor;
  html!: '';
  CatagoryList:any
  img!:any
  file!:any
  urls = new Array<string>();
  SpecificationList:any
  currentFileUpload?: FileUpload;
  basepath!: string;
  uploadImage!: string;

  constructor(private uploadService: FileUploadService,
              private publisher: PublisherService,
              private dialogRef:MatDialogRef<DialogCourseComponent>,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.courseForm = new FormGroup({
      title: new FormControl(""),
      description: new FormControl(""),
      price: new FormControl(""),
      catagory: new FormControl(""),
      specification: new FormControl(""),
      image:new FormControl("")
    })
    this.editor = new Editor();
    this.publisher.getCatagory().subscribe(res=>{
      this.CatagoryList=res              
    })
    this.publisher.getSpecification().subscribe(res=>{
      this.SpecificationList=res
    })
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  onadd(){
    const value = this.courseForm.value
    let formData= new FormData()
    formData.append('publisher',`${localStorage.getItem('UID')}`)
    formData.append('title', value['title'])
    formData.append('description', value['description'])
    formData.append('price', value['price'])
    formData.append('catagory', value['catagory'])
    formData.append('specification', value['specification'])
    formData.append('image',this.uploadImage?this.uploadImage:'')
    this.publisher.uploadCourse(formData).subscribe(res=>{
      this.snackBar.open("Corse Insterted....!", "close", {
        duration: 2000,
        panelClass: ['sucess']
      });
      this.dialogRef.close();
    })
  }

  detectFiles(event:any) {
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      this.file = event.target.files; 
      reader.readAsDataURL(this.file[0]);
      reader.onload = () => {
        this.img = reader.result as string;
      };
    }
    this.uploadimg()
  }
  uploadimg(){
     this.currentFileUpload = new FileUpload(this.file[0]);
     console.log(this.currentFileUpload);
     
     this.basepath = `course`
        this.uploadService.pushFileToStorage(this.currentFileUpload,this.basepath).subscribe(async res=>{
        await this.uploadService.getLink().map(res => {
            this.uploadImage= res;
            console.log(this.uploadImage);
          })
        },
        error => {
            console.log(error);
        }); 
  }

}
