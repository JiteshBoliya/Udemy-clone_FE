import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PublisherService } from '../../service/publisher.service';

@Component({
  selector: 'app-dialog-publisherprofile',
  templateUrl: './dialog-publisherprofile.component.html',
  styleUrls: ['./dialog-publisherprofile.component.css']
})
export class DialogPublisherprofileComponent implements OnInit {
  public profileForm !: FormGroup;
  constructor(private publisher:PublisherService,
              private dialogRef:MatDialogRef<DialogPublisherprofileComponent>,
              private snackBar: MatSnackBar) { }

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
