import * as React from 'react';
import DemoButtons from './demo-buttons';

import './style.css';

// export function getProductsData(): Array<product> {
//   return [
//     {
//       name: 'latte',
//       option: 123,
//       stocklevel: 10,
//     },
//     {
//       name: 'cappacino',
//       option: 222,
//       stocklevel: 10,
//     },
//   ];
// }

export function getProducts() {
  return [
    'latte: 123 ',
    'cappacino: 222',
    'expresso: 333',
    'water: 333',
    'milk: 444',
    'coke: 555',
  ];
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
    </div>
  );
}

// export default function OptionButton(buttonOption) {
//   return (
//     <button>{{buttonOption}}</button>
//   )
// }
