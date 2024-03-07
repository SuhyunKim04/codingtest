function solution(my_strings, parts) {
    let answer = [];
    let result = '';
    my_strings.forEach((e,i) => {
        answer.push(e.slice(parts[i][0], parts[i][1] + 1))
        result += e.slice(parts[i][0], parts[i][1] + 1)
    })
    

    console.log(answer.join(''), result)
}



solution(["progressive", "hamburger", "hammer", "ahocorasick"],	[[0, 4], [1, 2], [3, 5], [7, 7]])


let result ;
let str = ['progressive', 'hamburger']
let parts = [[0,4],[1,2]];
// result = str.substring(0,4 + 1)
result = str[0].slice(parts[0],parts[1] + 1)

for(let i=0; i < str.length ; i++) {
    console.log(str[i].slice(parts[i][0],parts[i][1] + 1))   
}

let newArr = []
 
str.forEach( (e,i) => {
    // console.log(e.slice((parts[i][0],parts[i][1] + 1)))
    newArr.push(e.slice(parts[i][0], parts[i][1] + 1));
});

console.log(newArr)


console.clear();
let str2 = "oxooxoxxox";
let result2 = str2.split('x').map( data => data.length);
console.log(result2)

let result3 = str2.split('x').filter(data => data.length !== 0 ? data.length : null).map(data => data.length)
console.log(result3)