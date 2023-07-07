import * as React from 'react';

export function MyButton({ Display, onButtonClick }) {
    return (
      <button className={Display} onClick={onButtonClick}>
        {Display}
      </button>
    );
  }