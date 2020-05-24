import { AppStoreService } from '../../services/store.service';
import { Component } from "@angular/core";
import { AppOrderService } from "src/app/services/order.service";

@Component({
    selector: 'app-order-step5',
    templateUrl: './step5.component.html',
    styleUrls: [
        './../order.component.css',
        './step5.component.css'
    ]
})

export class OrderStep5Component {

    constructor(
        public appOrderService: AppOrderService,
        public appStoreService: AppStoreService
    ) {

    }

    
    submit() {
        this.appOrderService.sendOrderData()
    }
}