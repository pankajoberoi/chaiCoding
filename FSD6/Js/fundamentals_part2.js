'use strict';
// let hasDriversLicense=false;

// const passtest=true;

// if(passtest){
//     hasDriversLicense=true;
// }

// functions


// function logger()
// {
//     console.log("hello i am a function");
// }
// logger();

function fruitProcessor(apples,oranges){
    console.log(apples+" apples " + oranges + " oranges")
    const juice=`Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}



// let glass=fruitProcessor(2,4);
// console.log(glass);


// const appleJuice=fruitProcessor(2,0);
// console.log(appleJuice);


// fruitProcessor(0,5)
// console.log(fruitProcessor(0,5));

// const mixJuice=fruitProcessor(2,6);
// console.log(mixJuice);

// function declaration vs expression

const age1=calAge1(2001);
console.log(age1);
function calAge1(birthYear){
    return 2024-birthYear;
}


// const age=calAge1(2000)
// console.log(age);

const age2=calAge2(2000);
console.log(age2); 
const calAge2=function(birthYear){
    return 2024-birthYear;
}

// const age2=calAge2(2001);
// console.log(age2);








