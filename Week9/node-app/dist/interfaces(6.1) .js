"use strict";
function isLegal(user) {
    if (user.age >= 18) {
        return true;
    }
    return false;
}
function greet(user) {
    console.log("hellow" + user.firstName);
}
isLegal({
    firstName: "Insham",
    lastName: "haque",
    age: 20
});
greet({
    firstName: "Insham",
    lastName: "haque",
    age: 20
});
