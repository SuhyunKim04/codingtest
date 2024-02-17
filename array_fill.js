let num = 7;
let numbers = Array(num).fill(1).map( (data,i) => data + i)

console.log(numbers);


function solution(n) {
    let answer;
    let numbers = Array(n).fill(1).map((data,i) => data +i);
    let odd = numbers.filter(data => data%2);
    let even = numbers.filter(data => !(data%2));
    // let even = numbers.filter(data => data % 2 === 0);
    if(n%2) {
        // n이하의 모든 정수의 합구하기
        answer = odd.reduce((a,b) => a + b, 0)
    } else {
        answer = even.map(data => Math.pow(data,2)).reduce((a,b) => a + b, 0)
    }

    return answer;
}

console.log(solution(10))

let nums = [1,2,3,4,5];
let sum = nums.reduce( (a,b) => a + b, 0)
console.log('1~5 sum is : ', sum);

// let newStr = [...str].map(data => data + 'o').join('')


let calc = '3+5*2';
console.log(eval(calc))