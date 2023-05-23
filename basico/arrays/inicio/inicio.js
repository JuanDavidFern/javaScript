const array =  ['uno', 2, true, null, undefined];
const numbers = [1, 2, 3, 4, 5];
let names = ['Dani', 'Miguel', 'Maria'];

console.log(numbers[2]);

numbers[0] = 10;
numbers[2] = 30;

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}

console.log(names);