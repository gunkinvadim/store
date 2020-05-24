import { StoreItem, AppStoreService } from '../../services/store.service';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: [
        './cart-item.component.css'
    ]
})

export class CartItemComponent {
    @Input() item: StoreItem
    @Input() idx

    constructor(public appStoreService: AppStoreService) {

    }
    
}