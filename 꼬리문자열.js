function solution(str_list, ex) {
    
    let answer = str_list.filter((word) => !word.includes(ex)).join('')
    // 필터를 돌려서 배열안에 ex 라는 문자열이 포함되었는지 확인,포함되지 않은 원소만 골라내자
    return answer;
}


let str_list = ["abc", "def", "ghi"]	
let ex= "ef"
console.log(solution(str_list, ex))


const str = 'hello world'
console.log(str.includes('wor'))

