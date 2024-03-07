function solution10(arr, n) { 
    let answer = [];
    if(arr.length % 2){
        answer = arr.map((cur, i) => !(i % 2) ? cur+n:cur)
    }else{
        answer = arr.map((cur ,i) => i % 2 ? cur+n : cur)
    }

    return answer;
}

console.log(solution10([49, 12, 100, 276, 33], 27));

console.clear();

function solution1(num_list, n) {
    // let answer =  num_list.filter((data,i) => (i % n === 0) ? data : null);
    let answer =  num_list.filter((data,i) => { if( !(i%n)) return data; });
    console.log(answer);
}


solution1([4, 2, 6, 1, 7, 6],4)

const myFunc = (arr) => {
    return arr + 1;
} 
const myFunc2 = (arr) =>  arr + 1;
 