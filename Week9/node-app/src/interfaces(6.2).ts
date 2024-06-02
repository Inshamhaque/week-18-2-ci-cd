interface Person{
    name : string,
    post : string,
    age : number,
    greet (phrase:string) : void
}
class Employee implements Person{
    name : string;
    post : string;
    age : number;
    constructor(name:string, post:string, age:number){
        this.name = name;
        this.post = post;
        this.age = age;
    }
    greet(phrase:string){
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("insham","CEO", 19);
e.greet("helo how r doing");