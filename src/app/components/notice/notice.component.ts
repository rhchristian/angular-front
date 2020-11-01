import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../service/http-client.service';
import { NoticeModel } from './notice.model';


@Component({
  selector: 'app-root',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  notices: string[];
  notice: NoticeModel = new NoticeModel(); 

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getNotice().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  saveNotice(){
    this.httpClientService.saveNotice(this.notice).subscribe(notice => { 
      this.ngOnInit();
    }, err => {
      console.log('Error on save notice')
    });
  }

  editNotice(id: number){
    this.httpClientService.editNotice(id,this.notice).subscribe(notice => {
      this.ngOnInit();
    }, err => {
      console.log('Error on edit notice')
    });
  }

  deleteNotice(id:number){
    this.httpClientService.deleteNotice(id).subscribe(notice => {
      this.ngOnInit();
    }, err => {
      console.log('Error on edit notice')
    });
  }

  handleSuccessfulResponse(response) {
    this.notices = response;
  }

}
