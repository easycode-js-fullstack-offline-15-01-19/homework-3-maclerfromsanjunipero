// -------------------------- Home work 3 --------------------------
// -------------------------- Vasilenko Maxim --------------------------

// ----- Циклы. Задачи -----

// ----- Задача 1 -----

let str = 'i am in the easycode';
let newStr ='';

let arr = str.split(' ');

for (i = 0; i < arr.length; i++) {
    newStr += arr[i][0].toUpperCase() + arr[i].slice(1) + ' ';
}
console.log(newStr);
// ----- Задача 2 -----

str = 'tseb eht ma i';
str = str.split('').reverse().join('');


// ----- Задача 3 -----

let n = 10;
let f = 1;

for ( let i = 1; i < n; i++){
    f *= i;
}


// ----- Задача 4 -----

str = 'JavaScript is a pretty good language';

arr = str.split(' ');

for (i = 0; i < arr.length; i++) {
    newStr += arr[i][0].toUpperCase() + arr[i].slice(1) + '';
}

// console.log(newStr);

// ----- Задача 5 -----

let iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (value of iterable){
    if (value % 2){
        console.log(value);
    }
}

// ----- Задача 6 -----

let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};



for (let key in list){
    if (typeof list[key] === "string") {
        list[key] = list[key].toUpperCase();
    }
}

console.log(list);

