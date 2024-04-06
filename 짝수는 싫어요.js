function solution(n) {
    var answer = [];
    for(let i = 1; i <=n; i++){
        if(i%2 === 1){
            answer.push(i)
        }
    }
    return answer;
}


1.
function solution(n) {
    var answer = [];

    for (let i = 1; i<=n; i+=2) answer.push(i)

    return answer;
}

2.
function solution(n) {
    return Array(n).fill(1).map((v,i)=>v+i).filter(v=>v%2===1);
}