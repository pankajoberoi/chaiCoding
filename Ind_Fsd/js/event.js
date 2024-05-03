let salary=Number(prompt("majdoor brother salary btao!"))


if(salary){
    const screen=document.getElementById("screen");
    const ShowSalary=document.createElement("h3");
    ShowSalary.innerText=`Your entered salary is ${salary}`

    screen.append(ShowSalary)
    document.getElementById("bonusBtn").style.display="block";


    let button=document.getElementById("bonusBtn");

    button.onclick = function () {
        salary=salary+5000;
        ShowSalary.innerText=`Your entered salary is ${salary}`

    }
    
}










