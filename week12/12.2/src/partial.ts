//Partial -> to convert the compulsory inputs to partial one 
interface User{
    id : string,
    name : string,
    age : string,
    email: string, 
    password : string 
};
type UpdateProps = Pick<User, 'name'|'age'|'password'>;
type PartialUpdateProps = Partial<UpdateProps>
function updateuser(updateprops:PartialUpdateProps){
    //Man, do some DB calls
}
updateuser({
    name:"insham"
})
//all the arguements are thus, optional and we can pass any of it. 
