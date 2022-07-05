import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { delay } from 'rxjs/operators'
import { AppStoreService } from './store.service';

export interface OrderData {
    id?: number
    name?: string
    phone?: string
    insnum?: string
    photo?: string
    deliveryType?: string
    city?: string
    fullName?: string
    consigneePhone?: string
    index?: string
    address?: string
    confirmed?: boolean
}


interface Data {
    step: number
    isLoading: boolean
    success: boolean
    hasError: boolean
    orderData: OrderData
}

@Injectable()

export class AppOrderService {

    private data: Data = {
        step: 1,
        isLoading: false,
        success: false,
        hasError: false,
        orderData: {
            
        }
    }

    constructor(private http: HttpClient,
        public appStoreService: AppStoreService) {

    }

    getOrderData(): OrderData {
        return this.data.orderData
    }

    getStep(): number {
        return this.data.step
    }

    getIsloading(): boolean {
        return this.data.isLoading
    }

    getSuccess(): boolean {
        return this.data.success
    }

    getHasError(): boolean {
        return this.data.hasError
    }

    setOrderData(data: OrderData) {
        this.data.orderData = {
            ...this.data.orderData,
            ...data
        }
    }

    sendOrderData() {
        this.data.isLoading = true

        this.http.post<OrderData>('api/OrderItems/', {
            ...this.data.orderData
        }).subscribe(res => {
            console.log(res)
  
            this.data.orderData = {
                ...res
            }
            
            this.data.isLoading = false
            this.setSuccess(true)
        }, err => {

            this.data.isLoading = false
            this.setHasError(true)
        })
    }


    nextStep() {
        this.data.step++
    }

    prevStep() {
        this.data.step--
    }

    resetStep() {
        this.data.step = 1
    }

    setSuccess(success: boolean) {
        this.data.success = success
    }

    setHasError(hasError: boolean) {
        this.data.hasError = hasError
    }

    clearOrder() {
        this.data.orderData = {}
    }
}