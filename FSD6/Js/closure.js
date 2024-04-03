
//lexical scope

function someFunc(){

    let username="pankaj"

    function printName(){
        console.log(username)
    }

    printName()
}

someFunc()




// closure

function someFunc(){

    let username="pankaj"

    function printName(){
        console.log(username)
    }

    return printName
}

let result=someFunc()
result();