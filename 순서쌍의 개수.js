function solution(n) {
    let answer = 0;
      for(let i = 1; i <= n; i++){
          if(n % i === 0){
              answer++
          }
      }
      return answer
}



 
function solution2(n) {
    let ans = 0;
    for (let i = 1; i < Math.sqrt(n); i++)
        if (n%i === 0) ans+=2;

    return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;
}


const n = 20
let arr = []

for(let i = 1; i <= n; i++) {
    if( n % i === 0 ) {
       arr.push(i)
    }
}

console.log(arr.length)

function my(n) {
    let arr = Array(n).fill(1).map( (_,i) =>  i + 1) 
    return arr.filter(data => n%data === 0).length
}

console.log(my(20))

console.log(String(1))
console.log(Number('2'))