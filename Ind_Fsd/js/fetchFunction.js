const url="https://dummy.restapiexample.com/api/v1/employees"


const button=document.getElementById("btn")
const para=document.getElementById("data")


async function getData(){
    console.log("geeting data......")
    const response=await fetch(url)//1s
    let data=await response.json()
    console.log(data)
    para.innerText=data.message;
}





addEventListener("click",getData);

