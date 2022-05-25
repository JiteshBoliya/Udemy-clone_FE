import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  manuopen!:Boolean
  constructor() { }

  ngOnInit(): void {
    this.manuopen=false
  }
  manuop(){
    this.manuopen=!this.manuopen
    console.log(this.manuopen);
  }

}
