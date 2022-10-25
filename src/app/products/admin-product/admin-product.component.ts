import { ProductService } from './../../core/services/product.service';
import { Product } from './../../core/model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  list: Product[];
  constructor(private serviceProduct: ProductService) { }

  ngOnInit(): void {
    this.list= this.serviceProduct.
    list.filter(product=>product.quantity==0);
  }
  delete(p:Product){
    let i = this.list.indexOf(p);
    this.list.splice(i,1)
  }

}
