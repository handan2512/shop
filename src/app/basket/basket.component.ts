import { Component, OnInit, DoCheck } from '@angular/core';
import { Basket } from '../basket/sepet';
import { BasketService } from '../services/basket.service';
@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit, DoCheck {
  basketList!: Basket[];
  basketCount: any;
  constructor(private basketService: BasketService) { }
  ngOnInit() { }
  ngDoCheck() {
    this.basketList = this.basketService.getBasketList();
    this.basketCount = this.basketService.getBasketList().reduce((a, b) => a = a + b.quantity, 0);
  }
}