//Import stylesheets
//import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript , HELLO </h1>`;

//typescript is a javascript generator//

const output: HTMLElement = document.getElementById('output');
const button: HTMLElement = document.getElementById('custom-btn');
button.addEventListener('click', fizzbuzz);

function fizzbuzz(){

  const startNumInput: HTMLInputElement = <HTMLInputElement>
  (document.getElementById('start-num')
  //count = 100

  for (let i = 1; i < 100; i++)
  {
    let _i = i + 1;

    if  (_i % 3 == 0 && _i % 5==0) //% modulus-Returns the division remainder, same as i divided by 3 but give me just the numbers after the decimal,
                                  //this example is asking for 0 remainder- ie you need to ask yourself how many times can 5 fit into 100
    {
      console.log('fizz', _i);
    }
    {
      console.log('fizzbuzz', _i);
    }

    else if (_i % 3 == 0) // When there ir no remainder (ie. 9/3 = 3.0 ) there is a zero after the decimal, so print Fizz
    {
      console.log('fizz', _i);
    }
    else if (_i % 5 == 0) // When there ir no remainder (ie. 10/2 = 5.0 ) there is a zero after the decimal, so print Fizz
    {
      console.log('buzz', _i);
    }

    }
  }