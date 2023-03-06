import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

//   function check(arr){
//     if(arr.length % 2 !== 0 ){
//         console.log("cannot do op on uneven number");
//                     return
//     }
  

// }

const check = (expression) => {
  const stack = [];
  const bracketLookup = {
    '{': '}',
    '(': ')',
    '[': ']',
  };

  for (const key of expression) {
    if(Object.keys(bracketLookup).includes(key)) { // matches open brackets
      stack.push(key);
    } else if(Object.values(bracketLookup).includes(key)) { //matches closed brackets
      const lastBracket = stack.pop();
      if(bracketLookup[lastBracket] !== key) {
        return false;
      }

    }
  }
  return stack.length === 0;
}


// function check(arr){
//     //Assuming it's already an array
//     //the goal is to find matching consecutive symbols

//     const expected = {
//       "{" : "}",
//       "(" : ")",
//       "[" : "]"
//     }

//     let stack = [];

//     for(let i = 0; i<arr.length-1; i++){
//       if(Object.keys(expected).includes(arr[i])){
//         stack.push(arr[i]);
//       }
//       else if(Object.values(expected).includes(arr[i])){
//         let i = stack.pop();
//         if( i === arr[i]){
//           return true;
//         }
//         return false
//       }
//     }
// }

let myArr = ["(", ")", "{", "}"];



  return (
    <div className="App">
      <div className="card">
        <button onClick={() => {setCount((count) => count + 1); console.log(check(myArr));}}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
