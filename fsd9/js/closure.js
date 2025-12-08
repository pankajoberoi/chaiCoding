

// let greetings="namaste!!!!!";
// function someFunc(){
//     let username="Pankaj";
    
//     function PrintName(){
//         console.log(username);
        
//     }
//     PrintName();
// }

// someFunc();
// console.log(greetings);




let greetings="namaste!!!!!";
function someFunc(){
    let username="Pankaj";
    
    function PrintName(){
        console.log(username);
        
    }
    return PrintName;
    
}

let result=someFunc();
result();
console.log(greetings);