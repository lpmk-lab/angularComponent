import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {



 productList: Product[] = [
    {
        id: "001",
        name: "Laptop",
        color: "Silver",
        price: 999.99,
        available: true,
        image: "/assets/product/laptop_image.jpg"
    },
    {
        id: "002",
        name: "Smartphone",
        color: "Black",
        price: 699.99,
        available: true,
        image: "/assets/product/smartphone_image.jpg"
    },
    {
        id: "003",
        name: "Headphones",
        color: "Red",
        price: 99.99,
        available: true,
        image: "/assets/product/headphones_image.jpg"
    },
    {
        id: "004",
        name: "Watch",
        color: "Gold",
        price: 299.99,
        available: false,
        image: "/assets/product/watch_image.jpg"
    }
];

}
interface Product {
  id: string;
  name: string;
  color: string;
  price: number;
  available: boolean;
  image: string;
}
