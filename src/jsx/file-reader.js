const fs = require('fs');


const myFileReader = (filename)=> {
    const fullPath = __dirname + '\\'+filename
    console.log("FULL_PATH: ", fullPath)
    const results = fs.readFileSync(fullPath)
    return results.toString();
}

export default {
    myFileReader
}