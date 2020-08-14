/*Function to hit the jackpot*/

function testJackpot(arr){
    var init = arr[0];
    var count=0;
    arr.filter(e=>{
        if(e==init){
            count++;
        }
    })
    if(count==arr.length){
        return true
    }
    else{
        return false
    }
}

console.log(testJackpot(['@','@','@','@']));
console.log(testJackpot(['abc','abc','abc','abc']));
console.log(testJackpot(['SS','SS','SS','SS']));
console.log(testJackpot(['&&','&','&&&','&&&&']));
console.log(testJackpot(['SS','SS','SS','Ss']));