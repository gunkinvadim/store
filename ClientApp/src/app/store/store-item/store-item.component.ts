import { StoreItem, AppStoreService } from './../../services/store.service';
import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

@Component({
    selector: 'app-store-item',
    templateUrl: './store-item.component.html',
    styleUrls: [
        './store-item.component.css'
    ]
})

export class StoreItemComponent {
    @Input() item: StoreItem
    @Input() idx

    constructor(public appStoreService: AppStoreService) {

    }
    
}