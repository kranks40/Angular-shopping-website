import { Injectable } from '@angular/core';
import { Product} from 'src/app/models/product'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Todo: Populate products from an API
products: Product[] = [
new Product(1, 'Product 1', 'This is the product 1 description. The product is really good', 100),
new Product(2, 'Product 2', 'This is the product 1 description. The product is really good', 10),
new Product(3, 'Product 3', 'This is the product 1 description. The product is really good', 200),
new Product(4, 'Product 4', 'This is the product 1 description. The product is really good', 150),
new Product(5, 'Product 5', 'This is the product 1 description. The product is really good', 300),
new Product(6, 'Product 6', 'This is the product 1 description. The product is really good', 350),
new Product(7, 'Product 7', 'This is the product 1 description. The product is really good', 350),
new Product(8, 'Product 8', 'This is the product 1 description. The product is really good', 350),
new Product(9, 'Product 9', 'This is the product 1 description. The product is really good', 350),

]
  constructor() { }
  getProducts(): Product[]{
    //TODO: Populate products from an API and return an Observable
    return this.products
  }
}
