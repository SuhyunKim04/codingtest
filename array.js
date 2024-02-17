let arr1 = [ 1,2,3];
let arr2 = [ 4,5,6];
// let arr3 = arr1.concat(arr2)
let arr3 = [...arr1,8, ...arr2];
    console.log(arr3)


let arr4 = arr3.map(data => data % 2 ? data : data+'even')
console.log('arr4 : ', arr4)

let str = 'hello';
let newStr = [...str].map(data => data + 'o').join('')
console.log(newStr);


