function solution(s1, s2) {
    var answer = s1.filter(word => s2.includes(word)).length
    return answer;

    
}


console.log(solution(["a", "b", "c"],["com", "b", "d", "p", "c"]))

let arr = ['a','b','c','d','c','e','c']

console.log(arr.includes('c'))
console.log(arr.filter(word => word == 'c').length)
