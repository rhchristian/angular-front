import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../service/http-client.service';


@Component({
  selector: 'app-root',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  notices: string[];

  constructor(
    private httpClientService: HttpClientService
  ) { }

  ngOnInit() {
    this.httpClientService.getNotice().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response) {
    this.notices = response;
  }

}
