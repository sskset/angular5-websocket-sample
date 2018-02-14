import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-client-1',
  templateUrl: './client-1.component.html',
  styleUrls: ['./client-1.component.css']
})
export class Client1Component implements OnInit {

  chatUrl = 'ws://localhost:54878/ws';
  socket: WebSocket;
  messages = [];
  msg = '';

  constructor(public app: AppComponent) {
    this.app.show = false;
    
  }

  ngOnInit() {

    this.socket = new WebSocket(this.chatUrl);

    this.socket.onopen = function (event) {
      console.log('onopen');
    };

    this.socket.onmessage = function (event) {
      var msgs = document.getElementById('messages');
      msgs.textContent += event.data;
    };
  }

  Send() {
    this.socket.send(this.msg);
  }

}
