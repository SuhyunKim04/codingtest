function solution(num, n) { 
    console.log(num % n === 0 ? 1 : 0);
}


solution(98,2)


let a = 3;
let b = 10;


let lap = a > b ? 'true' : 'false' 
lap = b % a; // 나머지연산자 N
console.log(result)

function chkEven(num) {
    let answer = num % 2 === 0 ? 'ture':'false';
    
    
    console.log(answer)
}

chkEven(1)
chkEven(8)
chkEven(4)
chkEven(3)

// 파라미터로 주어지는 문자열은 const로 주어집니다. 변경하려면 문자열을 복사해서 사용하세요.
// char* solution(const char* myString) {
//     // return 값은 malloc 등 동적 할당을 사용해주세요. 할당 길이는 상황에 맞게 변경해주세요.
//     char* answer = (char*)malloc(1);
//     return answer;
// }

function solution(numbers, n) {
    var answer = 0;
    console.log(answer);
}


let numbers = [1,2,3,4,5]
let result = numbers.reduce( (total, current) => total < 10 ? total + current : total   )

console.log(result)

function solution(number, n, m) {
    var answer = number%n == 0 && number%m==0 ? 1 : 0
    console.log(answer)
}

solution(60, 2, 3)

