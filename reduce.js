let nums = [1,2,3,4,5,6,7,8,9,10]
let result = 0
for( i =0; i< nums.length; i++){
    result += nums[i]
}




result = nums.reduce((t,c) => t + c, 3)

// nums.reduce( (result, i) => result + i)

console.log(result)