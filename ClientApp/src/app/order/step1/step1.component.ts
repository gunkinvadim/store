import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppOrderService } from '../../services/order.service';
import { Component, OnInit } from "@angular/core";
import { MyValidators } from 'src/app/my-validators';

@Component({
    selector: 'app-order-step1',
    templateUrl: './step1.component.html',
    styleUrls: [
        './../order.component.css',
        './step1.component.css'
    ]
})

export class OrderStep1Component implements OnInit {

    form: FormGroup

    constructor(public appOrderService: AppOrderService) {

    }

    ngOnInit() {
        this.form = new FormGroup({
            name: new FormControl(this.appOrderService.getOrderData().name || '', [
                Validators.required
            ]),
            phone: new FormControl(this.appOrderService.getOrderData().phone || '', [
                Validators.required,
                Validators.minLength(10),
                MyValidators.phoneNumber
            ]),
            check: new FormControl(false, [
                MyValidators.checked
            ])
        })
    }
    
    submit() {
        if (this.form.valid) {
            this.appOrderService.setOrderData({
                name: this.form.value.name,
                phone: this.form.value.phone
            })

            this.appOrderService.nextStep()
        }
    }
}