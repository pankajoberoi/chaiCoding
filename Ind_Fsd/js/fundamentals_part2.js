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

// function calAge1(birthYear){
//     return 2024-birthYear;
// }

// const age1=calAge1(2000);
// console.log(age1)

// function expression->it will return a value

// const calAge2=function (birthYear){
//     return 2024-birthYear
// }

// const age2=calAge2(1990);
// console.log(age2);

// // console.log(calAge2(2001))

// console.log(`Your age is ${age2}`)




// Arrow functions -> form of function expression

// const calAge2=function (birthYear){
//     return 2024-birthYear
// }

// const age2=calAge2(1990);
// console.log(age2);


// ===========================================
// const calAge3= birthYear => 2024-birthYear;//one liner function

// const age3=calAge3(1995);
// console.log(age3);



// const Retirement= (birthYear,name) =>{
//     console.log("hello " + name );
//     const age=2024-birthYear;
//     const retirement=65-age
//     return retirement;
// }

// console.log("Your pending years to retire are " + Retirement(1992,"Raju"))


//Hoisting  ======================
// console.log(x);
// var x=10;

// console.log(z)
// const z=7;


// console.log(y)
// let y=5;

// const output=normal();
// console.log(output)

// function normal(){
//     return "namaste......"
// }

// var output2=expression()
// console.log(output2)

// var expression=function(){
//     return "mitron....."
// }

// const cutPieces=(fruit)=>{
//     return fruit*4;
// }


// function fruitProcessor(apples,oranges,Name){
//         console.log("fruit juice for " + Name)
//         const applePieces=cutPieces(apples)
//         const orangePieces=cutPieces(oranges)
//         const juice=`Juice with ${applePieces} apples and ${orangePieces} oranges `;
//         return juice;
// }

// const name=(x)=>{
//     return x
// }

// const x=prompt("enter your name")

// const output=fruitProcessor(3,5,name(x))
// console.log(output)
    

// const calAvg=(a,b,c)=>{
//     return (a+b+c)/3;
// }

// const AvgCsk=calAvg(144,223,121);
// console.log(`Avg of csk is ${AvgCsk}`)
// const AvgKkr=calAvg(65,54,89);
// console.log(`Avg of kkr is ${AvgKkr}`)

// checkWinner(AvgCsk,AvgKkr);

// function checkWinner(TeamA,TeamB){
//     if(TeamA >= 2*TeamB){
//         console.log("Team A is winner -> csk")
//     }
//     else if (TeamB >= 2*TeamA ){
//         console.log("Team B is winner -> kkr")
//     }
//     else{
//         console.log("no one wins")
//     }

    

// }


// Arrays


// const friend1="Raju"
// const friend2="sehwag"
// const friend3="Arohi"

// const friends=["raju","sehwag","arohi"];
// console.log(friends)

// const birthYear=new Array(1990,1995,2000,2001)

// console.log(birthYear)



// console.log(friends[1])

// console.log(friends.length);

// console.log(friends[friends.length-1])


// friends[2]="Pankaj"
// console.log(friends)

// friends=[]
// console.log(friends)

// const person=["Raju",22,"bhopal",(65-22),true,friends]
// console.log(person)




// const hello=()=>
// {
//     return "namaste"
// }

// const mitron=()=>{
//     return "mitron"
// }

// const greeeting=[hello,mitron]

// console.log(greeeting[0]())





// function calAge(birthYear){
//     return 2024-birthYear;
// }

// const birthYear=[1990,2001,2005]

// const age1=calAge(birthYear[0])
// const age2=calAge(birthYear[1])
// const age3=calAge(birthYear[2])




// const ages=[age1,age2,age3]
// console.log(ages)


// const friends=['prince','raju','boondi','kumar']

// // console.log(friends)


// const length=friends.push('Pankaj')
// console.log(friends)
// console.log(length)

// friends.unshift('sonu');
// console.log(friends)


// const deleted=friends.pop();
// console.log(friends)
// console.log(deleted);


// const deletedTop=friends.shift();
// console.log(friends);
// console.log(deletedTop);


// console.log(friends.indexOf('boondi')) 


// console.log(friends.includes('raju'))



// const calTip=function (bill){
//     return bill>=50 && bill<=300 ? bill*0.15 : bill*0.20; 
// }

// const bills=[125,555,44];
// console.log(bills);

// const tip=[calTip(bills[0]),calTip(bills[1]),calTip(bills[2])]

// console.log(tip)


// const total=[bills[0] + tip[0],
//             bills[1] + tip[1],
//             bills[2] + tip[2]]


// console.log(total);


//map

// const salaries=[200,250,450,300]

// // const output=salaries.map((item)=>item*2)
// const output=salaries.map(double)

// function double(x){
//     return x+50;
// }

// console.log(output);


//filter
// const arr=[5,1,6,8,2];

// // const output=arr.filter(isOdd)
// const output=arr.filter((item)=>{return item%2===0})

// function isOdd(x){
//     return x%2 !== 0;
// }

// console.log(output);


//reduce

// let arr=[1,2,3,4,5]
// let sum=0;
// function findSum(arr){
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     return sum;
// }

// console.log(findSum(arr))



// const finalSum=arr.reduce((acc,curr)=>{
//     acc=acc+curr;
//     return acc;
// },0)

// console.log(finalSum)

// const arr=[11,88,2,19]
// let max=0
// function maximum(arr){  
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//     }
//    return max;
// }

// console.log(maximum(arr))



// const output=arr.reduce((max,curr)=>{
//     if(curr>max){
//         max=curr;
//     }
//     return max
// },0)

// console.log(output);


//objects

// const person={
//     firstName:"Pankaj",
//     lastName:"oberoi",
//     age:(2024-2001),
//     jobStatus:false,
//     experience:1,
//     salary:20000,
//     friends:['Raju','bholu','boondi']
// }

// console.log(person)

// dot vs bracket

// console.log(person.firstName)
// console.log(person.age)
// console.log(person.friends[0])

// console.log(person["lastName"])

// const nameKey='Name'

// console.log(person['first'+nameKey])
// console.log(person['last'+nameKey])

// console.log(person.first+nameKey)



// const info=prompt("which info do u want ")
// // return => expression


// console.log(person[info])


// if(person[info]>=2){
//     person.salary=person.salary+5000
//     console.log(person.salary)
// }
// else{
//     person.salary+=1000;
//     console.log(person.salary)
// }



// person.location="Bhopal";
// person["Insta"]="anglePriya"

// console.log(person)


//Loooooooooooops
// for loop
// let sum=0
// for(var i=1;i<=10;i++){
//     sum=i*(i+1)/2
// }
// console.log(sum);


// while loop

// var open=prompt("kya nya coustomer ayya");
// let kamai=0;
// let customer=0
// while(open==='yes'){
//     kamai+=50;
//     open=prompt("kya nya coustomer ayya");
//     customer++;
// }
// console.log("mere pure din ki kamai " + kamai + " and my total customers were " + customer)

// do{
//     kamai+=50;
//     open=prompt("kya nya coustomer ayya");
//     customer++;
// }while(open==='yes');

// console.log("mere pure din ki kamai " + kamai + " and my total customers were " + customer)


// for of vs for in

// for of
// let str="JavaScript"
// let lenght=0
// for(let item of str){
//     console.log("item = " + item);
//     lenght++;
// }
// console.log("length of your string is " + lenght)

// for in

let student={
    name:"Rahul",
    age:20,
    cgpa:7.8,
    isPass:true,
}

for(let key in student){
    console.log(student[key])
}

