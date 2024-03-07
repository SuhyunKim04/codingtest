let atr = "abcde"

console.log(atr.split(''))
console.log([...atr])
console.log(Array.from(atr))

let a = [1,2,3,4,5]

console.log(a.reduce((a,b) => a + b))


let numbers = '12345'
let answer = [...numbers].reduce( (a,b) => a + +b, 0);
console.log(`answer : `, answer)



