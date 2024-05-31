// console.log("story Template")
// console.log("Story Data") //-> time -> 3s
// console.log("Body template")

// console.log("Story template")

// setTimeout(()=>{
//     //async function 
//     console.log("Story data");
// },6000)

// console.log("body template")

// setTimeout(()=>{
//     console.log("body Data")
// },3000)

// console.log("footer template")



// setInterval(()=>{
//     console.log("har har mahadev")
// },2000)



// const sum=function(a,b){
//     console.log("i am a callback function which was passed in the parameters",a+b)
// }

// function calculator(a,b,fn){
//     fn(a,b)
// }


// calculator(10,5,(a,b)=>{
//     console.log(a+b)
// })


// calculator(12,2,sum)



// if else

// let age=30;

// if(age>=18){
//     if(age>=60){
//         console.log("senior citizen!!")
//     }
//     else{
//         console.log("abhi jawani baaki hai!")
//     }
// }
// else{
//     console.log("abhi bache hoo")
// }


// loops


// for(let i=0;i<5;i++){
//     let str = "";
//     for(let j=0;j<5;j++){
//         str=str+j
//     }
//     console.log(i,str)
// }


// function getData(dataId,GetCallBack){
    
//     setTimeout(()=>{
//         console.log(dataId,"data");
//         if(GetCallBack){
//             GetCallBack();
//         }
        
//     },3000)
    
// }

// getData(1)
// getData(2)
// getData(3)
// getData(4)


//callback hell->dom like structure
// console.log("getting data 1 ...........")
// getData(1,()=>{
//     console.log("getting data 2 ...........")
//     getData(2,()=>{
//         console.log("getting data 3 ...........")
//         getData(3,()=>{
//             console.log("getting data 4 ...........")
//             getData(4) 
//         })
//     })
// })



// promises -> object -> success -> reject
// const result=new Promise((resolve,reject)=>{
//     console.log("iphone nhi aa paya");
//     // resolve("success of your delivery")
//     reject("transport issue")

// })

// console.log(result)


// function getData(dataId,GetCallBack){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             console.log(dataId,"data");
//             resolve("successsssss heheheheeh")
//             // reject("network issue alien aa gayee")
//             if(GetCallBack){
//                 GetCallBack();
//             }
            
//         },10000)

//     })
   
    
// }

// const result = getData(1)



// three states of promises fullfil pending reject


// const getOrder = () =>{

//     return new Promise((resolve,reject)=>{
//         console.log(" i am new order ")
//         setTimeout(()=>{
//             resolve("successfull");
//             // reject("Out of stock")
//         },5000)
        
//     })

// }

// const result=getOrder()

// result.then((res)=>{
//     console.log(res)
//     console.log("aa gya bhai iphone dalde story chak de fatte")
// })

// result.catch((err)=>{
//     console.log(err)
//     console.log("bhai paise wapis kar mere !!!!!")
// })

// promise -> Object-> security -> exe? ke nhi hua
// function asyncFunction1(){//security message  -> get request
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             console.log("some data 1 from database.....")
//             resolve("done dna done")
//             // reject("wrong info");
//         },5000)
    

//     })
// }
// function asyncFunction2(){//security message  -> get request
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             console.log("some data 2 from database.....")
//             resolve("balle balle")
//         },5000)
    

//     })
// }

// let R1=asyncFunction1();
// R1.then((res)=>{
//     console.log(res);
//     let R2=asyncFunction2();
//     R2.then((res)=>{
//         console.log(res);
//     })
// })

// R1.catch((err)=>{
//     console.log(err);
// })

// promise chaining
// asyncFunction1().then((res)=>{
//     console.log(res);
//     asyncFunction2().then((res)=>{
//         console.log(res);
//     })
// })



// function getData(dataId){
//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{
//             // console.log(dataId,"data");
//             // resolve("successsssss heheheheeh")
//             reject("network issue")
//         },3000)

//     })
   
    
// }

// promise chaining
// console.log("getting data 1......")
// getData(1).then((res)=>{
//     console.log(res)
//     console.log("getting data 2 ......")
//     getData(2).then((res)=>{
//         console.log(res)
//         console.log("getting data 3 ......")
//         getData(3).then((res)=>{
//             console.log(res)
//         })
//     })
// })




// /callback hell->dom like structure
// console.log("getting data 1 ...........")
// getData(1,()=>{
//     console.log("getting data 2 ...........")
//     getData(2,()=>{
//         console.log("getting data 3 ...........")
//         getData(3,()=>{
//             console.log("getting data 4 ...........")
//             getData(4) 
//         })
//     })
// })


// ===================================================================



// async function instagram(){
    
//     console.log("welcome user")
// }

// const result=instagram();
// console.log(result)

// result.then(()=>{
//     console.log("dekhle reels")
// })


// function apiDelhi(){
//     return new Promise((resolve,reject)=>{
        
//         setTimeout(()=>{
//             // console.log("waether data of delhi is 52 degree")
//             // resolve("aa gya temprature tera")
//             reject("doobara meri marji")
//         },5000)
//     })
// }
// function apiBhopal(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log("waether data of bhopal is 42 degree")
//             reject("meri marji")
//         },5000)
//     })
// }

// async function weatherdata(){
//     const delhi= await apiDelhi()
//     console.log(delhi);
//     const bhopal= await apiBhopal();
//     console.log(bhopal)
// }

// const data=weatherdata();
// console.log(data);
// data.then(()=>{
//     console.log("thank you user for using our app")
// })

// data.catch(()=>{
//     console.log("try after some time")
// })



// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataId)
//             resolve("balle balle")
//         },3000)

//     })
   
// }

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
// }

// getAllData();



// callback hell->dom like structure
// console.log("getting data 1 ...........")
// getData(1,()=>{
//     console.log("getting data 2 ...........")
//     getData(2,()=>{
//         console.log("getting data 3 ...........")
//         getData(3,()=>{
//             console.log("getting data 4 ...........")
//             getData(4) 
//         })
//     })
// })

// promise chaining
// console.log("getting data 1......")
// getData(1).then((res)=>{
//     console.log(res)
//     console.log("getting data 2 ......")
//     getData(2).then((res)=>{
//         console.log(res)
//         console.log("getting data 3 ......")
//         getData(3).then((res)=>{
//             console.log(res)
//         })
//     })
// })

























