'use strict'

// const passtest=false;
// let hasDriversLicense=false;



// if(passtest){
//     hasDriversLicense=true;
// }

// if(hasDriversLicense){
//     console.log("yes you can drive")
// }


// functions


// function logger(){
//     console.log("namaste mitronn!!!")
// }

// logger()




// function fruitProcessor(apples,oranges){//parameter
//     console.log(apples,oranges)
//     const juice=`Juice with ${apples} apples and ${oranges} oranges `;
//     return juice;
// }
// console.log(fruitProcessor(2,4))

// const MixJuice=fruitProcessor(3,1)
// console.log(MixJuice)

// const appleJuice=fruitProcessor(5,0)
// console.log(appleJuice)


// const OrangeJuice=fruitProcessor(0,5)
// console.log(OrangeJuice)

// function Declarations vs function expression

const age1=calAge1(2000);
console.log(age1)

function calAge1(birthYear){
    return 2024-birthYear;
}

// function expression->it will return a value



// const calAge2=function (birthYear){
//     return 2024-birthYear
// }

// const age2=calAge2(1990);
// console.log(age2);

// // console.log(calAge2(2001))

// console.log(`Your age is ${age2}`)




// Arrow functions -> form of function expression

const calAge2=function (birthYear){
    return 2024-birthYear
}

const age2=calAge2(1990);
console.log(age2);


// ===========================================
const calAge3= birthYear => 2024-birthYear;//one liner function

const age3=calAge3(1995);
console.log(age3);



const Retirement= (birthYear,name) =>{
    console.log("hello " + name );
    const age=2024-birthYear;
    const retirement=65-age
    return retirement;
}
console.log("Your pending years to retire are " + Retirement(1992,"Raju"))
