import { MyValidators } from '../../my-validators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { AppOrderService } from "src/app/services/order.service";

@Component({
    selector: 'app-order-step4',
    templateUrl: './step4.component.html',
    styleUrls: [
        './../order.component.css',
        './step4.component.css'
    ]
})

export class OrderStep4Component implements OnInit {

    deliveryType: FormGroup
    pickup: FormGroup
    mail: FormGroup

    constructor(public appOrderService: AppOrderService) {

    }

    ngOnInit() {
        this.deliveryType = new FormGroup({
            deliveryType: new FormControl(this.appOrderService.getOrderData().deliveryType || 'pickup', [
                Validators.required
            ])
        })

        this.pickup = new FormGroup({
            city: new FormControl(this.appOrderService.getOrderData().city || 'Москва', [
                Validators.required
            ]),
        })

        this.mail = new FormGroup({
            fullName: new FormControl(this.appOrderService.getOrderData().fullName || '', [
                Validators.required
            ]),
            consigneePhone: new FormControl(
                this.appOrderService.getOrderData().consigneePhone
                || this.appOrderService.getOrderData().phone || '', [
                Validators.required,
                Validators.minLength(10),
                MyValidators.phoneNumber
            ]),
            index: new FormControl(this.appOrderService.getOrderData().index || '', [
                Validators.required,
                Validators.minLength(6),
                Validators.maxLength(6),
                MyValidators.number
            ]),
            address: new FormControl(this.appOrderService.getOrderData().address || '', [
                Validators.required
            ])
        })
    }
    
    submit() {

        if (this.deliveryType.value.deliveryType === 'pickup' && this.pickup.valid) {
            this.appOrderService.setOrderData({
                deliveryType: this.deliveryType.value.deliveryType,
                city: this.pickup.value.city
            })
            this.appOrderService.nextStep()
        } else if (this.deliveryType.value.deliveryType === 'mail' && this.mail.valid) {
            this.appOrderService.setOrderData({
                deliveryType: this.deliveryType.value.deliveryType,
                fullName: this.mail.value.fullName,
                consigneePhone: this.mail.value.consigneePhone,
                index: this.mail.value.index,
                address: this.mail.value.address
            })
            this.appOrderService.nextStep()
        }
    }
}