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

function getData(dataId,getNextData){

    setTimeout(()=>{
        console.log("data for " , dataId);
        if(getNextData){
            getNextData();
        }
        
    },3000)
    
    
}


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





