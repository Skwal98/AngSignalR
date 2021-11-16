import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { SignalRService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';

  constructor(signalR: SignalRService, private http: HttpClient) {
    signalR.startConnection();
    signalR.addTransferChartDataListener();
  }

  cl() {
    this.http.get('https://localhost:44361/chat').subscribe(x => { console.log('send'); });
  }

}
