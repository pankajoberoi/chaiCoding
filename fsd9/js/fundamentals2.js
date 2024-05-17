// JS-> loosely typed language -> strict action X 
// Js -> env -> browser -> x
// 'use strict'
// -> strict tareeke see kaam hogga

// let drivingLicense=false;
// let passTest=true;

// if(passTest){
//     drivingLicens=true;
// }

// if(drivingLicense){
//     console.log("You can drive")
// }
// else{
//     console.log("You cant drive")
// }

// Js -> Functions -> block a code to perform a particular task

// code -> likh diya -> reuse 

// let greeting = "Jai shree ram"
// function Logger(){
//     // block scope
//     let message="hello"
//     return message;
// }

// global scope
// const output=Logger()
// console.log(output)
// console.log(message)


// 1.Parameters ko receive 
// 2. output return 

// DRY
// function fruitProcessor(apples,oranges){
//     console.log(`${apples} apples and ${oranges} oranges`)

//     const juice = `Juice with ${apples} apples and ${oranges} oranges`

//     return juice;
// }

// const glass=fruitProcessor(2,3)
// console.log(glass)

// console.log(fruitProcessor(4,5)) 

// const appleJuice=fruitProcessor(5,0)
// console.log(appleJuice)


// function declaration vs function expreesion


// console.log(calAge1(2000))   
// let age1= calAge1(2001)
// console.log(age1)

// function calAge1(birthYear){
//     return 2024-birthYear;
// }



// const age2=calAge2(2001)
// console.log(age2)

//  console.log(calAge2(2000)) 

// const calAge2=function(birthYear){
//     return 2024-birthYear
// }


// function expression vs arrow function


// const calAge2=function(birthYear){
//     return 2024-birthYear
// }
// console.log(calAge2(2000))


// const calAge3= birthYear => 2024-birthYear

// console.log(calAge3(2001))


// const Retirement = (birthYear,name) => {
//     let age=2024-birthYear;
//     let remainingYearToRetire=65-age;
//     return `${name} age is ${age} and years to retire is ${remainingYearToRetire}`
// }

// console.log(Retirement(2000,"Pankaj"))

// Function calling inside a function => higher order function 

// const cutpieces=(fruit)=>{
//     return fruit*4
// }

// function fruitProcessor(apples,oranges){
//         let applePieces=cutpieces(apples)
//         let orangePieces=cutpieces(oranges)    
//         const juice = `Juice with ${applePieces} applePices and ${orangePieces} orangePices`
    
//         return juice;
//     }
    
//     const glass=fruitProcessor(2,3)
//     console.log(glass)


// const CalAvg=(R1,R2,R3)=>{
//     return (R1+R2+R3)/3
// }

// const AvgOfChennai=CalAvg(85,44,51);
// const AvgOfKolkata=CalAvg(23,24,21);

// console.log("Average of chennai is " + AvgOfChennai)
// console.log("Average of kolkata is " + AvgOfKolkata)


// const checkWinner=(TeamA,TeamB)=>{
//     if(TeamA>(TeamB*2)){
//         console.log("Team A which is chennai winns ")
//     }
//     else if(TeamB>(TeamA*2)){
//         console.log("Team B which is kolkata wins")
//     }
//     else{
//         console.log("no one wins")
//     }
// }


// checkWinner(AvgOfChennai,AvgOfKolkata)



// Arrays -> first Data structure


// const name="chinku"
// const name1="pinki"
// const name2="tinku"

// const friends=["Pankaj","Aastha","Aman"]

// console.log(friends)

// console.log(friends[2])//random acces using index

// const salaries=[200,250,300]

// console.log(salaries)


// const birthYear= new Array(1990,1995,2001,2005)

// console.log(birthYear)


// Array -> inbuilt



// const chairs=friends.length

// console.log(chairs)

// console.log(friends.length)

// index

// console.log("Total index are",friends.length-1)

// friends[1]="monu"

// //Array jo hai mutable hai
// console.log(friends)

// const salaries=[110,200,300];

// console.log(salaries)

//heterogenous

const friends=["Pankaj","Aastha","Aman"]
const person=["Mahi",7,(2024-1985),true,friends]

console.log(person[4][1])















