import * as React from 'react';
import { useState } from 'react';
import MyButton from './button.component';
export default function buttonPanel() {
  function handleClick(i: string) {
    console.log("vroom");
  }
//  const [Display, setCount] = useState("");
//   function handleClick() {   

//     console.log(Display);
//     setCount(Display);
//   }
  return (
    <>
      <div className="bigBox">
        <div className="row1">
          <MyButton onButtonClick={() => handleClick("1")} Display="1" />
          <MyButton onButtonClick={() => handleClick("2")} Display="2" />
          <MyButton onButtonClick={() => handleClick("3")} Display="3" />
        </div>
        <div className="row2">
          <MyButton onButtonClick={() => handleClick("4")} Display="4" />
          <MyButton onButtonClick={() => handleClick("5")} Display="5" />
          <MyButton onButtonClick={() => handleClick("6")} Display="6" />
        </div>
        <div className="row3">
          <MyButton onButtonClick={() => handleClick("7")} Display="7" />
          <MyButton onButtonClick={() => handleClick("8")} Display="8" />
          <MyButton onButtonClick={() => handleClick("9")} Display="9" />
        </div>
        <div className="row4">
          <MyButton Display="x" onButtonClick={() => handleClick("x")} />
          <MyButton  Display="0" onButtonClick={() => handleClick("0")} />
          <button>✓</button>
        </div>
        <div className="inputBox">
          {/* <p>{Display}</p> */}
        </div>
      </div>
    </>
  );
}

