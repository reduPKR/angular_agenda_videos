import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { responsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = "http://localhost:8080/lives";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClientModule) { }

  /* Transmissao asincrona */
  public getLivesWithFlag(flag: string): Observable<responsePageable> {
    return this.httpClient.get<responsePageable>(this.apiUrl + '?flag=' + flag);
}
}
