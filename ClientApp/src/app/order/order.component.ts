import { AppOrderService } from '../services/order.service';
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { AppStoreService } from '../services/store.service';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: [
        './order.component.css'
    ]
})

export class OrderComponent implements OnDestroy, OnInit {

    constructor(
        public appOrderService: AppOrderService,
        public appStoreService: AppStoreService,
        private router: Router
    ) {

    }

    ngOnInit() {
        if (!this.appStoreService.getCartItems().length) {
            this.router.navigate(['/store'])
        }
    }

    ngOnDestroy() {
        this.appOrderService.resetStep()
    }

}