/*
  The service is for connections (CRUD)
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(
    private http: HttpClient,
  ) { }

  get(url): Observable<any> {
    return this.http.get(url);
  }


  post(url, data): Observable<any> {
    return this.http.post(url, data);
  }

}
