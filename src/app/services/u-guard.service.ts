import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UGuardService implements CanActivate  {

  constructor(private _userService: UserService, private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(!this._userService.currentUserValue){
      this._router.navigate([`/${route.data.role}/login`])
      return false
    }
    return true;
  }
}
