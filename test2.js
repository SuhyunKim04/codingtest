let n = [1,2,3,4,5,6,7,8,9,10]

let result = n.reduce( (a,c) => a + c)
console.log(result)

function sum(number) {
     let answer = Array(number).fill(1).map( (_, i) => i + 1)
     return answer;
}

console.log(sum(15))
console.log(sum(10))
console.log(sum(100))


let num = [ 1,2,3]

console.log(num.map(data => data ** 2))

