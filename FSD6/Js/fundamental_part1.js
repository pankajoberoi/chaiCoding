// console.log("Welcome to fsd6");

// console.log("Hello world");

// let firstName="Pankaj";

// if(firstName==="Pankaj"){
//     alert("Welcome");
// }


// let name1="Pankaj";
// console.log(name1);

// let age=21;
// console.log(age);

// let $firstName="Shivani";

// let last_Name="Arya";

// console.log($firstName);
// console.log(last_Name);

// let PI=3.14

// let job1="developer"
// let job2="teacher"

// let profile_of_first_job="developer";
// let profile_of_second_job="teacher";


// Data types
// number -> decimal int
//string
//bool

// let college='o';

// let college2="oriental";

//undefined
//null

// let age;
// console.log(age);

// let subject= "English";

// let subject1=1;

// console.log(subject);

// let i_love_Js=false;

// let javaScriptIsFun;
// console.log(i_love_Js)

// console.log(typeof true);
// console.log(typeof i_love_Js);
// console.log(typeof 23.34)
// console.log(typeof "udit");
// console.log(typeof 'T');
// javaScriptIsFun='Yes!'
// console.log( typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof undefined);

// year="10";
// console.log(year);

// var let const


// const birthYear=2000;
// let currentYear=2024;
// let age=currentYear-birthYear;

// console.log(age);

// var batch="fsd6";
// console.log(batch);

// var batch="fsd10";
// console.log(batch);

// basic operator



// let age=2024-2000;
// console.log(age);

// let experience=2;
//  age=24+experience;
//  console.log(age);

// console.log(age*2,age/2);
// console.log(age);

// console.log(10 ** 3);


// const firstName="Pankaj";
// const lastName="Oberoi";

// console.log(firstName+' '+ lastName);

// const exp=2;
// const age=18;

// console.log(exp+age);

// let score=50;
// +=,-=,*=,/=

// 10+=age;

// console.log(score+=10);
// console.log(score*=10);
// console.log(score/=10);
// console.log(score-=10);

// let age=50;
// age++;
// console.log(age);

// console.log(age++);

// let score=20;
// //increment -> use
// console.log(++score);

// let score1=40;
// //use -> incremnet
// console.log(score1++);
// console.log(score1);


// const ajay=20;
// const anu=30;
// console.log(ajay<anu);

// task comparison ke sath how maths work


// let currentYear=2024;

// console.log(currentYear+=10 < (currentYear+=25));

// const markHeight=1.67;
// const markWeight=78;

// const JohnHeight=1.88;
// const johnWeight=95;


// const markBmi=markWeight/ (markHeight ** 2);

// const johnBmi=johnWeight/  (JohnHeight ** 2);

// console.log("Marks weight " + markWeight + " and is " + markHeight + "tall");

// console.log("john weight " + johnWeight + " and is " + JohnHeight + " tall");


// console.log("BMI of Mark is " + markBmi + " and BMI of John is  " + johnBmi);

// const markHigherBmi= markBmi>johnBmi;

// console.log(markHigherBmi);


// strings with templates


// const naam="vidhayak";
// const job="software developer";
// const birthYear=2003;
// const year=2024;

// const information="I am " + naam + " a "
//  + job + " with age of " + (year - birthYear) + " ears old ";

// console.log(information);

// const newInfo=`I am ${naam} a 
// ${job} with age of ${(year-birthYear)} years old ${2+2}`;

// console.log(newInfo);


// conditional statements 

// const age=15;

// if( age >= 18){
//     console.log("Hey there your are eligible for license")
// }
// else{
//     const yearLeft=`wait for next ${18-age} years`;
//     console.log(yearLeft);
    
// }

// const calAge=function(birthYear)
// {
//     const age=[];
//     for(var i of birthYear){
//         age.push(2024-i);
//     }
//     return age;
    
// }

// const birthYear=[1990,2001,1991];

// // console.log(calAge(birthYear)); 
// const age=calAge(birthYear);

// console.log(age);


// type conversion manually

// console.log("hello is am " + 23 + " years old ");

// console.log(22+23);


// const inputYear='1990';
// console.log(inputYear + 18);



// console.log(Number(inputYear)+18);

// console.log(typeof NaN);



// console.log('I have ' + 2 + ' years of experience' )

// console.log('23' + '10' + 3 );

// console.log('hello'*'world');

// let n = '1' + 1;
// console.log(n);
// n=n-1;
// console.log(n);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// console.log(Boolean("Pankaj"));
// console.log(Boolean([]))


// let money=0;

// if(money){
//     console.log("you can shop")
// }
// else{
//     console.log("udhaar mangle");
// }

// == vs ===
// const age='18';

// if(age==18){
//     console.log("your an an adult")
// }

// let age=Number(prompt("Enter your age"));
// console.log(age);

// if(age===18){
//     console.log("beyaah hua hai tumhara");
// }
// else if(age===23){
//     console.log("Beyaah nhi hogga tumhara")
// }
// else{
//     console.log("udit ho kya ")
// }

// Boolean operators And Or Not


// const hasDriverLicense=true;
// const hasGoodVision=true;

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if(hasDriverLicense && hasGoodVision){
//     console.log("you can drive");
// }
// else if(hasDriverLicense || hasGoodVision){
//     console.log("cycle dedi")
// }
// else{
//     console.log("paidal hi chal");
// }

// let day=prompt("day?");

// switch(day){
//     case'monday':
//         console.log("chest & triceps");
//         break;
//     case'tuesday':
//         console.log("back & biceps");
//         break;
//     case'wednesday':
//     case'thursday':
//         console.log("rest");
//         break;
//     case'friday':
//         console.log("mix");
//         break;
//     case'saturday':
//         console.log("legs");
//         break;
//     default:
//         console.log("ajj chutti hai");
    
// }

// expressions vs statements


// let birthYear=2000;
// let age=2024-birthYear;

// if(age>=18){
//     console.log("you are an adult");
//     console.log("you can drive as well")
// }

// console.log(`my age is ${age}`);

// const age=20;

// age>=18   ? true  : false   ;

// const drink = age>=18 ? 'Wine' : 'water';

// console.log(drink);


// console.log(`I like to drink ${age>=18 ? 'Wine' : 'water'}`)
