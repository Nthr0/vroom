import * as React from 'react';
import { useState } from 'react'

import './style.css';
import { ButtonPanel } from './button-panel.tsx';
import { ShoppingList, getProducts } from './ItemList';


export default function VendingMachineApp() {
  const buttonData = getProducts();

  return (
    <div>
      <h1>Hello World 0-0</h1>
      <p>I don't get typescript at all (╯°□°）╯︵ ┻━┻</p>
      <div className='bigBox'>
        <div className="buttons">
          <ButtonPanel />
        </div>
        <div className="inputBox">
          <p>{Display}</p>
        </div>
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


