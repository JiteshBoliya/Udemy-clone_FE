import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeshboardService } from 'src/app/shared/service/deshboard.service';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  user!: any
  constructor(private router: Router,
              private deshboard: DeshboardService) { }

  ngOnInit(): void {
    // this.authGurd.canActivate()
    // this.deshboard.getUserDetail(localStorage.getItem('userid')).subscribe(res => {
    //   this.user = res
    // })
  }

  onLogout() {
    localStorage.clear()
    this.router.navigate([''])
  }
}
