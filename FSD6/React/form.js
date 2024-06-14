const fromEl=document.querySelector("form")



fromEl.addEventListener("submit",(obj)=>{
    obj.preventDefault();
    console.log(fromEl.elements[0].value);
    console.log(fromEl.elements[1].value);
    console.log(fromEl.elements[2].value);
    console.log("form submitted");
})
