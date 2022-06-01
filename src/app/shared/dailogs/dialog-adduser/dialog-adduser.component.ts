import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeshboardService } from '../../service/deshboard.service';

@Component({
  selector: 'app-dialog-adduser',
  templateUrl: './dialog-adduser.component.html',
  styleUrls: ['./dialog-adduser.component.css']
})
export class DialogAdduserComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  public userForm !: FormGroup;
  userData!: any
  user!: any
  image!: any;
  text!: any;
  path!: any
  imageSrc!: any;
  userlist!: any;
  isUpdate: boolean = false;
  gender!: any;
  myVal!: any;

  constructor(private deshboard: DeshboardService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.userForm = new FormGroup({
      name: new FormControl(this.userData?this.userData.name:'', Validators.required),
    })
  
  }
  submitdata(massege: any, close: any, classname: any) {
    const value = this.userForm.value
    let formData = new FormData()
    formData.append('name', value['name'])
  }
  clear() {
    this.userForm.reset()
  }
}
