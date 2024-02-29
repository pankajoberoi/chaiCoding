"use strict";
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

// function fruitProcessor(apples,oranges){
//     console.log(apples+" apples " + oranges + " oranges")
//     const juice=`Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// let glass=fruitProcessor(2,4);
// console.log(glass);

// const appleJuice=fruitProcessor(2,0);
// console.log(appleJuice);

// fruitProcessor(0,5)
// console.log(fruitProcessor(0,5));

// const mixJuice=fruitProcessor(2,6);
// console.log(mixJuice);

// function declaration vs expression

// const age1=calAge1(2001);
// console.log(age1);
// function calAge1(birthYear){
//     return 2024-birthYear;
// }

// const age=calAge1(2000)
// console.log(age);

// const age2=calAge2(2000);
// console.log(age2);

// const calAge2=function(birthYear=2001){
//     return 2024-birthYear;
// }

// const age2=calAge2();
// console.log(age2);

// const calAge3= birthYear => 2024-birthYear;

// console.log(calAge3(2000));
// console.log(birthYear);

// const retirement = (birthyear,firstName) =>{
//     const age=2024-birthyear;
//     const retirement=62-age;
//     return `${firstName} retires in ${retirement} years`;
// }

// alert(retirement(2000,"Aditi"));

// const cutPieces=function(fruit){
//     return fruit*4;
// }

// function fruitProcessor(apples,oranges){
//     const applePieces=cutPieces(apples);
//     const orangePieces=cutPieces(oranges);
//     const juice=`Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// let glass=fruitProcessor(2,4);
// console.log(glass);

// const calAvg= (a,b,c)=>(a+b+c)/3;
// // console.log(calAvg);
// const csk=calAvg(144,164,85);
// const Mi=calAvg(65,54,49);

// const checkWinner=function(team1,team2){
//     if(team1 > team2 * 2){
//         console.log(`team1 ${team1} is the winner`);
//     }
//     else if(team2 > team1 *2){
//         console.log(`team2 ${team2} is the winner`);
//     }
//     else{
//         console.log("Draw!!!!!!")
//     }
// }

// checkWinner(Mi,csk);

// const friend1="Pankaj";
// const friend2="ANu";
// const friend3="john";

// const friends=['Pankaj','ANu','john'];
// console.log(friends);

// console.log(friends[1]);

// console.log(friends.length);

// console.log(friends.length-1);

// friends[2]='Jay';
// console.log(friends);

// // friends=['shivang','udit','rahul'];

// const person=["Pankaj",23,50.25,'$',(2024-2001),false,friends];
// console.log(person);

// const calAge=function(birthYear){
//     return 2024-birthYear;
// }

// const years=[2001,1990,1995];
// const currentAge=[];

// currentAge.push(calAge(years[0]))
// currentAge.push(calAge(years[1]))
// currentAge.push(calAge(years[2]))

// console.log(currentAge)

// const friends=['pankaj','Ayan','vinayat',years];
// // console.log(friends.length);
// friends.push('priyanka');
// const newlength=friends.push();
// console.log(newlength);
// console.log(friends);

// friends.unshift("udit");
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Ayan'));
// friends.push("24");

// console.log(friends);

// console.log(friends.includes(24));

// const person = {
//   firstName: "Pankaj",
//   lastName: "oberoi",
//   age: 2024 - 2001,
//   job: "Trainer",
//   salary: 15000,
//   friend: ["harsh", "udit", "Diksha"],
// };

// const arr=[person,person,person]

// console.log(arr);
// console.log(person);

//dot vs bracket

// console.log(person.firstName);
// console.log(person.age);
// console.log(person.friend[1]);

// console.log(person['lastName']);

// console.log(person['friend']);

// const nameKey='Name';
// console.log(person['first' + nameKey]);

// const interedIn=prompt(" I have firstName , lastName , age , job  and salary  tell me what u want ");

// if(person[interedIn]){
//     console.log(person[interedIn])
// }
// else{
//     console.log("invalid request!!");
// }

// person.location="Chandighar"

// person['insta']="123@gmail.com"

// if (person[key]) {
//   console.log(person.salary);
// } else {
//   console.log("not valid");
// }

// if(person[key]==salary && person.salary>=10000 && person.salary<=20000){
//     const bonus=person.salary*0.10;
//     const finalSalary=person.salary+bonus;
//     console.log(finalSalary)
// }
// else if(person[key]==salary && person.salary>=20000 && person.salary<=35000){
//     const bonus=person.salary*0.20;
//     const finalSalary=person.salary+bonus;
//     console.log(finalSalary)
// }

// const key = prompt("type Salary if you want bonus");
// // console.log(person[key]);

// if(person[key]==person['salary']){
//     if( person.salary>=10000 && person.salary<=20000){
//             const bonus=person.salary*0.10;
//             const finalSalary=person.salary+bonus;
//             console.log(finalSalary)
//         }
//         else if( person.salary>=20000 && person.salary<=35000){
//             const bonus=person.salary*0.20;
//             const finalSalary=person.salary+bonus;
//             console.log(finalSalary)
//         }
// }
// else{
//     console.log("not valid")
// }

// let number=321;
// let reverse=0
// while(number!=0){
//     let rem=number%10;
//     reverse=reverse*10+rem;
//     number=parseInt(number/10)
// }
// console.log(reverse);

// let input;
// let arr = [];

// do {
//   arr.push(Number(prompt("ENter your money")));
//   console.log(arr);
//   input = prompt("Do want to Enter Another entry yes Or no");
//   console.log(input);
// } while (input != "no");

// let sum=0
// for(let i=0; i<arr.length; i++ ){
//     sum=sum+arr[i]
// }
// console.log(sum)

//for-of

// let strVar="priyanka"
// let arr=[100,"pankaj",2024-2001]
// let arr1=[20000,10000,3000]
// console.log(strVar)

// for(let key of strVar){
//     console.log(key)
// }

// for(let key of arr1){
//     console.log(key+1000)
// }

// let sum=0;
// for(let key of arr1){
//     sum=sum+key;
// }
// console.log(sum);

// for-in  obejcts

// let student = {
//   name: "Mogamboo",
//   age: 20,
//   cgpa: 5.2,
//   college:"oriental",
//   is_pass: true,
//   date:"28-02-2024"
// };

// function PrintOnlyString(student){
//     for(let val in student){
//         if(typeof student[val] === 'string'){
//             console.log(`${val} : ${student[val]}`)
//         }
//     }
// }

// PrintOnlyString(student);

let gameNum = prompt("Give Your Friend a Number to guess");
let userNum = prompt("guess the correct number");
let count=0;

while (userNum != gameNum) {

    if(userNum>gameNum){
        userNum = prompt("Number is greater then actuall, guess it again");
    }
    else if(userNum<gameNum){
        userNum = prompt("Number is smaller then actuall, guess it again");
    }
    else if(userNum==gameNum){
        alert("coonngooooo!!!!");
        break;
    }

    count++;
  
}
console.log("Total Number of attempts!!")


