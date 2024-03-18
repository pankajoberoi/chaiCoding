// console.log("one")
// console.log("two")//3s wait
// console.log("three")

// setTimeout(()=>{
//     // async
//     console.log("hello buddy 1")
// },3000)

// console.log("stories")

// setTimeout(()=>{
//     // async
//     console.log("hello buddy 2")
// },6000)

// console.log("body")

// setTimeout(()=>{
//     // async
//     console.log("hello buddy 3")
// },3000)

// setInterval(()=>{
//     console.log("har har mahadev")
// },1000)

// callback

// function sum(a,b){
//     console.log(a+b)
// }

// function calculator(a, b, callback) {
//   callback(a,b);
// }

// let handle= (a,b) => {
//     console.log(a + b);
// }
// calculator(1, 7,handle);

// calculator(1,7,sum)

// if else
// let age=65;
// if(age>=19){
//   if(age>=60){
//     console.log("senior citizen")
//   }
//   else{
//     console.log("abhi jawani baaki hai")
//   }
// }else{
//   console.log("child")
// }

// for(let i=0;i<5;i++){
//   let str = "";
//   for(let j=0;j<5;j++){
//     str=str+j;
//   }
//   console.log(i,str)
// }

// function getData(dataId,getNextData) {
//   setTimeout(() => {
//     console.log("data ", dataId);
//     getNextData()
//   },3000);
// }

// getData(1,()=>{
//   console.log("getting data 2.....")
//   getData(2,()=>{
//     console.log("getting data 3.....")
//     getData(3,()=>{
//       console.log("getting data 4.....")
//       getData(4)
//     })
//   })
// });

//promise -> object
// const result=new Promise((resolve, reject) => {
//   console.log("i am a promise");
//   reject("sorry")
// });

// three states of promises are rejected fulfilled and pending

// function getData(dataId, getNextdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextdata) {
//         getNextdata();
//       }
//     }, 10000);
//   });
// }

// let result = getData(2);

// promise fullfill?
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am a new request");
//     resolve("product delivered");
//     // reject("baaad aa gyi")
//   });
// };

// let promise = getPromise();
// promise.then((res) => {
//   console.log("selfie post karenge ab", res);
// });

// promise.catch((err) => {
//   console.log("refund karo ", err);
// });

// promise chaining
// function asyncfunction1(){
//   return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//       console.log("some data 1")
//       resolve("balle balle")
//     },3000)
//   })
// }

// function asyncfunction2(){
//   return new Promise((resolve,rejet)=>{
//     setTimeout(()=>{
//       console.log("some data 2")
//       resolve("success");
//     },3000)
//   })
// }

// let p1=asyncfunction1();
// p1.then((res)=>{
//   console.log(res);
// })

// let p2=asyncfunction2();
// p2.then((res)=>{
//   console.log(res);
// })//everthing works in parallel

// console.log("fetching data 1");
// let p1=asyncfunction1();
// p1.then((res)=>{
//     console.log("fetching data 2");
//     let p2=asyncfunction2();
//     p2.then((res)=>{

//     })
// })
// p1.catch((err)=>{
//   console.log(err)
// })

// small syntax
// console.log("fetching data 1");
// asyncfunction1().then((res)=>{
//   console.log(res)
//   console.log("fetching data 2");
//   asyncfunction2().then((res)=>{

//   })
// })

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       reject("Network issueee.....");
//     }, 3000);
//   });
// }

// console.log("getting data 1...")
// getData(1).then((res)=>{
//   console.log("getting data 2...")
//   getData(2).then((res)=>{
//     console.log("getting data 3...")
//     getData(3).then(()=>{
//       console.log("getting data 4...")
//       getData(4)
//     })
//   })
// })
// .catch((err)=>{
//   console.log(err)
// })

// getData(1,()=>{
//   console.log("getting data 2.....")
//   getData(2,()=>{
//     console.log("getting data 3.....")
//     getData(3,()=>{
//       console.log("getting data 4.....")
//       getData(4)
//     })
//   })
// });

// =================================================

// async function hello(){
//   console.log("namaste!!!")
// }
// hello();
// async function apiDelhi() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("waether data of delhi");
//       resolve("balle balle");
//     }, 2000);
//   });
// }
// async function apiPune() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("waether data pune");
//       resolve("balle balle");
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   const delhi = await apiDelhi();
//   console.log(delhi);
//   const pune = await apiPune();
//   console.log(pune);
// }

// getWeatherData();

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("balle balle")
//     }, 3000);
//   });
// }

// async function getAlldata(){
//   await getData(1)
//   console.log("getting data 2")
//   await getData(2)
//   await getData(3)
//   await getData(4)
// }
// console.log("getting data 1...")
// getData(1).then((res)=>{
//   console.log("getting data 2...")
//   getData(2).then((res)=>{
//     console.log("getting data 3...")
//     getData(3).then(()=>{
//       console.log("getting data 4...")
//       getData(4)
//     })
//   })
// })
// .catch((err)=>{
//   console.log(err)
// })

// getData(1,()=>{
//   console.log("getting data 2.....")
//   getData(2,()=>{
//     console.log("getting data 3.....")
//     getData(3,()=>{
//       console.log("getting data 4.....")
//       getData(4)
//     })
//   })
// });
