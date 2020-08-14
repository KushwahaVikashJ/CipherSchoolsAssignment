/*Function to check evenly divide or not*/

function conversion(a,b){
    if(a>=b){
        return (a/b)%2==0?true:false;
    }
    else{
        return;
    }
}

console.log(conversion(98,7));
console.log(conversion(85,4));