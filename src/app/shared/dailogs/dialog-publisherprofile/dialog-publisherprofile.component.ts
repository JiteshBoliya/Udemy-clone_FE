import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUpload } from '../../models/file-upload';
import { FileUploadService } from '../../service/file-upload.service';
import { PublisherService } from '../../service/publisher.service';

@Component({
  selector: 'app-dialog-publisherprofile',
  templateUrl: './dialog-publisherprofile.component.html',
  styleUrls: ['./dialog-publisherprofile.component.css']
})
export class DialogPublisherprofileComponent implements OnInit {
  public profileForm !: FormGroup;
  currentFileUpload: any;
  file: any;
  basepath!: string;
  uploadImage: any;
  img!: string;
  constructor(private publisher:PublisherService,
              private dialogRef:MatDialogRef<DialogPublisherprofileComponent>,
              private snackBar: MatSnackBar,
              private uploadService: FileUploadService) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      name: new FormControl(""),
      phoneno: new FormControl(""),
      email: new FormControl(""),
      job: new FormControl(""),
      instagram: new FormControl(""),
      facebook: new FormControl(""),
      twitter: new FormControl(""),
      youtube: new FormControl(""),
      linkedIn: new FormControl(""),
      status: new FormControl(""),
      // image:
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
    
    this.basepath = `Subscriber`
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
  save(){
    const value = this.profileForm.value
    let formData= new FormData()
    formData.append('name',value['name'])
    formData.append('phoneno', value['phoneno'])
    formData.append('email', value['email'])
    formData.append('job', value['job'])
    formData.append('instagram', value['instagram'])
    formData.append('facebook', value['facebook'])
    formData.append('linkedIn', value['linkedIn'])
    formData.append('youtube', value['youtube'])
    formData.append('twitter', value['twitter'])
    // formData.append('specification', value['specification'])
    // formData.append('image',this.uploadImage?this.uploadImage:'')
    this.publisher.uploadCourse(formData).subscribe(res=>{
      this.snackBar.open("Corse Insterted....!", "close", {
        duration: 2000,
        panelClass: ['sucess']
      });
      this.dialogRef.close();
    })

  }

}
