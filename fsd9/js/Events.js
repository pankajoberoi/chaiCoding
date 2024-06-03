
let Salary=0;

Salary=Number(prompt("Enter Your Salary",Salary));

if(Salary!=0){
    const screen=document.getElementById("screen");
    const ShowSalary=document.createElement("h3");
    ShowSalary.innerText=`Your Entered salary is ${Salary}`;

    screen.append(ShowSalary);

    const BonusBtn=document.getElementById("btn");
    BonusBtn.style.display="block";

    BonusBtn.onclick=()=>{
        Salary=Salary+500;
        ShowSalary.innerText=`Your Entered salary is ${Salary}`;
    }


}
else{

}