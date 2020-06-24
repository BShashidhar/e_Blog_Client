import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from './URL';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles = []
  constructor(private _http: HttpClient) { }

  setArticles() {
    return  new Promise<any[]>((res, rej) => {
      return this._http.get<any>(Api.BASE_URL + "/author" + Api.getAllArticles)
        .subscribe(data => {
          this.articles = data.result
          return res(this.articles)
        }, err => {
          return rej(err)
        })
    })
  }

  getArticles() {
    return this.articles
  }

  addArticle(item) {
    return new Promise((res, rej) => {
      this._http.post<any>(Api.BASE_URL + "/author" + Api.addArticle, item)
        .subscribe(data => {
          this.articles = data.result
          return res(this.articles)
        }, err => {
          return rej(err)
        })
    })
  }

  updateArticle(item): any {
    return new Promise((res, rej) => {
      this._http.post<any>(Api.BASE_URL + "/author" + Api.updateArticle, item)
        .subscribe(data => {
          this.articles = data.result
          return res(this.articles)
        }, err => {
          return rej(err)
        })
    })
  }

  deleteArticle(item): any {
    return new Promise((res, rej) => {
      this._http.post<any>(Api.BASE_URL + "/author" + Api.deleteArticle, item)
        .subscribe(data => {
          this.articles = data.result
          return res(this.articles)
        }, err => {
          return rej(err)
        })
    })
  }
  getAllArticle() {
    return this._http.get<any>(Api.BASE_URL+Api.getAllArticles)
  }
}
