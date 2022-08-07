import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service'
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from '../services/basket.service';





@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
  
})
export class ProductComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private basketService: BasketService
    ) { }
  title = "Ürün Listesi";
  filterText = "";
  products: Product[] = [];
    
  
  





  ngOnInit():void  {

    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data =>{
        this.products=data});
    })
    
  }
  addProductBasket(product: any) {
    console.log(product);
    
    this.alertifyService.success(product.name+  " added");
    this.basketService.addProductBasket(product);
  }


  addToCart(product:any){
    this.alertifyService.success(product.name+  " added");
  }
  
}



