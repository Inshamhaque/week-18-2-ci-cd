//PICK API -> to pick values from a type or interface or set of data 
interface User{
    id : string,
    name : string,
    age : string,
    email: string, 
    password : string 
};
type UpdatedProps = Pick<User, 'name'|'age'|'email'>
function updateDB(Updatedprops: UpdatedProps){
    //db call to update the respective fields. 
}