//sync
// function sample1(){
//     console.log("hello")
// }


// function sample3(){
//     setTimeout(()=>{
//         console.log("capgemini"); // 3s
//     },3000)
    
// }

// function sample2(){
// console.log("welcome")

// }

// sample1();
// sample2();
// sample3();


// Async
let result= new Promise((resolve,reject)=>{
    // backend
    setTimeout(()=>{
        console.log("i have ordered an iphone");
        // resolve("success");
        reject("netwrok issue")
    },5000)

        

})

result.catch(()=>{
    console.log("requested refund");
})


















