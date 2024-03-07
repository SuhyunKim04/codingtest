function solution(myString, pat) {
    
    let answer = [...myString].map((data) => data === 'A' ? 'B' : 'A').join('')
    answer = +answer.includes(pat)
    // answer = answer.includes(pat) ? 1 : 0;
    return answer;
}


console.log(solution("ABBAA","AABB"))

let result;

let arr = ['a','b','a'];
result = arr.map((data) => data === 'a'? 'b' : 'a')

console.log(result)


let nums = [1,2,3]
result = nums.map((data) => data * 2) ;

console.log(result)