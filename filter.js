let result ;
let arr = [1,2,3,4,5]
result = arr.filter((a,i) => a >3);


let str = 'Hello World';
// resulte = str.slice(6,str.length)
let list = [0, 1, 8, 7];
result = '';
/*
for(let i =0; i < list.length; i++){
   result +=  str.slice(list[i],list[i] + 1)
} */

result = list.map( data => str.slice(data,data+1)).join('')

console.log(result) // HW


function solution(my_string, alp) {
    
    return answer;
}


const a = [12, 4, 15, 46, 38, -2, 15]	
const negative = a.filter(data => data < 0);
console.log(a.indexOf(negative[0]))  

const b = [13, 22, 53, 24, 15, 6]