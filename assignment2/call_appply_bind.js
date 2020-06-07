// call apply and bind is used to implement the function for particular object
var obj = { name: 'jin', age: 25 }
var fn = function (name, age) {
    return "name: "+this.name +" "+ name + " age: "+this.age + " " + age;
}
console.log(fn.call(obj, 'bob', 20))
console.log(fn.apply(obj, ['bob', 20]))

var newfn = fn.bind(obj); //bind return a function and you need to execute the function
console.log(newfn('bob',20))