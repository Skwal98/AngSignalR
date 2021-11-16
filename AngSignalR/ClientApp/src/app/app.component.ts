import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { SignalRService } from './signalr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';

  constructor(signalR: SignalRService, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    signalR.startConnection();
    signalR.addTransferChartDataListener();
  }

  cl() {
    this.http.get(this.baseUrl + 'chat').subscribe(x => { console.log('send'); });
  }
}
