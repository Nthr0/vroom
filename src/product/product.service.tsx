import { product } from "./product.model";

  
  export function getProducts(): Array<product> {
    return [
      {
        title: 'latte',
        option: "123",
        stocklevel: 10,
        imageSource: "2",
      },
      {
        title: 'cappacino',
        option: "222",
        stocklevel: 10,
        imageSource: "2",
      },
    ];
  }
    