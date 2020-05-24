import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { delay } from 'rxjs/operators'

export interface StoreItem {
    id?: number
    name: string
    price: number
    color: string
    format: string
    itemNumber: number
    count?: number
    isLoading?: boolean
    added?: boolean
}

interface StoreData {
    items: StoreItem[]
    cartItems: StoreItem[]
    isLoading: boolean
    isClearing: boolean
}

@Injectable()

export class AppStoreService {
    
    private data: StoreData = {
        items: [],
        cartItems: [],
        isLoading: false,
        isClearing: false
    }

    constructor(private http: HttpClient) {

    }

    requestItems() {
        this.data.isLoading = true

        this.http.get<StoreItem[]>('/api/StoreItems')
            .subscribe(res => {
                this.data.items = res.map((item): StoreItem => {
                    const itemInCart = this.data.cartItems.find(i => i.itemNumber === item.itemNumber)
                    return {
                        ...item,
                        count: itemInCart ? itemInCart.count : 1,
                        added: itemInCart ? true : false
                    }
                })
                this.data.isLoading = false
            })
    }

    requestCartItems() {
        this.http.get<StoreItem[]>('/api/CartItems')
            .subscribe(res => {
                this.data.cartItems = res
            })
    }

    getItems(): StoreItem[] {
        return this.data.items
    }

    getCartItems(): StoreItem[] {
        return this.data.cartItems
    }

    getIsLoading(): boolean {
        return this.data.isLoading
    }

    getIsClearing(): boolean {
        return this.data.isClearing
    }

    getCartSum(): number {
        let sum = 0

        for (let i = 0; i < this.data.cartItems.length; i++) {
            sum += this.data.cartItems[i].price * this.data.cartItems[i].count
        }

        return sum
    }

    decCount(id: number) {
        this.data.items = this.data.items.map((item): StoreItem => {
            if (item.id === id) {
                return {
                    ...item,
                    count: item.count && item.count - 1,
                    added: false
                }
            } else {
                return item
            }
        })
    }

    incCount(id: number) {
        this.data.items = this.data.items.map((item): StoreItem => {
            if (item.id === id) {
                return {
                    ...item,
                    count: item.count ? item.count + 1 : 2,
                    added: false
                }
            } else {
                return item
            }
        })
    }

    addToCart(id: number) {
        const item = this.data.items.find(i => i.id === id)
        const itemInCart = this.data.cartItems.find(i => i.itemNumber === item.itemNumber)

        item.isLoading = true
        if (itemInCart) {
            console.log(item, itemInCart)
            this.http.put(`api/CartItems/${itemInCart.id}`, {
                id: itemInCart.id,
                name: item.name,
                price: item.price,
                color: item.color,
                format: item.format,
                count: item.count,
                itemNumber: item.itemNumber
            }).subscribe(res => {
                this.requestCartItems()
                item.added = true
                item.isLoading = false
            })
        } else {
            this.http.post('/api/CartItems', {
                name: item.name,
                price: item.price,
                color: item.color,
                format: item.format,
                count: item.count,
                itemNumber: item.itemNumber
            }).subscribe(res => {
                this.requestCartItems()
                item.added = true
                item.isLoading = false
            })
        }
    }

    removeFromCart(id: number) {
        const item = this.data.cartItems.find(item => item.id === id)
        item.isLoading = true

        this.http.delete(`api/CartItems/${id}`)
            .subscribe(res => {
                this.data.cartItems = this.data.cartItems.filter(item => item.id !== id)
                item.isLoading = true
            })
    }

    clearCart() {
        let itemsLength = this.data.cartItems.length
        let deleted = 0
        this.data.isClearing = true
        
        this.data.cartItems.map((item) => {
            this.http.delete(`api/CartItems/${item.id}`)
                .subscribe(res => {
                    deleted++
                    if (deleted === itemsLength) {
                        this.data.cartItems = []
                        this.data.isClearing = false
                    }
                })
        })
    }
}