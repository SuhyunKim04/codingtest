//못품
//이해못함

function solution(hp) {
    var a = Math.floor(hp / 5)
    var b = Math.floor((hp % 5) / 3)
   

    var c = hp - (a*5) - (b*3)
    
   return a+b+c
}

console.log(solution(24))