// function solution(a, b) {
  

    
//     let calc1 = +(a + '' + b); 
//     // Number(data), parseInt(data), parseFloat(data), +
//     let calc2 = 2 * a * b
//     var answer = calc1 >= calc2 ? calc1 : calc2;
//     return answer;
// }

 

// console.log(solution(2,91))
// console.log(solution(91,2))
 

function solution(str1, str2) {
    var answer = '';

    for(let i = 0; i < str1.length; i++){
        answer += str1[i] + str2[i]
    }
    return answer;

}

console.log(solution("aaaaa", "bbbbb"))

let str = 'choco';
let say = '-';
let answer = ''
console.log(str.length, str[0], str[1]) 

for(let i = 0; i < str.length; i++) {
    console.log(str[i])
    answer = answer + str[i] + say;
}

console.log(answer)


console.log(Math.max(1,2,3))
console.log(Math.min(1,2,3))

let str3 = 'Milk'
console.log(str3.repeat(3))



function solution3(my_string, k) {
    var answer = my_string.repeat(k)

    return answer;
}

console.log(solution3("string",3))


function solution4(a, b) {
    let calc1 = a + '' + b;
    let calc2 = `${b}${a}`;
    return  calc1 >= calc2 ? calc1 : calc2;
}

console.log(solution4(9,91))
console.log(solution4(89,8))


let calc3 = '1+3*4';
let result = eval(calc3);
console.log(`result : ${result}`)



function solution(myString, pat) {
    var answer = 0;
    answer = (+myString.toUpperCase().includes(pat.toUpperCase()))
    return answer;
}


// *******************
function solution(myString, pat) {
    return myString.toUpperCase().includes(pat.toUpperCase())?1:0 
}


function solution(strArr) {
    return strArr.map((a, i) => i% 2 ? a.toUpperCase() : a.toLowerCase());
}


function solution(my_string, index_list) {
    var answer = '';

    let arr = [1,2,3,4,5]
    let result = arr.filter((a,i) => a >3);
    return answer;
}