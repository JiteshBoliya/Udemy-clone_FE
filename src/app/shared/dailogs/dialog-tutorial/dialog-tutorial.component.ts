import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Editor } from 'ngx-editor';
import { FileUpload } from '../../models/file-upload';
import { FileUploadService } from '../../service/file-upload.service';
import { PublisherService } from '../../service/publisher.service';
export interface videoFile {
  title: string;
  link: string;
}
@Component({
  selector: 'app-dialog-tutorial',
  templateUrl: './dialog-tutorial.component.html',
  styleUrls: ['./dialog-tutorial.component.css']
})
export class DialogTutorialComponent implements OnInit {
  public tutorialForm !: FormGroup;
  editor!: Editor;
  html!: '';
  urls = new Array<string>();
  videos = new Array<string>();
  downloadlinks = new Array<string>()
  selectedFiles = new Array<File>();
  currentFileUpload?: FileUpload;
  percentage = 0;
  basepath = ""
  curriculams = new Array<any>()
  CourseList:any
  publisherDetail: any;
  constructor(private uploadService: FileUploadService,
              private publisherService: PublisherService,
              private dialogRef:MatDialogRef<DialogTutorialComponent>,
              private snackBar: MatSnackBar,
              private publisher:PublisherService) { }

  ngOnInit(): void {

    this.urls = [];
    this.tutorialForm = new FormGroup({
      course: new FormControl("",Validators.required),
      title: new FormControl("",Validators.required),
      file: new FormControl(""),
    })
    this.editor = new Editor();
    this.publisher.getPublisherDetail(localStorage.getItem('UID')).subscribe(res=>{
      this.publisherDetail=res
      this.publisherService.getCourseList_ById(this.publisherDetail._id).subscribe(res=>{
        this.CourseList=res
        console.log(res);
      },err=>{
        console.log(err.massage);
        
      })  
    })
    

  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  onadd() {
    
    const value = this.tutorialForm.value
    this.uploadService.getLink().map(res => {
      return res;
    }).map(res => { this.downloadlinks.push(res) })

    for (let i = 0; i < this.videos.length; i++) {
      this.curriculams.push({
        title: this.videos[i],
        link: this.downloadlinks[i]
      })
    }
    this.publisherService.uploadtutorial(
          {course:value['course'],
            title:value['title'],
              videos:this.curriculams
          }).subscribe(res=>{
            console.log(res);
            this.snackBar.open("Tutorial Insterted....!", "close", {
              duration: 2000,
              panelClass: ['sucess']
            });
            this.dialogRef.close();
          },err=>{
            console.log(err);
          })
  }
  detectFiles(event: any) {
    let files = event.target.files;
    if (files) {
      this.videos = []
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
          this.videos.push(file.name)
          this.selectedFiles.push(file)
        }
        reader.readAsDataURL(file);
      }
    }

  }
  remove(i: any) {
    this.urls.splice(i, 1);
  }
  uploadAll() {
    if (this.selectedFiles) {
      const files = this.selectedFiles;
      if (files) {
        this.basepath = `${this.tutorialForm.get('course')?.value}/${this.tutorialForm.get('title')?.value}`
        for (let file of files) {
          this.currentFileUpload = new FileUpload(file);
          this.uploadService.pushFileToStorage(this.currentFileUpload, this.basepath).subscribe(
            percentage => {
              this.percentage <= Math.round(percentage ? percentage : 0) ? this.percentage = Math.round(percentage ? percentage : 0) : this.percentage;
            },
            error => {
              console.log(error);
            }
          );

        }

      }
    }
  }
  data(data: any) {
    throw new Error('Method not implemented.');
  }
  deleteFileUpload(fileUpload: FileUpload): void {
    this.uploadService.deleteFile(fileUpload);
  }
  
}
