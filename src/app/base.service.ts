import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(protected http: HttpClient) {}

  public getHeader(): HttpHeaders {
    const headerDict = {
      'x-api-key': localStorage.getItem('api-key')!,
    };
    return new HttpHeaders(headerDict);
  }
}
