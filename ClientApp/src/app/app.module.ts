import { AppOrderService } from './services/order.service';
import { OrderStep5Component } from './order/step5/step5.component';
import { OrderStep4Component } from './order/step4/step4.component';
import { OrderStep3Component } from './order/step3/step3.component';
import { OrderStep2Component } from './order/step2/step2.component';
import { OrderStep1Component } from './order/step1/step1.component';
import { OrderComponent } from './order/order.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { AppStoreService } from './services/store.service';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { StoreComponent } from './store/store.component';
import { StoreItemComponent } from './store/store-item/store-item.component';
import { OrderSuccessComponent } from './order/success/success.component';
import { OrderErrorComponent } from './order/error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    StoreComponent,
    StoreItemComponent,
    CartComponent,
    CartItemComponent,
    OrderComponent,
    OrderStep1Component,
    OrderStep2Component,
    OrderStep3Component,
    OrderStep4Component,
    OrderStep5Component,
    OrderSuccessComponent,
    OrderErrorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'store', component: StoreComponent },
      { path: 'cart', component: CartComponent },
      { path: 'order', component: OrderComponent },
      { path: '',   redirectTo: '/store', pathMatch: 'full' },
      { path: '**', redirectTo: '/store' }
    ]),
  ],
  providers: [
    AppStoreService,
    AppOrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
