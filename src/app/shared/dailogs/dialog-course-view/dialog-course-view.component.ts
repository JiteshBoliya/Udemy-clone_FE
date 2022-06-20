import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-course-view',
  templateUrl: './dialog-course-view.component.html',
  styleUrls: ['./dialog-course-view.component.css']
})
export class DialogCourseViewComponent implements OnInit {
  public obj: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.obj);
  }

}
