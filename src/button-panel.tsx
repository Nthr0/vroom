import * as React from 'react';
import MyButton from './button.component.tsx';

export function ButtonPanel() {
    function handleClick(i: string) {
      console.log(i);
    }
    const listItems = ["1", "2", "3","4","5","6","7","8","9","x","0","✓"].map(x =>
      <MyButton Display={x} onButtonClick={() => handleClick(x)} />
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }