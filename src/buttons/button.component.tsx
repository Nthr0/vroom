import * as React from 'react';

export function MyButton({ Display, onButtonClick }) {
    return (
      <button onClick={onButtonClick}>
        {Display}
      </button>
    );
  }