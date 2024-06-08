"use strict";
//MAP is just a way of writing objects in JS/TS
// const users4 = {
//     'abc' : {
//         id : "hello",
//         name : "Insham"
//     },
//     '123' : {
//         id : "hi",
//         name : "Inshu"
//     }
// };
const users4 = new Map();
users4.set('abc', { id: "hello", name: "Insham" });
users4.set('123', { id: "hi", name: "Inshu" });
const user99 = users4.get('abc');
console.log(user99);
users4.delete('123');
console.log(users4);
