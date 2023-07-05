import * as React from 'react';

export function ProductList({products}) {
    const listItems = products.map(product =>
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
