const url="https://cat-fact.herokuapp.com/facts"

const btn=document.getElementById("btn")
const facts=document.getElementById("facts")

async function getFacts(){
    const response=await fetch(url);//get
    console.log(response);
    const data= await response.json();
    console.log(data);
    facts.innerText=data[1].text;

}





btn.addEventListener("click",getFacts)
