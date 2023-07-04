import * as React from 'react';
import './style.css';


export default function App() {
  return (
    <div>
      <h1>Hello World 0-0</h1>
      <p>I don't get typescript at all (╯°□°）╯︵ ┻━┻</p>
      <div className="buttons">
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
      </div>
    </div>
  );
}