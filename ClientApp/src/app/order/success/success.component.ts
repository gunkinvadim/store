import { AppStoreService } from '../../services/store.service';
import { Component, OnDestroy } from "@angular/core";
import { AppOrderService } from "src/app/services/order.service";

@Component({
    selector: 'app-order-success',
    templateUrl: './success.component.html',
    styleUrls: [
        './../order.component.css',
        './success.component.css'
    ]
})

export class OrderSuccessComponent implements OnDestroy {


    constructor(
        public appOrderService: AppOrderService,
        public appStoreService: AppStoreService
    ) {

    }

    ngOnDestroy() {
        this.appOrderService.setSuccess(false)
        this.appOrderService.clearOrder()
        this.appStoreService.clearCart()
    }

}