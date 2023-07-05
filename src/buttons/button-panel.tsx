import * as React from 'react';
import { MyButton } from './button.component.tsx';

export function ButtonPanel({ buttons, onSelect }) {
    const listItems = buttons.map(x =>
      <MyButton Display={x} onButtonClick={() => onSelect(x)} />
    );
  
    return (
      <ul>{listItems}</ul>
    );
  }