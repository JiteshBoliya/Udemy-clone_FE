import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  publisherlist: any;

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.user.getPublisherListlimit().subscribe(res=>{
      this.publisherlist=res
      console.log(res);
      
    })
  }

}
