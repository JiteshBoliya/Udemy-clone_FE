import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth.guard';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  constructor(private authGurd: AuthGuard,
              private router: Router,) { }

  ngOnInit(): void {
    // if (this.authGurd.canActivate() == false) this.router.navigate([''])
  }

}
