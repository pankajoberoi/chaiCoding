const fs=require("fs");
const os=require("os");

console.log(os.cpus().length)


// async...
fs.readFile("./contact.txt" , "utf-8" ,(err,result)=>{
    console.log(result)
})
console.log("1")
console.log("2")

console.log("--------------------------------------------------------------")

// sync....
console.log("1")
const result=fs.readFileSync("./contact.txt","utf-8");
console.log(result);
console.log("2");


//async....
fs.readFile("./test1.txt","utf-8",(err,result)=>{
    console.log(result);
})



//async.... non blocking behaviour
