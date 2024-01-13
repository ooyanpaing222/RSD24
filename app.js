
const arr = [1, 2];
const [n1, n2] = arr; //n1 =>1, n2 => 2

const user = {name:'Alice, age:22'};
const { name, age} = user; //name => Alice, age => 22

const num1 = [1, 2];
const num2 = [8, 9];
const num3 = [num1, num2]; //[[1,2],[8,9]]
const num4 = [...num1, ...num2]; //[1,2,8,9]

const add = function (a,b) {
    return a + b;
}
const sum = (a,b) => a + b;

function hello({ name }) {
    console.log(`Hello ${name}`);
}
hello({ name:'Bob'});


(function sub(a, b) {
    console.log(a - b);
})(4, 1)


((a, b) => {
    console.log(a - b);
})(4, 1)


function fn() {
    return function() {
        console.log ('Done');
    }
}
const result = fn();
result(); 
fn()();

const fn = () => () => {
    console.log("Done");
};