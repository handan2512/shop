import { Injectable } from '@angular/core';
import { Product } from "../product/product";
import { BasketList } from "../basket/basketList";
import { Basket } from '../basket/sepet';
@Injectable()
export class BasketService {
  constructor() { }
  getBasketList(): Basket[] {
    return BasketList;
  }
  addProductBasket(product: Product) {
    var productContains = BasketList.find(p => p.product.id == product.id);
    if (productContains)
      productContains.quantity += 1;
    else {
      let basket = new Basket();
      basket.product = product;
      basket.quantity = 1;
      BasketList.push(basket);
    }
  }
  clearBasket() {
    BasketList.splice(0, BasketList.length);
  }
  removeProductBasket(product: Product) {
    var productContains = BasketList.find(p => p.product.id == product.id);
    if (productContains) {
      var productIndexNo = -1;
      productIndexNo = BasketList.indexOf(productContains);
      if (productIndexNo != -1)
        BasketList.splice(productIndexNo, 1);
    }
  }
}