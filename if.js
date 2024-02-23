function solution(ineq, eq, n, m) {
    if (eq === '=' && n===m) return 1 
    if (ineq === '<' && n < m) return 1
    if (ineq === '>' && n > m) return 1
        return 0;
}

// ***************************************
// const operations = {
//     '>=': (n, m) => n >= m,
//     '<=': (n, m) => n <= m,
//     '>!': (n, m) => n > m,
//     '<!': (n, m) => n < m,
//     };
    
//     function solution(ineq, eq, n, m) {
//     const op = operations[ineq + eq];
//     return Number(op(n, m));
// }
// **************************************

function solution(a, b, flag) {
    var answer = 0;
    if (flag === true) {
        answer = a + b;
    } else {
        answer = a - b;
    }
    return answer;
}

// ********************************

// function solution(a, b, flag) {
//     return (flag)? a+b : a-b;
// }
// *******************************


function solution(num_list) {
    let Even = num_list.filter((a) => a % 2 === 0);
    let Odd = num_list.filter((a) => a % 2 === 1);
    
    let evenSum = Even.reduce((acc,cur) => acc + String(cur));
    let oddSum = Odd.reduce((acc,cur) => acc + String(cur));
    
    return Number(evenSum) + Number(oddSum);
}

// ********************************
// function solution(num_list) {
//     const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
//         if (num % 2 === 0) {
//             evens.push(num)
//         } else {
//             odds.push(num)
//         }
//         return { odds, evens }
//     }, { odds: [], evens: [] })
//     return Number(odds.join('')) + Number(evens.join(''))
// }
// *******************************

function solution(flo) {
    var answer = 0;
    return Math.floor(flo);
}


const solution = (str1, str2) => str2.includes(str1) ? 1 : 0;

// **********************************
// function solution(str1, str2) {
//     return +str2.includes(str1);
//  }
// **********************************



function solution(num_list) {
   let arr = num_list[num_list.length-1]
   let arr2 = num_list[num_list.length-2]
   if(arr > arr2) {
    num_list.push(arr - arr2)
   }else {
    num_list.push(arr*2)
   }
    return num_list;
}


// function solution(num_list) {
//     const [a, b] = [...num_list].reverse();
//     return [...num_list, a > b ? (a-b):a*2];
// }





function solution(n, control) {
    for(i=0; i<control.length; i++){
        const arr = control[i]
        if(arr === "w"){
            n += 1
        }if(arr === "s"){
            n -=1
        }if(arr === "d"){
            n += 10
        }if(arr === "a"){
            n -= 10
        }
    }
    return n;
}


// const operations = {
//     w: (n) => n + 1,
//     s: (n) => n - 1,
//     d: (n) => n + 10,
//     a: (n) => n - 10,
//   };
  
//   function solution(n, control) {
//     return [...control].reduce((prev, op) => operations[op](prev), n);
//   }