import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
    let data: any = localStorage.getItem('cartarray') ? localStorage.getItem('cartarray') : '[]'
    this.cartArray = JSON.parse(data)
    this.summary()
  }
  RemoveCourse(title: any) {
    this.tempArray = []
    this.cartArray.filter(res => {
      if (res.title != title) {
        this.tempArray.push(res)
      }
    })
    this.cartArray = this.tempArray
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
}
