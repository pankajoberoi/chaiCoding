// let button = document.querySelector("#btn1");

// button.onclick = () => {
//   console.log("bonus button is clicked");
//   let salary = 10000;
//   salary = salary + 1000;
//   alert("my final salary after bonus is" + salary);
// };

// let passBox = document.querySelector("#dabba1");

// passBox.onmouseover = () => {
//   let pass = prompt("enter the valid key to access password ki file");
//   if (pass == "ram") {
//     alert("you can access this file!");
//   }
// };

// button.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type)
//     console.log(evt.target)
// };


// button.addEventListener("click",()=>{
//     console.log("button is clicked")//fn1
// })
// const handler=()=>{
//     alert("thanks for visiting")//fn2
// }
// button.addEventListener("click",handler)
// button.addEventListener("click",()=>{
//     console.log("function3 is also added")//fn3
// })


// button.removeEventListener("click",handler)
//calback reference should be same

// button.addEventListener("click",()=>{
//     console.log("helloooo fn 1");
// })

// button.addEventListener("dblclick",()=>{
//     alert("hiiiiiii!!!!!!")
// })



let modeBtn=document.querySelector("#mode")
let currMode="light"
let body=document.querySelector("body")
modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode="dark"
        console.log(currMode)
        // document.querySelector("body").style.backgroundColor="black"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        currMode="light"
        console.log(currMode)
        // document.querySelector("body").style.backgroundColor="white"
        body.classList.add("light")
        body.classList.remove("dark")
    }
})
    
