

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


//못품
//주사위 게임1
function solution(a, b) {
    // 조건에 맞춰서 출력한다.
    let  odd = a % 2 && b % 2; 
    let  even =  !(a % 2) && !(b%2);
    return odd ? a**2 + b**2 : even ? Math.abs(a-b) : 2 * (a + b);
}
function solution(a,b) {
    const calc = {
        odd : (a,b) =>  a**2 + b**2,
        even : (a,b) => Math.abs(a-b),
        one : (a,b) =>  2 * (a + b)
    }
}

const friend = {
    name : 'milk',
    age : (now) => now - 2020 + 1
}





//할 일 목록
function solution(todo_list, finished) {
    return todo_list.filter((e,i) => !finished[i])
}


//홀수 vs 짝수

function solution(num_list) {
    let even = 0;
    let odd = 0

    num_list.map((v, idx) => {
        !(idx % 2) ? even += v : odd += v; 
    })

    return odd > even ? odd : even; 
}


//ad제거하기
//내꺼
function solution(strArr) {
    return strArr.filter(b => !b.includes('ad'))
 }

1
function solution(strArr) {

    strArr = strArr.filter((x)=>{
        return x.indexOf("ad") == -1
    })

    return strArr;
}



//배열 원소의 길이 
//틀림
function solution(strlist) {
    var answer = [];
    for(let i =0; i < strlist.length; i++){
        answer[i] = strlist.length
    }
    return answer
}



//심각형의 완성조건
//못품
function solution(sides) {
    var answer = 0;
    return answer;
}

//아이스 아메리카노
//노이해
function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}

1
function solution(money) {
    let count = 0;
    while (money >= 5500) {
        money -= 5500;
        count++
    }
    return [count, money]
}


2
function solution(money) {
    return [~~(money/5500),money%5500];
}


3
function solution(money) {
    var answer = [];

    answer.push(parseInt(money/5500));
    answer.push(money%5500);

    return answer;
}


// 피자 나눠 먹기
function solution(slice, n) {
    return Math.ceil(n / slice);
}


//배열 자르기
//못품
function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2 - num1 + 1);
}


//삼각형의 완성조건
//못품
1
function solution(sides) {
    let answer = [];
    let n = Math.min(...sides);
    let m = Math.max(...sides);
    let a = m - n;
    let b = m;
  
    //m이 가장 긴 변일 때
    while (a < m) {
      a++;
      answer.push(a);
    }
  
    //b가 가장 긴 변일 때
    while (b < m + n - 1) {
      b++;
      answer.push(b);
    }
    return answer.length;
  }

  2
  function solution(sides) {
    return Math.min(...sides) * 2 - 1;
  }



//특정문자 제거
  function solution(my_string, letter) {
    var answer = '';
    answer = [...my_string].filter((a) => a !==letter).join('');
    return answer
}

1
  function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}