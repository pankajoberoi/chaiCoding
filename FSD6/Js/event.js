// let btn1=document.querySelector("#btn1");

// btn1.onclick = ()=>{
//     console.log("btn1 clicked");
//     let salary=10000;
//     salary=salary+1000
//     console.log(salary);
// }

// let box=document.querySelector(".dba1")

// box.onmouseover=()=>{
//     console.log("parking not aloud")
// }

// btn1= onclick =(e)=>{
//     console.log(e)
//     console.log(e.type);
//     console.log(e.target);
//     // same for mouseOver

// }

// btn1.addEventListener("click",(e)=>{
//     console.log("button1 was clicked")
//     console.log(e)//optional
// });
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked returns")
// });

// const handler3=()=>{
//     console.log("button1 was clicked returns 2")
// }
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked returns 4")
// });


// btn1.removeEventListener("click",handler3)

let modebtn=document.querySelector("#mode");
let currMode="light";

modebtn.addEventListener("click",()=>{
    if(currMode==='light'){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black"
    }else{
        currMode="light"
        document.querySelector("body").style.backgroundColor="white"
    }
    console.log(currMode)
})