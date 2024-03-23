// console.log(Math.max(1,2,3))
// console.log(Math.min(1,2,3))
// let nums=[1,2,3]
// console.log(Math.max(...nums))

function solution(sides) {
    let max = Math.max(...sides)
    let idx = sides.indexOf(max)
    sides.splice(idx,1);
    let sum = sides.reduce( (a,b) => a + b)
    return sum > max ? 1 : 2
}

console.log(solution([1,3,2]))
console.log(solution([1,2,3]))


function solution2(sides) {
    let arr = sides.sort( (a,b) => b - a);
    return arr[0] < arr[1] + arr [2] ? 1 : 2
}
console.log(solution2([1,3,2]))
console.log(solution2([199, 72, 222]))


let nums = [ 1,3,15,4, 20, 10]
console.log(nums.sort( (a,b) => a - b))
console.log(nums.sort( (a,b) => b - a))