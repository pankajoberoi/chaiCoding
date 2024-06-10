
// lexical scope

// let greetings="welcome";
// function someFunc(){
//     let username="pankaj"      

//     function PrintName(){
        
//         console.log(username)
//     }
    
//     PrintName();

// }

// someFunc()

//closure

let greetings="welcome";
function someFunc(){
    let username="pankaj"

    function PrintName(){
        console.log(username)
    }
    
    return PrintName

}

let result=someFunc()
result();




