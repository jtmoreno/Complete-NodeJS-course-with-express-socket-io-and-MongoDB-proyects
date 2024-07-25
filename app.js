const fs =  require('fs')
a = ''
fs.readFile('./algo.txt',(err,data)=>{
    err? console.log(err):a=data.toString();
    console.log(a);
} )





const mesage = (para) => {
    console.log(`${para} es la polla`);
}
/* 
mesage("creacion")

console.log(global);
console.log(__filename);
 */

const {arr, num} = require('./expor')
/* 
console.log('importt');
console.log(arr, num); */