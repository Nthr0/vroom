import * as React from 'react';
import { useState } from 'react'
import { getProducts } from './product/product.service.tsx';
import { SelectionDisplay  } from './selection/selection-display.component.tsx';
import { ProductList } from './product/product-list.component.tsx';
import './style.css';
import { ButtonPanel } from './buttons/button-panel.tsx';

export const MAX_CHAR_ENTRY = 3;
const buttonPanelData = ["1", "2", "3","4","5","6","7","8","9","x","0","✓"];

export default function VendingMachineApp() {
  const productsData = getProducts();

  const [selected, setSelected] = useState(buttonPanelData[0]);

  function handleSelection(i: string) {
    console.debug(i);
    if(selected.length < MAX_CHAR_ENTRY) {
      setSelected(selected.concat(i));
    }
  }

  return (
    <div>
      <h1>Hello World 0-0</h1>
      <p>I don't get typescript at all (╯°□°）╯︵ ┻━┻</p>
      <div className='bigBox'>
        <div className="buttons">
          <ButtonPanel buttons={buttonPanelData} onSelect={value => handleSelection(value)}/>
        </div>
        <SelectionDisplay selection={selected}/>
      </div>
      <ProductList products={productsData}/>
    </div>
  );
}

// export default function OptionButton(buttonOption) {
//   return (
//     <button>{{buttonOption}}</button>
//   )
// }


