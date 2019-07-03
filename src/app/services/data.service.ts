import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }


  getAll(url) {
    return this.httpClient.get(url).pipe(
      tap(
        data => { },
        error => { }
      )
    )
  }

  get(url, params) {
    return this.httpClient.get(url + params).pipe(
      tap(
        data => { },
        error => { }
      )
    )
  }

  post(url, resource) {
    return this.httpClient.post(url, resource).pipe(
      map(
        data => { },
        error => { }
      )
    )
  }
  put(url, resource) {
    return this.httpClient.post(url, resource).pipe(
      map(
        data => { },
        error => { }
      )
    )
  }

}
