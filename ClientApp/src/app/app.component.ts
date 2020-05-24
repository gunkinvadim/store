import { AppStoreService } from './services/store.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private appStoreService: AppStoreService) {

  }

  ngOnInit() {
    this.appStoreService.requestCartItems()
  }

}