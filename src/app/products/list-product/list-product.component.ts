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
  public list:Product[];
  public all:Product[];
  public priceMax:number;
  public category: String;
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.title = 'MyStore App';
    console.log(this.route.params);
    this.all= [
      {id:15,
        name: 'Outfit 3',
        price: 280,
        nbrLike: 40,
        description: 'nice Outfit',
        category: 'men',
        quantity: 3,
        picture:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2F3d%2Fbc3d02841768421f1fab4e03f68be288b8851c5c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'},
      {id:12,
        name: 'T-shirt 1',
       price: 28,
       nbrLike: 40,
       description: 'nice T-shirt',
       category: 'women',
       quantity: 3,
       picture:'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fff%2F55%2Fff55f8591a27acf2678a6f531add67167d41993a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'
      },
      {
        id: 12,
        name: 'T-shirt 2',
        price: 18,
        nbrLike: 40,
        description: 'nice T-shirt',
        category: 'women',
        quantity: 0,
        picture: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F94%2Fa0%2F94a0f95305117dab710e5e5a829422b43dde52e2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]'
      },
      {id:12,
        name: 'Outfit 1',
        price: 280,
        nbrLike: 0,
        description: 'nice T-shirt',
        category: 'men',
        quantity: 0,
        picture:'http://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F42%2F31%2F4231ea87da0d835e0a19486450d2d233cfdc2564.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]'}
      ]
    //filter
    this.route.params.subscribe(
     (params)=>{
        this.category=params['category'];
        if(this.category!=null){
          this.list= this.all.filter((product)=>product.category==this.category)
        }else{
          this.list= this.all
        }
      },
      ()=>{console.log('error')},
      ()=>{console.log('complete')}
    )

  }


  incrementLike(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].nbrLike++
      //cnx to  backend side
    }
  }
  buyProduct(product:Product):void{
    let i = this.list.indexOf(product);
    if(i!=-1){
      this.list[i].quantity--
      //cnx to  backend side
    }}
}
