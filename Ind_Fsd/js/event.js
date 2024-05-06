

// let salary=Number(prompt("majdoor brother salary btao!"))


// if(salary){
//     const screen=document.getElementById("screen");
//     const ShowSalary=document.createElement("h3");
//     ShowSalary.innerText=`Your entered salary is ${salary}`

//     screen.append(ShowSalary)
//     document.getElementById("bonusBtn").style.display="block";


//     let button=document.getElementById("bonusBtn");

//     button.onclick = function () {
//         salary=salary+5000;
//         ShowSalary.innerText=`Your entered salary is ${salary}`

//     }
    
// }


// let securityBox=document.getElementById("dabba");


// securityBox.onmouseover= ()=>{
//     let pass=prompt("Enter the security key to access passwords");
//     if(pass=='1234'){
//         alert("You can access the passwords now")
//         document.querySelector(".passwords").style.display="block";
//     }
//     else{
//         alert("abbe chal naa!!")
//     }
// }


// let button=document.querySelector(".btn");

// button.ondblclick= (obj)=>{
//     console.log(obj)
//     // console.log(event.type)
//     // console.log(event.target)
// }


let button=document.querySelector(".btn");

// xxxxxxxx
// button.onclick=()=>{
//     alert("hello user")
// }


// button.onclick=()=>{
//     console.log("button clicked")
// }




//ek element ke uppar multiple funtions for run karna hai
// button.addEventListener("click",()=>{
//     console.log("button is clicked")
// })

// const handlerFn =()=>{
//    let message=document.createElement("h3");
//    message.innerHTML="thanks for visiting";

//     let screen=document.querySelector(".root");
//     screen.appendChild(message);
// }

// button.addEventListener("click",handlerFn)


// button.addEventListener("click",()=>{
//     console.log("come back again")
// })

// button.addEventListener("click",()=>{
//     console.log("byiiiiiiiii!!!!!!")
// })


let modeBtn=document.querySelector(".btn")
let currMode="light"
let body=document.querySelector("body");


const handleClick =()=>{
    if(currMode === "light"){
        currMode="dark";
        console.log(currMode);
        // document.querySelector("body").style.backgroundColor="black"
        body.classList.add("dark") 
        body.classList.remove("light")

    }
    else{
        currMode="light";
        console.log(currMode)
        // document.querySelector("body").style.backgroundColor="white"
        body.classList.add("light")
        body.classList.remove("dark")
    }
}

modeBtn.addEventListener("click",handleClick)














