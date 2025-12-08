const URL = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  let data = await fetch(URL);
  console.log(data);

  let response = await data.json();
  console.log(response);

  let Screen = document.querySelector(".screen");
  Screen.innerHTML = response[0].name;

  response.forEach((el) => {
    let Data = document.createElement("p");
    Data.innerHTML = el.name;

    let BaseSceen = document.querySelector(".screen");
    BaseSceen.appendChild(Data);
  });
}

getData();
