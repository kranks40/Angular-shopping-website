export class Product {
   id: number;
   name: string;
   description: string;
   price: number;
   imageUrl: string;
   
   constructor(id, name, description='', price=0, imageUrl="https://techcrunch.com/wp-content/uploads/2017/08/dji-drone-5.jpg?w=1390&crop=1"){
     this.id = id
     this.name = name
     this.description = description
     this.price = price
     this.imageUrl = imageUrl
   }
}
