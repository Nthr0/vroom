import * as React from 'react';
import { useState } from 'react'
import { getProducts } from './product/product.service.tsx';
import { SelectionDisplay } from './selection/selection-display.component.tsx';
import { ProductList } from './product/product-list.component.tsx';
import './style.css';
import { ButtonPanel } from './buttons/button-panel.tsx';
import { ProductVendDraw } from './product/product-vend-draw.component.js';

export const MAX_CHAR_ENTRY = 3;
const buttonPanelData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "x", "0", "✓"];

export default function VendingMachineApp() {
  const productsData = getProducts();

  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("Choose...");
  const [vend, setVend] = useState("No product");
  const [vendingProducts, vendingProductSelected] = useState<any[]>([]);

  function getCurrentProduct() {
    const results = productsData.filter(x => x.option == selected);
    if (results.length === 1) {
      return results[0];
    }
    return null
  }

  function vendItem() {
    const product = getCurrentProduct();
    if (product) {
      vendingProductSelected(a => [...a, product]);
      console.log({vendingProducts})

    }
  }

  function handleSelection(i: string) {
    console.log(i);
    if (i == "x") {
      setSelected("");
    }
    else if (i == "✓") {
      console.log(selected);
      const product = getCurrentProduct();
      if (product) {

        if (product.stocklevel > 0) {
          setMessage("Valid")
        }
        else {
          setMessage("Out of stock")
        }
      }
      else {
        setMessage("rejected")
      }
    }
    else if (selected.length < MAX_CHAR_ENTRY) {
      setSelected(selected.concat(i));
    }
  }

  return (
    <div>
      <h1>Hello World 0-0</h1>
      <p>I don't get typescript at all (╯°□°）╯︵ ┻━┻</p>

      <div className='container'>
        <div className='left-container'>
          <div className='bigBox'>
            <SelectionDisplay selection={message} />
            <div className="buttons">
              <ButtonPanel buttons={buttonPanelData} onSelect={value => handleSelection(value)} />
            </div>
            <SelectionDisplay selection={selected} />
            <button className='vendBtn' onClick={vendItem}>Vend items</button>
          </div>
        </div>
        <div className='right-container'>
          <div className='productBox'>
            <ProductList products={productsData} />
          </div>
          <div className='vendDraw' >
            <p>Collect your product</p>
            <ProductList products={vendingProducts} />
          </div>
        </div>
      </div>
    </div>
  );
}