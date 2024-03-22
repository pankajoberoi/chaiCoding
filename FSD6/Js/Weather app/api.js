const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  console.log("getting data....");
  let response = await fetch(URL);
  console.log(response); //JSON format //XML
  let data = await response.json();
  console.log(data[0].text);
  factPara.innerText=data[0].text
};

btn.addEventListener("click", getFacts);

