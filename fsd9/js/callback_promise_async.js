// async vs sync

// console.log("1");
// setTimeout(()=>{
//     console.log("2")
// },3000) //time of 3s
// console.log("3");


// setTimeout  vs setInterval


// setTimeout(()=>{
//     console.log("heloo");
// },3000)



// insta

// console.log("template of story")
// setTimeout(()=>{
//     console.log("data of story")
// },7000)
// console.log("template of body")
// setTimeout(()=>{
//     console.log("data of body")
// },5000)
// console.log("template of footer")


// setInterval(()=>{
//     console.log("jai shree ram")
// },3000);

// const food=document.getElementById("food")

// console.log("burger")
// setInterval(()=>{
//     const demand=document.createElement("li");
//     demand.innerText="Bhookh lgi hai"
//     food.appendChild(demand);
// },0)
// console.log("noodles")
// console.log("extra cheese")


//callbacks


// function sum (a,b){
//     console.log(a+b)
// }

// function calculator(a,b,fn,fn2){
//     fn2(a,b)
// }

// calculator(10,30,(a,b)=>{
//     console.log(a+b)
// },(c,d)=>{
//     console.log(c+d)
// });

//callbacks with example

// function getData(dataId,getNextData){

//     setTimeout(()=>{
//         console.log("data for " , dataId);
//         if(getNextData){
//             getNextData();
//         }
        
//     },3000)
    
    
// }


// getData(1,getData(2))

//callback hell syntax x
// console.log("getting data1.....")
// getData(1,()=>{
//     console.log("getting data2.....")
//     getData(2,()=>{
//         console.log("getting data3.....")
//         getData(3,()=>{
//             console.log("getting data4.....")
//             getData(4)
//         })
//     });
// })  


// promises
// const result=new Promise((res,rej)=>{
//     console.log("hello i am a promise");
//     // rej("network issue")
//     res("success")
// ;})
// console.log(result);


// function getData(dataId,getNextData){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             rej("network issue")
//             console.log("data for " , dataId);
//             if(getNextData){
//                 getNextData();
//             }
            
//         },10000)
//     })
   
// }

// let result=getData(1);

// const serverReq= () => {
//     return new Promise((res,rej)=>{
//         console.log("i am a new request on server")
//         res("data sent")
//         // rej("please check your connection")
//     })
// }

// let promise=serverReq();
// promise.then(()=>{
//     console.log("rendering data on front-end")
// })
// promise.catch(()=>{
//     console.log("data cant be abstracted")
// })


// promise chaining  security and scalability => max  syntax X
// function getData(dataId){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             // rej("network issue")
//             res("success")
//             console.log("data for " , dataId);
            
//         },2000)
//     }) 
// }
// console.log("getting data 1....")
// getData(1).then((res)=>{
//     console.log(res)
//     console.log("getting data 2....")
//     getData(2).then((res)=>{
//         console.log(res)
//         console.log("getting data 3....")
//         getData(3).then((res)=>{
//             console.log(res)
//             console.log("getting data 4....")
//             getData(4).then((res)=>{
//                 console.log(res)
//             })

//         })
//     })
// })
// .catch((rej)=>{
//     console.log(rej)
// })


// //callback hell syntax x
// console.log("getting data1.....")
// getData(1,()=>{
//     console.log("getting data2.....")
//     getData(2,()=>{
//         console.log("getting data3.....")
//         getData(3,()=>{
//             console.log("getting data4.....")
//             getData(4)
//         })
//     });
// }) 



// async await ...
// console.log("1")

// async function hello(){
//     console.log("hello mitron!!!!!!!")
// }

// let result=hello();
// console.log(result)


// console.log("2")




async function apiDelhi(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("requested on delhi server")
            // res("balle balle");
            rej("network issue")
        },7000)
    })
}

async function apiPune(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("weather data of Pune")
            res("balle balle");
        },7000)
    })
}

async function GetWeatherData(){
    const delhi=await apiDelhi();
    console.log(delhi)
    const pune=await apiPune();
    console.log(pune)
}

console.log("hello");

GetWeatherData();










