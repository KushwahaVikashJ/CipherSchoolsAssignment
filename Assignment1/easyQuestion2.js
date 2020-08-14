/*Function to add up to numbers*/

function addUp(a){
    if(a>=1 && a<=1000){
        var count = 0;
        for(var i=1;i<=a;i++){
            count = count+i;
        }
    }
    else{
        return;
    }
    return count;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));