import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Notice {
  constructor(
    public id: BigInteger,
    public title: string,
    public description: string,
    public publicationDate: Date,
    public visualizationDate: Date
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getNotice() {
    console.log("test call");
    return this.httpClient.get<Notice[]>('http://localhost:8080/api/notices');
  }
}
