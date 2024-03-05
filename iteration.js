let arr = [ 'puppy','cat','parrot'];


arr.forEach( (data,i) => {
    console.log(data, i)
});

for(let data of arr) {
    console.log(`for...of : ${data}`)
}

for(let i=0; i < arr.length; i++){
    console.log(arr[i])
}

let i = 0;
while( i < arr.length) {
    console.log(arr[i])
    i++;
}

console.clear();

let obj = {
    name : 'milk',
    age : 5,
    color : 'white'
}

console.log(obj['name'], obj.age)

obj.country = 'korea';
obj.color = 'cream'
console.log(obj)

for(let data in obj) {
    console.log(data, obj[data])
}