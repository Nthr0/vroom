import * as React from 'react';

export default function MyButton({ Display, onButtonClick }) {
    return (
      <button onClick={onButtonClick}>
        {Display}
      </button>
    );
  }