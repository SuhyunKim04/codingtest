

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