import * as React from 'react';

export function VendList({ products, idMaker }) {
    const strNum = idMaker.toString()
        function kill(){
            var self = document.getElementById(strNum)
            console.log(strNum)
            return self?.parentNode?.removeChild(self)
        }
  const listItems = products.map(product =>
    <>
      <li key={product.title} id={idMaker.toString()}>
        <span className="productImageWrapper">
            <button className='productButton' onClick={kill}>
                <img className="productImage" src={require('./../media/' + product.imageSource)}></img>
            </button>
        </span>
      </li>
    </>
  );

  return (
    <div className="vendCards">
      <ul>
        {listItems}
      </ul>
    </div>
  );
}