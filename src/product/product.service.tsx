import { product } from "./product.model";

  
  export function getProducts(): Array<product> {
    return [
      {
        title: 'Coffee',
        option: "123",
        stocklevel: 10,
        imageSource: "coffee.png",
      },
      {
        title: 'coke',
        option: "222",
        stocklevel: 10,
        imageSource: "Coke.png",
      },
      {
        title: 'latte',
        option: "308",
        stocklevel: 10,
        imageSource: "Latte.png",
      },
      {
        title: 'lemonade',
        option: "516",
        stocklevel: 10,
        imageSource: "Lemonade.png",
      },
      {
        title: 'Sparkling water',
        option: "483",
        stocklevel: 10,
        imageSource: "Sparkling-water.png",
      },
      {
        title: 'Water',
        option: "709",
        stocklevel: 10,
        imageSource: "Water.png",
      },
    ];
  }
    