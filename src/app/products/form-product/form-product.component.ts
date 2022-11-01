import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../core/model/product';
import { ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
   public product: Product;
    public action: string;
  constructor(private productService: ProductService,
    private router:Router, private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id= this.currentRoute.snapshot.params['id'];
    if(id!=null){
      //update
      this.action="update";
      this.product= this.productService.getProductByID(id);
      console.log(this.product)
      console.log(id)
    }else
    { this.action="add";
      this.product = new Product();}
  }
  saveProduct(){
    if(this.action=='add')
    {this.product.nbrLike=0;
    this.productService.list.push(this.product);
    this.router.navigate(['/product/list'])}
    else {
      this.productService.updateProduct(this.product)
    }
  }

}
