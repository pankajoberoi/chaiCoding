
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

const screen=document.getElementById("screen")
const Input=document.getElementById("name")

Input.onchange = (e) => {
    console.log(e.target.value)

    const data=document.getElementById("inputData");
    data.innerText=e.target.value
    

}














