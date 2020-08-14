/*Function to get real type*/

function realType(value){
    if(Array.isArray(value)){
       return console.log('array')
    }
    else if(value==null){
        return console.log('null')
    }
    else{
        return console.log(typeof value); 
    }
}

console.log(realType(1));
console.log(realType('a'));
console.log(realType(true));
console.log(realType([]));
console.log(realType(null));