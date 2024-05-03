// //Dom Manipulation -> element -> Seelctors 

// const firstHeading=document.getElementById("heading");
// console.log(firstHeading,"html element");

// firstHeading.style.color="red"


// const allHeadings=document.getElementsByTagName("h1");
// console.log(allHeadings)


// for(let heading of allHeadings){
//     heading.style.color="red"
// }


// const extraTags=document.getElementsByClassName("extra")
// console.log(extraTags)

// for(let tag of extraTags){
//     tag.style.color="green"
// }


// const conatiner=document.querySelector("div");
// console.log(conatiner);


// const header=document.querySelector("#heading");
// console.log(header);


// const tags=document.querySelector(".extra");
// console.log(tags);



// const element=document.querySelector('p')
// console.log(element.innerText)


// const element2=document.querySelector('p')
// console.log(element2.textContent)

// const element3=document.querySelector('p')
// console.log(element3.innerHTML);


// const isLoggedIn=true;
// const userName=prompt("enter Your name")

// const heading=document.querySelector('h1')

// if(isLoggedIn){
//     heading.innerText="hello " + userName
// }
// else{
//     heading.innerText="kon hai be tu"
// }


//Manipulating attributes

// const link=document.querySelector("a")

// console.log(link.getAttribute('href'))

// let searchEngine=prompt("Which search ingine you want to set by default")

// const link=document.querySelector("a")


// if(searchEngine==='google'){
//     link.innerText="Go to Google"
//     link.setAttribute('href','https://www.google.com/')
// }
// else{
//     link.innerText="Go to Yahoo"
//     link.setAttribute('href','https://www.yahoo.com/')

// }


//Creating elements ->dynamically


// const heading=document.createElement("h1"); // add karna hai isko structure ke andar


const screen=document.getElementById("root");
const heading=document.createElement("h1");
const description=document.createElement("p")
heading.innerText="Jai shree Ram"
description.innerText="welcome to bhopal"
screen.append(heading,description);



//Remove-> dynamically

// const icecream=document.querySelector("h3")
// icecream.remove();


//parent -> child
const section=document.querySelector("span");
const gulabJamaun=document.querySelector("h3");


section.removeChild(gulabJamaun);





