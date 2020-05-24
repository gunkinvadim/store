import { AppStoreService } from '../../services/store.service';
import { Component } from "@angular/core";
import { AppOrderService } from "src/app/services/order.service";

@Component({
    selector: 'app-order-step2',
    templateUrl: './step2.component.html',
    styleUrls: [
        './../order.component.css',
        './step2.component.css'
    ]
})

export class OrderStep2Component {

    cartLength = this.appStoreService.getCartItems().length

    constructor(
        public appOrderService: AppOrderService,
        public appStoreService: AppStoreService
    ) {

    }

    
    submit() {
        this.appOrderService.nextStep()
    }
}