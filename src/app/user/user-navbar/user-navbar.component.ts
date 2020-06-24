import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {
  name: string="";
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  constructor(
    private breakpointObserver: BreakpointObserver,
    private _router: Router,
    private _userService: UserService
  ) {}
  ngOnInit() {
    // this.name = this._userService.currentUserValue.username
   }

  logout() {
    this._userService.logout()
    this._router.navigate(["/home"])
  }
}

