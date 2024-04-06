//못품//

function solution(my_string) {
    return my_string.replaceAll(/[^\d]/g, '').split('').map(v=>+v).reduce((a,v)=>a+v,0);
}


function solution2(my_string) {
    let numbers = my_string.match(/\d/g).reduce((a,b) => a + (+b),0)
    return numbers
    
}
console.log(solution2("aAb1B2cC34oOp"))