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
//             // resolve("successsssss heheheheeh")
//             reject("network issue alien aa gayee")
//             if(GetCallBack){
//                 GetCallBack();
//             }
            
//         },10000)

//     })
   
    
// }

// const result = getData(1)



// three states of promises fullfil pending reject


const getOrder = () =>{

    return new Promise((resolve,reject)=>{
        console.log(" i am new order ")
        setTimeout(()=>{
            resolve("success");
            // reject("Out of stock")
        },5000)
        
    })

}

const result=getOrder()

result.then((res)=>{
    console.log(res)
    console.log("aa gya bhai iphone dalde story chak de fatte")
})

result.catch((err)=>{
    console.log(err)
    console.log("bhai paise wapis kar mere !!!!!")
})


















