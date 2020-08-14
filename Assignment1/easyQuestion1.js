/*Function to count char in a string*/

function charCount(a,b){

    var str = Array.from(b);

    var count = 0;
    str.forEach(d=>{
        if(d===a){
            count++; 
        }
    }) 
    return count;
}

console.log(charCount('a','edabit'));
console.log(charCount('c','Chamber of secrets'));
console.log(charCount('b','big fat bubble'));