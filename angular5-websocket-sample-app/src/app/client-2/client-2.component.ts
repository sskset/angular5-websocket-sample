import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-client-2',
  templateUrl: './client-2.component.html',
  styleUrls: ['./client-2.component.css']
})
export class Client2Component implements OnInit {
  constructor(public app: AppComponent) {
    this.app.show = false;
  }

  ngOnInit() {
  }

}
