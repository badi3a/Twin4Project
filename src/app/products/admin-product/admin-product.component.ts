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
    this.serviceProduct.getAllProduct().subscribe(
      (data:Product[])=>{
        this.list=data;
        this.list= this.list.filter(product=>product.quantity==0);}
    )


  }
  delete(p:Product){
    let i = this.list.indexOf(p);
    this.serviceProduct.delete(p.id).subscribe(
      ()=>{this.list.splice(i,1)}
    )
  }

}
