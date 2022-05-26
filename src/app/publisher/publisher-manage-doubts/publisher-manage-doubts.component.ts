import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publisher-manage-doubts',
  templateUrl: './publisher-manage-doubts.component.html',
  styleUrls: ['./publisher-manage-doubts.component.css']
})
export class PublisherManageDoubtsComponent implements OnInit {
  items!:[1,2,3,4,5,6,7,7]
  constructor() { }

  ngOnInit(): void {
  }

}
