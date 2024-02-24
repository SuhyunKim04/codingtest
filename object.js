let puppy = {
    hair : 'white',
    age : 4,
    name : 'milk',
    sayHello : function(str) {
        return `${this.name}, ${str}`;
    },
    goodNight() {
        return `${this.name}, GoodNight`
    },
    history : {
        born : 2020,
        country : 'korean'
    }
    
} 
 
console.log(puppy.sayHello('hello'))
console.log(puppy.goodNight())
console.log(puppy['hair'])
console.log(puppy.hair)
console.log(puppy.history.born)

