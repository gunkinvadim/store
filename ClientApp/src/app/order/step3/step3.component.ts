import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { AppOrderService } from "src/app/services/order.service";
import { MyValidators } from 'src/app/my-validators';

@Component({
    selector: 'app-order-step3',
    templateUrl: './step3.component.html',
    styleUrls: [
        './../order.component.css',
        './step3.component.css'
    ]
})

export class OrderStep3Component implements OnInit {

    form: FormGroup

    constructor(public appOrderService: AppOrderService) {

    }

    ngOnInit() {
        this.form = new FormGroup({
            insnum: new FormControl(this.appOrderService.getOrderData().insnum || '', [
                Validators.required,
                Validators.minLength(11),
                Validators.maxLength(11),
                MyValidators.number
            ])
        })
    }

    addPhoto(event) {

    }
    
    submit() {
        if (this.form.valid) {

            this.appOrderService.setOrderData({
                insnum: this.form.value.insnum
            })

            this.appOrderService.nextStep()
        }
    }
}