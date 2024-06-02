"use strict";
class Employee {
    constructor(name, post, age) {
        this.name = name;
        this.post = post;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("insham", "CEO", 19);
e.greet("helo how r doing");
