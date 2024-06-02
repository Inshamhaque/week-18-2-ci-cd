//UNION AND INTERSECTION OF TYPES IN TS
//UNION 
type stringOrnumber = string | number;
function greet(a:stringOrnumber){
    console.log(a);
}
greet(1);
greet("1");
//INTERSECTION 
type Manager = {
    name: string,
    date : Date
}
type Employee = {
    name : string,
    salary : number
}
type ManagerAndEmployee = Manager & Employee;
const teamLead : ManagerAndEmployee = {
    name : "John",
    date : new Date(),
    salary : 10000
}
