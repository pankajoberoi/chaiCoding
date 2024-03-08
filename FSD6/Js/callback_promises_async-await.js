// function hello(){
//     console.log("hello")
// }
// // setTimeout(hello,2000)//timeout

//async programming example you order something and continue your other work
// console.log("one")
// console.log("two")
// setTimeout(()=>{
//     console.log("hiiiii");
// },3000)
// console.log("three")
// console.log("four")

// setInterval(()=>{
//     console.log("hehehe")
// },2000)
//============================================================================================================
//call backs
// function sum(a,b){
//     console.log(a+b);
// }

// function calculator(a,b,sumcallback){
//     sumcallback(a,b)
// }

// calculator(1,4,sum)
// // or
// calculator(1,3,()=>{
//     console.log(a+b)
// })

//callback Hell
//nesting example

// if else
// let age=19;
// if(age>=18){
//     if(age>=60){
//         console.log("senior")
//     }else{
//         console.log("middle")
//     }
// }else{
//     console.log("child")
// }

// loops
// for(let i=0;i<5;i++){
//     let str = "";
//     for(let j=0;j<5;j++){
//         str=str+j
//     }
//     console.log(i,str);
//
//callback hell
// function getData(dataId){
//     setTimeout(()=>{
//         console.log("data",dataId)
//     },3000)
// }

// //data1
// //data2
// //data3//get everydata after 2s
// getData(1);
// getData(2);
// getData(3);//sab ek sath aa gya?

// lets assume example of username and pass to log in -> ek cheej check hoggi fir doosri

// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId)
//         if(getNextData){
//             getNextData();
//         }
//     },3000)
// }

// getData(1,()=>{
//     console.log("getting data 2")
//     getData(2,()=>{
//         console.log("getting data 3")
//         getData(3,()=>{
//             console.log("getting data 4")
//             getData(4)
//         })
//     })
// })
//=============================================================================================================
//Promises
//order kiya amazon see ->promise kiya ke deliver kardunga

// let promise = new Promise((resolve, reject) => {
//   console.log("i am a promise");
//   // resolve("success")
//   reject("some error occured");
// });
// three state of promises pending fullfil rejected
// we dont create a promise i get returns when we call a api

// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success")
//       if (getNextData) {
//         getNextData();
//       }
//     }, 3000);
//   });
// }
// let result = getData(123);
// result();

//promise fullfiled .then?
// else .catch
// const getPromise=()=>{
//     return new Promise((resolve, reject) => {
//           console.log("i am a promise");
//         //   resolve("success")
//         reject("network error")

//     })
// }

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res)
// })

// promise.catch((err)=>{
//     console.log("rejected",err)
// })

// promise chaining

// function asyncFunc() {
//   return new Promise((resolve, rejet) => {
//     setTimeout(() => {
//       console.log("some data 1");
//       resolve("success");
//     }, 2000);
//   });
// }

// function asyncFunc2() {
//   return new Promise((resolve, rejet) => {
//     setTimeout(() => {
//       console.log("some data 1");
//       resolve("success");
//     }, 3000);
//   });
// }

// console.log("fetching data 1");
// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log(res);
// });

// console.log("fetching data 2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//   console.log(res);
// });//every thing will work parallaly

// console.log("fetching data 1");
// let p1 = asyncFunc();
// p1.then((res) => {
//   console.log("fetching data 2");
//   let p2 = asyncFunc2();
//   p2.then((res) => {
//   });
// });

// another syntax

// chaining
// console.log("fetching data 1");
// asyncFunc().then((res) => {
//   console.log("fetching data 2");
//   asyncFunc2();then((res) => {
//   });
// });


// lets get back to getdata function of callback hell and solve it wit promises

function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId)
            resolve("balle")
        },3000)
    })   
}

// promise chain for this
// getData(1).then((res)=>{
//     console.log(res)
//     getData(2).then((res)=>{
//         console.log(res)
//         getData(3).then((res)=>{
//             console.log(res)
//         })
//     })
// })

// simple syntax

getData(1).then((res)=>{
    return getData(2);
})
.then((res)=>{
    return getData(3);
})
.then((res)=>{
    console.log(res)
})