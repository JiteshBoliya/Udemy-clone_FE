import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';
import {AfterViewInit, ChangeDetectorRef, ElementRef, Inject, OnDestroy, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private user:UserService,
              private dialog:MatDialog
              ) { }

  ngOnInit(): void {
  }
  // payment(){
  //   let data
  //   this.user.payment(data).subscribe(res=>{
  //     console.log("hi");

  //   },err=>{
  //     console.log(err);
  // })
// console.log("hey");

  // }

}
