import * as React from 'react';

export default function buttonPanel() {
  return (
    <>
      <div className="row1">
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
      <div className="row2">
        <button>4</button>
        <button>5</button>
        <button>6</button>
      </div>
      <div className="row3">
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
      <div className="row4">
        <button>x</button>
        <button>0</button>
        <button>✓</button>
      </div>
    </>
  );
}
