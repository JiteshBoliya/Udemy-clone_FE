import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/shared/service/auth.guard';

@Component({
  selector: 'app-course-watch',
  templateUrl: './course-watch.component.html',
  styleUrls: ['./course-watch.component.css']
})
export class CourseWatchComponent implements OnInit {

  constructor(private authGurd: AuthGuard,
              private router: Router,) { }

  ngOnInit(): void {
    // if (this.authGurd.canActivate() == false) this.router.navigate([''])
  }

}
