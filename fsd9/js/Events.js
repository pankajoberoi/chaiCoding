
// let Salary=0;

// Salary=Number(prompt("Enter Your Salary",Salary));

// if(Salary!=0){
//     const screen=document.getElementById("screen");
//     const ShowSalary=document.createElement("h3");
//     ShowSalary.innerText=`Your Entered salary is ${Salary}`;

//     screen.append(ShowSalary);

//     const BonusBtn=document.getElementById("btn");
//     BonusBtn.style.display="block";

//     BonusBtn.onclick=()=>{
//         Salary=Salary+500;
//         ShowSalary.innerText=`Your Entered salary is ${Salary}`;
//     }


// }

// const securityBox=document.querySelector(".screen")


// securityBox.onmouseover = () => {
//     const key=prompt("enter the security key to access passwords");

//     if(key=='abcd'){
//         alert("You can acces the passwords");
//         document.querySelector(".passwords").style.display="block";
//     }
//     else{
//         alert("abee chal naa!!")
//     }
// }


// const button=document.querySelector("#btn")

// button.onclick = function (obj) {
//     console.log("button clicked");
//     console.log(obj)
// }


// const button2=document.querySelector("#btn2");

// button2.ondblclick = (e) =>{
//     alert("clicked !!!!!!")
//     console.log(e)
// }


// onchange

// const screen=document.getElementById("screen")
// const Input=document.getElementById("name")


// Input.onchange = (obj) => {
    
//     console.log(obj.target.value)
//     const data=document.getElementById("inputData");
//     data.innerText=obj.target.value

// }


// const button=document.getElementById("btn")



// button.onclick = () =>{
//     alert("mitronnn!!!")
// }

// button.onclick = () => {
//     alert("welcome!!!")
// } 



// Mouse Events: click, dblclick, mousedown, mouseup, contextmenu, mouseout, mousewheel, mouseover
// Touch Events: touchstart, touchend, touchmove, touchcancel
// Keyboard Events: keydown, keyup, keypress
// Form Events: focus, blur, change, submit
// Window Events: resize, scroll, load, unload, hashchange

// const button=document.getElementById("btn")

// button.addEventListener("click",()=>{
//     console.log("hello from fn 1")
// })

// function handleClick(){
//     console.log("hello from fn 2")
// }
// button.addEventListener("click",handleClick)
// button.addEventListener("click",()=>{
//     console.log("hello from fn 3")
// })
// button.addEventListener("click",()=>{
//     console.log("hello from fn 4")
// })


// button.removeEventListener("click",handleClick)



const modeBtn=document.getElementById("ModeBtn");

const body=document.querySelector("body")

let currMode="light"

modeBtn.addEventListener("click",()=>{
    if(currMode==='light'){
        currMode="dark"
        console.log(currMode)
        // body.style.backgroundColor="black"
        body.classList.add("dark")
        body.classList.remove("light")
    }
    else{
        currMode="light"
        console.log(currMode)
        // body.style.backgroundColor="white"
        body.classList.add("light")
        body.classList.remove("dark")
    }
})



