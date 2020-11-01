import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoticeModel } from '../components/notice/notice.model';
import { Observable } from 'rxjs';

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

  constructor(private httpClient: HttpClient) { }
  
  getNotice(): Observable<any> {
    return this.httpClient.get<Notice[]>('http://localhost:8080/api/notices');
  }
  
  saveNotice(notice: NoticeModel): Observable<any>{
    return this.httpClient.post("http://localhost:8080/api/notice/save", notice)
  }

  editNotice(id: any, notice: NoticeModel): Observable<any>{
    return this.httpClient.put("http://localhost:8080/api/notice/update/".concat(id), notice);
  }

  deleteNotice(id: any): Observable<any> {
    return this.httpClient.delete("http://localhost:8080/api/notice/delete/".concat(id));
  }


}
