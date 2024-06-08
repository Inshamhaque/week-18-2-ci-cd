"use strict";
function sumofAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofAge({ name: 'insham', age: 19 }, { name: 'insham2', age: 20 });
console.log(age);
