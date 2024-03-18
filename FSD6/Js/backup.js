// console.log("stories")
// console.log("API") //time 3
// console.log("body")

// setTimeout(()=>{
//     console.log("heeloo")
// },3000)

// console.log("stories template")

// setTimeout(()=>{
//     console.log("API 2 called");
// },3000)

// console.log("body template")

// setTimeout(()=>{
//     console.log("API 3 called");
// },3000)

async function apiDelhi(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("waether data of delhi")
        resolve("balle balle")
      },2000)
    })
  }



  
