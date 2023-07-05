import * as React from 'react';
import { useState } from 'react'
import DemoButtons from './demo-buttons.tsx';

import './style.css';

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


export default function VendingMachineApp() {
  const buttonData = getProducts();

  return (
    <div>
      <h1>Hello World 0-0</h1>
      <p>I don't get typescript at all (╯°□°）╯︵ ┻━┻</p>
      <div className="buttons">
        <DemoButtons />
      </div>
      <ShoppingList />
    </div>
  );
}

// export default function OptionButton(buttonOption) {
//   return (
//     <button>{{buttonOption}}</button>
//   )
// }
