
const url="hhttps://cat-fact.herokuapp.com/Fact"


const button=document.getElementById("btn")
const para=document.getElementById("data")
const list=document.querySelector("ul")

async function getData(){
    console.log("geeting data......")
    const response=await fetch(url)//1s
    let data=await response.json()
    console.log(data)
    para.innerText=data;
    // for(let i=0;i<=10;i++){
    //     let item=document.createElement('li')
    //     item.innerHTML=data[i].employee_name;
    //     list.appendChild(item);
    // }
}



addEventListener("click",getData);

