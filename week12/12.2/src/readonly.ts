//Readonly 
// in string, the values cannot be changed, because they are referenced by memory whereas, in array, the internal 
// value can be changed, as the outer reference of the array is unchanged, and only the internal values are changed.
//if we wish to enforce such restriction on array as well, we can use this API 
//if we want the developer to not inadvertently, change any value, this comes handy 
interface user{
    name :string,
    age : number
}
const obj: Readonly<user> = {
    name: "insham",
    age : 21
}
// obj.age = 12; this is not possible 