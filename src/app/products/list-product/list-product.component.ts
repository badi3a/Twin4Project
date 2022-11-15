import { ProductService } from './../../core/services/product.service';
import { StatsService } from './../../core/services/stats.service';
import { Product } from '../../core/model/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list: Product[];
  public all: Product[];
  public priceMax: number;
  public category: String;
  public stock:number;
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private statsService:StatsService ) {
  }
  ngOnInit(): void {
    this.title = 'MyStore App';
    //get the list from the service
          this.productService.getAllProduct().subscribe(
            (response:Product[])=>{
              this.all= response;
              //filter
          console.log(this.all);
          this.route.params.subscribe(
            (params) => {
              this.category = params['category'];
              if (this.category != null) {
                this.list = this.all.filter((product) => product.category == this.category)
              } else {
                this.list = this.all
              }
            },
      () => { console.log('error') },
      () => { console.log('complete') }
    )
      },
      ()=>{console.log("error")},
      ()=>{console.log("complete")}

    );

  }

  outStock(){

   this.stock = this.statsService.getCount(this.all,"quantity",0);
  }


  incrementLike(product: Product): void {
    let i = this.list.indexOf(product);
    if (i != -1) {
      this.list[i].nbrLike++
      //cnx to  backend side
      product.nbrLike++;
      this.productService.update(product).subscribe();
    }
  }
  buyProduct(product: Product): void {
    let i = this.list.indexOf(product);
    if (i != -1) {
      this.list[i].quantity--
      //cnx to  backend side
      product.quantity--
      this.productService.update(product).subscribe();
    }
  }
}
