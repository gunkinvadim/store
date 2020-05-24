import { AppStoreService } from '../../services/store.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from "@angular/core";
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
        public appOrderService: AppOrderService
    ) {

    }

    ngOnDestroy() {
        this.appOrderService.setSuccess(false)
    }

}