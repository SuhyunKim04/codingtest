

function solution(numLog) {
    var answer = []
    for(i=0; i < numLog.length - 1; i++){
        if(numLog[i+1] - numLog[i] === 1){
            answer.push('w')
        }else if(numLog[i + 1] - numLog[i] === -1){
            answer.push('s')
        }else if(numLog[i+1] - numLog[i] === 10){
            answer.push('d')
        }else if(numLog[i + 1] - numLog[i] === -10){
            answer.push('a')
        }
    }
   console.log(answer.join(''))
}

// solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])



function solution2(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };
    const prevNums = numLog; //[0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]
    const nextNums = numLog.slice(1) // [ 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]

    let result = nextNums.map((v, i) => {
        return convert[v - prevNums[i]]
    })

    console.log(result);
}

solution2([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])


//접미사인지 확인하기//
1
function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}


2
const solution = (str, suff) => str.endsWith(suff) ? 1 : 0

//내꺼 //
function solution(my_string, is_suffix) {
    return my_string.slice(my_string.length - is_suffix.length) === is_suffix ? 1 : 0
}




//첫번째로 나오는 음수//
//내꺼 //
function solution(num_list) {
    var answer = 0;
    for( let i =0; i < num_list.length; i++){
        if(num_list[i] < 0) {
            answer = i
            break
        }
        answer = -1
    }
    return answer
}

1
const solution = num_list => num_list.findIndex(v => v < 0)

2
function solution(num_list) {
    let a = num_list.filter(c=> {if(c<0) return c})
    return num_list.indexOf(a[0])
}




//배열 길이에 따라 다른 연산하기 //
//내꺼//
function solution(arr, n) {
    if(arr.length % 2 === 1){
        return arr.map((cur, i) => i % 2 ===0 ? cur+n:cur)
    }else{
        return arr.map((cur ,i) => i % 2 === 1 ? cur+n : cur)
    }
}

1
const solution=(a,n)=>a.map((v,i)=>a.length%2^i%2?v+n:v)



//5먕씩
//내꺼
function solution(names) {
    return names.filter((n , i) => i % 5 === 0);
}


1
function solution(names) {
    var answer = [];
    for(let i = 0; i < names.length; i += 5){
        answer.push(names[i])
    }
    return answer;
}

//공백으로 구분하기2
//내꺼
function solution(my_string) {
    return my_string.split(' ').filter(e => e !== "")
}

1
function solution(my_string) {
    return my_string.split(' ').filter(v => v);
}

2
function solution(my_string) {
    return my_string.trim().split(/ +/);
}

3
const solution = my_string => my_string.match(/[^\s]+/g);

4
return my_string.replace(/(^ *)|( *$)/g, "").replace(/ +/g, " ").split(' ');



//내꺼
//n개 간격의 원소들
function solution(num_list, n) {
    var answer = [];
    for(let i =0; i < num_list.length; i+=n){
        answer.push(num_list[i]);
        
    }
    return answer;
}


1
const solution = (arr, d) => arr.filter((_, idx) => idx % d === 0)

2
const solution = (num_list, n) => num_list.filter((_, i) => !(i % n))

3
function solution(num_list, n) {
    return num_list.filter((v, idx) => !(idx % n));
}



//내꺼
//배열의 원소 삭제하기
function solution(arr, delete_list) {
    return arr.filter(a => !delete_list.includes(a))
 }

1
function solution(arr, delete_list) {
    const set = new Set(delete_list);
    return arr.filter((v) => !set.has(v));
  }




  //내꺼
  //문자열 정수의 합
  function solution(num_str) {
    return num_str.split('').reduce((a,b) => a + Math.floor(b),0);
  }



  // 못품
  //문자열 바꿔서 찾기

function solution(myString, pat) {
    return result = [...myString].map((n) => n = n == "A"? "B" : "A").join("").indexOf(pat)
}


//못품
//부분 문자열 이어 붙여 문자열 만들기
function solution(my_strings, parts) {
    // substring과 join을 사용한 풀이법이다.
    return my_strings.map((v,i) =>  v = v.substring(parts[i][0],parts[i][1]+1) ).join("");
}

//내꺼
//x사이의 개수
function solution(myString) {
    return myString.split('x').map(v => v.length);
}