/*Function to remove duplicate from array*/

function removeDups(arr){
    var unique = arr.filter((e,i,s)=>{
        return s.indexOf(e) == i;
    })
    return unique;
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(['The','big','cat']));
console.log(removeDups(['John','Taylor','John']));