interface User {
	firstName: string;
	lastName: string;
	age: number;
}
function func(user:User[]){
    const filter = user.filter((u)=>u.age>=18);
    console.log(filter);
}
func([
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 18
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 14
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 8
    },
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 48
    },
])