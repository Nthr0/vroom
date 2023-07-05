import * as React from 'react';

export function ShoppingList() {
    const listItems = getProducts().map(product =>
      <li
        key={product.title}
      >
        {product.title}: {product.option}
      </li>
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }
export declare type product = {
  title: string,
  option: number,
  stocklevel: number,
}

export function getProducts(): Array<product> {
  return [
    {
      title: 'latte',
      option: 123,
      stocklevel: 10,
    },
    {
      title: 'cappacino',
      option: 222,
      stocklevel: 10,
    },
  ];
}
  