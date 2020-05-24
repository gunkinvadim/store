import { Component } from "@angular/core";
import { AppStoreService } from "../services/store.service";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: [
        './cart.component.css'
    ]
})

export class CartComponent {

    constructor(public appStoreService: AppStoreService) {

    }
    
}