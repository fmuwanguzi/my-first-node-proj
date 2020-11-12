const { beBasic } = require("./myModule");

const { add, subtract} = require('./myModule')

let name = 'Felix Muwanguzi';
console.log(name);

function printName(person){
    return `hello, ${person};`;
}
console.log(printName(name))

console.log(add(5, 50));
console.log(subtract(10, 20))
