import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
 url='http://localhost:3000/products'
  public url= environment.url+'/products/'
  constructor(private http: HttpClient) { }
  getAllProduct(){
    return this.http.get<Product[]>(this.url)
  }
  addProduct(p:Product){
    return this.http.post(this.url,p)
  }
  delete(id: number){
    return this.http.delete(this.url+id)
  }
  update(p:Product){
    return this.http.put(this.url+p.id, p)
  }
/*
  deleteProduct(){
      //cnx avec backend
  }
  getProductByID(id:number): any{
      for(let i in this.list){
        if(this.list[i]['id']==id){
          return this.list[i]
        }
      }
       //return null;
  }

  updateProduct(product: Product){
    for(let p of this.list){
      if(p.id===product.id){
          p=product
      }
  }
}*/
}
