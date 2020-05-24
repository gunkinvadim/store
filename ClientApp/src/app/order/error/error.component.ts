import { Component, OnDestroy } from "@angular/core";
import { AppOrderService } from "src/app/services/order.service";

@Component({
    selector: 'app-order-error',
    templateUrl: './error.component.html',
    styleUrls: [
        './../order.component.css',
        './error.component.css'
    ]
})

export class OrderErrorComponent implements OnDestroy {


    constructor(
        public appOrderService: AppOrderService
    ) {

    }

    ngOnDestroy() {
        this.appOrderService.setHasError(false)
    }

    submit() {
        this.appOrderService.sendOrderData()
    }
}