interface User3{
    id : string, 
    name : string 
}
// type Users3 = {[key:string] : User3};
//Instead of this : 
// const users3 : Users3 = {
//     'abc' : {
//         id : "hello",
//         name : "Insham"
//     },
//     '123' : {
//         id : "hi",
//         name : "Inshu"
//     }
// };
//try this: 
//Records 
type users3 = Record<string,User3>;
const user3 : users3 = {
    'abc' : {
        id : "hello",
        name : "Insham"
    },
    '123' : {
        id : "hi",
        name : "Inshu"
    }
};
