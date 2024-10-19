const {readFileSync} = require('fs')
const {readFile} = require('fs/promises')

const x = readFileSync("config.json")
const    {files} = JSON.parse(x.toString())


async function readFileText(file) {
  try{
    const string = (await readFile(file)).toString()
    const wordsCount = countWords(string) 
    console.log(`${file}: ${wordsCount} words`)
  }
  catch(error){
    if(error.code === 'ENOENT'){
        console.log('file not found')
    }
    else {
       console.log(error)
    }
    }
    
}


function countWords(str) {
    //to-do
    const cleanStr = str.replace(/[^\w\s]/g, '');
    const wordsArray = cleanStr.trim().split(" ");
    return wordsArray.filter(word => word.length > 0).length;
}

//execution

files.forEach(file => readFileText(file));
