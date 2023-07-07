import * as React from 'react';

export function ProductList({ products }) {
  const listItems = products.map(product =>
    <>
      <li key={product.title}>
        <span className="productImageWrapper">
          <img className="productImage" src={require('./../media/' + product.imageSource)}></img>
        </span>
        <span className="productTitle">
          {product.title}: {product.option}
        </span>
      </li>
    </>
  );

  return (
    <div className="productCards">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
