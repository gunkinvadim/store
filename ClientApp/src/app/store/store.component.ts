import { AppStoreService } from './../services/store.service';
import { Component, OnInit } from '@angular/core'


@Component({
    selector: 'app-store',
    templateUrl: './store.component.html',
    styleUrls: [
        './store.component.css'
    ]
})

export class StoreComponent implements OnInit {

    constructor(public appStoreService: AppStoreService) {

    }

    ngOnInit() {
        this.appStoreService.requestItems()
    }

}