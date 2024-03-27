function solution(cipher, code) {
    var answer = [...cipher].filter((word, index) => !((index + 1) % code)).join('')
    return answer;
}

console.log(solution("dfjardstddetckdaccccdegk",4))