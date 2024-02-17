const bcrypt = require("bcrypt");

async function makeHash(password) {
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
    process.exit(0);
}

makeHash("apple");