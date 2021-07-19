// Import stylesheets
//import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript , HELLO </h1>`;

//typescript is a javascript generator//

const planet: string = "Earth" //declaring variable with name
const isLockdown: boolean = true
const year: number = 2021

//var animal = "dog"; //if datatype not initialised typescript will read first word as the default datatype
//animal = 5; //error would occur because this is an int

//let food: any = "noodle" //recoommend not using, better to enforce type of variable//
//food = 3;

//planet = 3; //only shows error in complier but not error when run-this is because typscrip gets translated
//javascript.
//console.log(planet);
//console.log(year);

//let and constant//
//const = declare varible once, cant change variable afterwards

//const colour = "green";
colour = "red";


let year: number = 2020;
console.log(year);
year = 2020

const button: HTMLElement = document.getElementById('custom-btn')
button.addEventListener('click', event =>) {
  console.log('clicking');
});


function fizzbuzz(){

  //count = 100

  for (let i = 1; i < 100; i++)
  {
    let _i = i + 1;

    if  (_i % 3 == 0 && _i % 5==0) //% modulus-Returns the division remainder, same as i divided by 3 but give me just the numbers after the decimal,
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