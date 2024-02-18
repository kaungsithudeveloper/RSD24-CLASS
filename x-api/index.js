const bcrypt = require("bcrypt");

async function makeHash(password) {
    const hash = await bcrypt.hash(password, 10);
return hash;
    
}

async function compareHash(password, hash) {
    const hash = await makeHash("apple");
    const result = await bcrypt.hash(password, hash); 

    if(result){
        console.log("Correct")
    }else {
        console.log("Incorrect")
    }
    process.exit(0);
}
compareHash("apple");

