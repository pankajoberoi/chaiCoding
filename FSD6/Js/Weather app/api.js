
const URL = "https://bible-api.com/john%203:16";


const factPara = document.querySelector("#facts");
const button = document.querySelector("#btn");

async function getFacts() {
  console.log("getting data.......");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
  //factPara.innerText = data.text;
}

button.addEventListener("click", getFacts);
