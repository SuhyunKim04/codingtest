function solution(a,b) {
    let answer = 0;
    const calc = {
        odd : (a,b) =>  a**2 + b**2,
        even : (a,b) => Math.abs(a-b),
        one : (a,b) =>  2 * (a + b),
        age : (now) => now - 2020 + 1
    }
 

    const n1 = a % 2; // 1 -> odd
    const n2 = b % 2; // 0 -> evne
    if(n1 && n2){
        answer = calc.odd(a,b)
    }else if(n1 || n2) {
        answer = calc.one(a,b)
    }else{
        answer = calc.even(a,b)
    }

    return answer;
}

solution(1, 4);

const friend = {
    name : 'milk',
    age : (now) => now - 2020 + 1
}

console.log(friend.age(2024))


function solution1(myString) {
    let answer = [...myString].map( data => data.toLowerCase()).join('').replace(/a/g, 'A')
    return answer;
}

console.log(solution1("abstract algebra"));

let str = 'abcab';
console.log( str.replace(/a/g, 'A') );