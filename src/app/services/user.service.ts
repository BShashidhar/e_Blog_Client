import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from './URL';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User = []
  currentUserSubject: BehaviorSubject<any>
  currentUser: Observable<any>
  constructor(
    private _http: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }
  public get currentUserValue() {
    return this.currentUserSubject.value
  }
  login(email, password) {
    return this._http.post<any>(Api.BASE_URL + Api.userLogin, { email: email, password: password })
      .pipe(map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user))
          this.currentUserSubject.next(user)
        }
        return user
      }))
  }
  logout() {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }

  changePassword(value) {
    value["username"] = this.currentUserValue.username
    return new Promise((res, rej) => {
      this._http.post<any>(Api.BASE_URL + Api.userChangePassword, value)
        .subscribe(data => {
          let emp = JSON.parse(localStorage.getItem('currentUser'))
          emp.flag = true
          this.currentUserSubject.next(emp)
          res(data.id)
        }, err => {
          rej(err)
        })
    })
  }
  setUser() {
    return new Promise((res, rej) => {
      this._http.get<any>(Api.BASE_URL + "/user" + Api.getAllUsers)
        .subscribe(data => {
          this.User = data.result
          res(data.result)
        }, err => {
          rej(err)
        })
    })
  }
  getUser() {
    return this.User
  }
  addUser(item):any {
    return new Promise((res, rej) => {
      this._http.post<any>(Api.BASE_URL + "/user" + Api.addUser, item)
        .subscribe(data => {
          this.User = data.result
          return res(true)
        }, err => {
          return rej(err)
        })
    })
  }
  updateUser(item): any {
    return new Promise((res, rej) => {
      this._http.post<any>(Api.BASE_URL + "/user" + Api.updateUser, item)
        .subscribe(data => {
          this.User = data.result
          return res(true)
        }, err => {
          return rej(err)
        })
    })
  }
  deleteUser(item): any {
    console.log(Api.BASE_URL + "/admin" + Api.deleteUser, item);
    return new Promise((res, rej) => {
      this._http.post<any>(Api.BASE_URL + "/admin" + Api.deleteUser, item)
        .subscribe(data => {
          this.User = data.result
          return res(true)
        }, err => {
          return rej(err)
        })
    })
  }
  getAllUser() {
    return this._http.get<any>(Api.BASE_URL+"/admin"+Api.getAllUsers)
  }
}
