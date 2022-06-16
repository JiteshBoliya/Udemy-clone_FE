import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from 'express';
import { CheckoutService } from 'src/app/shared/service/checkout.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartArray = new Array();
  tempArray = new Array()
  subtotal: number = 0
  total: number = 0
  tax: number = 0

  paymentHandler: any = null;
  success: boolean = false
  failure:boolean = false
  constructor(private checkout: CheckoutService,
              private  route:Router,
              private user:UserService) { }

  ngOnInit(): void {
    let data: any = localStorage.getItem('cartarray') ? localStorage.getItem('cartarray') : '[]'
    this.cartArray = JSON.parse(data)
    this.summary()
    this.invokeStripe();
  }
  RemoveCourse(title: any) {
    this.tempArray = []
    this.cartArray.filter(res => {
      if (res.title != title) {
        this.tempArray.push(res)
      }
    })
    this.cartArray = this.tempArray
    this.user.cartItemCount.next(this.cartArray.length)
    localStorage.setItem('cartarray', JSON.stringify(this.cartArray))
    this.summary()
  }
  summary() {
    this.subtotal=0
    this.tax=0
    this.cartArray.map(res => {
      this.subtotal = this.subtotal + res.price
    })
    if (this.cartArray.length > 0) this.tax = 10
    this.total = this.subtotal + this.tax
  }
  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LATrFSE5OvXZYoNrAJkRtG8qhhtHvfskYAjXh799SbxXFeJLK3Vk10nk1wXAZPpdvwvn53HJFM8K3CSlSJGS5xG00P8s6KJTc',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });
 
    const paymentstripe = (stripeToken: any) => {
      this.checkout.makePayment(stripeToken).subscribe((data: any) => {
        console.log(data);
        if (data.data === "success") {
          this.success = true
        }
        else {
          this.failure = true
        }
        this.afterPayment(stripeToken)
      });

    };
 
    paymentHandler.open({
      name: 'Online course',
      description: 'Payment Getway',
      amount: amount * 100,
    });

  }
  afterPayment(stripeToken: any){
    this.cartArray=[]
      localStorage.removeItem("cartarray")
      this.route.navigate(['/student-profile'])
      this.user.sendInvoice({email:stripeToken.email}).subscribe(res=>{
        console.log(res);
        
      })  
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LATrFSE5OvXZYoNrAJkRtG8qhhtHvfskYAjXh799SbxXFeJLK3Vk10nk1wXAZPpdvwvn53HJFM8K3CSlSJGS5xG00P8s6KJTc',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };
 
      window.document.body.appendChild(script);
    }
  }
  
}
