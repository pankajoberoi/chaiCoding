const fs=require("fs")

// sync ..... blocking operations
fs.writeFileSync("./test1.txt" , "Hello mitroonnn!!!");


//async..... non -blocking opertaions
fs.writeFile("./test2.txt" , "Hello guys!!!",(err) => {} )


const result=fs.readFileSync("./contact.txt" , "utf-8");
console.log(result);

fs.readFile("./contact.txt" ,"utf-8" ,(err,result)=>{
    if(err) {console.log("meri marzii nhi chla toh kya!!",err)}
    else{console.log(result)}
})

// fs.appendFileSync("./test1.txt","\nHii from modi jii\n");
fs.appendFileSync("./test2.txt", new Date().getTime().toLocaleString());

fs.appendFileSync("./test2.txt",`\n ${Date.now()} hello from the server\n`);




