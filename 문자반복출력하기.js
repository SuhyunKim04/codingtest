function solution(my_string, n) {
    var answer = my_string.split('').map((item) => item.repeat(3)).join('')
    return answer;
}

console.log(solution('hello',3))

let str='h'
console.log(str.repeat(3))
