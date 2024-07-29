

const fs = require("fs")

 fs.writeFileSync("text.txt","This file created with sync")


 fs.writeFileSync("sync.txt","This file created with Async callback",(err)=>{
    if(err){
        return console.error("Error creating file:",err)
    }
    console.log("File created successfully with async / callback.")
 })

